import { fork } from 'redux-saga/effects'

import routing from 'saga/routing'

function *root() {
  // init
  yield fork(routing)
}

export default root
