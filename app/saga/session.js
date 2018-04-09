import { fork, take, put, select, race } from 'redux-saga/effects'

import { SESSION } from 'actions/session'

function* settingWeb3() {
  while (true) {
    yield take(SESSION.SETTINGWEB3)
  }
}

export default function* root() {
  yield fork(settingWeb3)
}
