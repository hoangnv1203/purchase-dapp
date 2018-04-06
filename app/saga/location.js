import { fork, put, race, select, take } from 'redux-saga/effects'

import { LAYOUT } from 'actions/layout'
import { LOCATION, pushHistory, popHistory, replaceHistory } from 'actions/location'
import { togglePersonalDrawer, toggleSystemDrawer } from 'actions/drawer'

function drawerIsOpen(layout) {
  return state => {
    return !!(state.burgerMenu[layout] && state.burgerMenu[layout].isOpen)
  }
}

function* locationChanging() {
  while (true) {
    const { push, pop, replace, changed } = yield race({
      push: take(LOCATION.PUSH),
      pop: take(LOCATION.POP),
      replace: take(LOCATION.REPLACE),
      changed: take(LOCATION.CHANGED)
    })

    if (push) {
      yield put(pushHistory(push.payload.pathname))
    }

    if (pop) {
      yield put(popHistory(pop.payload.pathname))
    }

    if (replace) {
      yield put(replaceHistory(replace.payload.pathname))
    }
  }
}

function* locationChanged() {
  while (true) {
    const action = yield take(LOCATION.CHANGED)

    const systemDrawerIsOpen = yield select(drawerIsOpen(LAYOUT.SYSTEM_MODE))

    if (systemDrawerIsOpen) {
      yield put(toggleSystemDrawer(false))
    }

    const personalDrawerIsOpen = yield select(drawerIsOpen(LAYOUT.PERSONAL_MODE))

    if (personalDrawerIsOpen) {
      yield put(togglePersonalDrawer(false))
    }
  }
}

export default function* root() {
  yield fork(locationChanging)
  yield fork(locationChanged)
}
