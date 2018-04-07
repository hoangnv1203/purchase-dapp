import { fork } from 'redux-saga/effects'

import routing from 'saga/routing'
import bootstrap from 'saga/bootstrap'

function *root() {
  // init
  yield fork(routing)
  yield fork(bootstrap)
}

export default root
