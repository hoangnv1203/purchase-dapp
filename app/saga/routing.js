import nprogress from 'nprogress'
import { fork, take, put, select, race } from 'redux-saga/effects'

import { toggleSystemDrawer } from 'actions/drawer'
import { LAYOUT } from 'actions/layout'
import { ROUTING, redirect } from 'actions/routing'

function drawerIsOpen(layout) {
  return state => {
    return !!(state.burgerMenu[layout] && state.burgerMenu[layout].isOpen)
  }
}

function* toggleDrawer() {
  while (true) {
    yield take(ROUTING.ACCEPT)

    const systemDrawerIsOpen = yield select(drawerIsOpen(LAYOUT.SYSTEM_MODE))

    if (systemDrawerIsOpen) {
      yield put(toggleSystemDrawer(false))
    }
  }
}

export default function* root() {
  yield fork(toggleDrawer)
}
