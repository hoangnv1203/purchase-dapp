import { fork, take, put, select, race } from 'redux-saga/effects'

import { BOOTSTRAP } from 'actions/bootstrap'

function* settingWeb3() {
  while (true) {
    yield take(BOOTSTRAP.SETTINGWEB3)
    console.log('xxx')
  }
}

export default function* root() {
  yield fork(settingWeb3)
}
