import { fork } from 'redux-saga/effects'

import routing from 'saga/routing'
import session from 'saga/session'

function *root() {
  // init
  yield fork(routing)
  yield fork(session)
}

export default root
