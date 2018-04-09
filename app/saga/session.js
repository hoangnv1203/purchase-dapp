import { fork, take, put, select, race, call } from 'redux-saga/effects'

import { SESSION, createWeb3Wallet } from 'actions/session'

function getAccount() {
  if (!window.web3) return

  return new Promise((resolve, reject) => {
    window.web3.eth.getAccounts(function(err, accounts) {
      if (err) {
        reject(err)
      }

      const address = accounts[0]
      const addressBuffer = Buffer.from(address.slice(2), 'hex')
      setTimeout(function() {
        return resolve(addressBuffer)
      }, 2000)
    })
  })
}

function* settingWeb3() {
  while (true) {
    yield take(SESSION.SETTINGWEB3)
  }
}

function* connectMetamask() {
  while (true) {
    yield take(SESSION.CONNECT_METAMASK)
    const addressBuffer = yield call(getAccount)
    yield put(createWeb3Wallet(addressBuffer))
  }
}

export default function* root() {
  yield fork(settingWeb3)
  yield fork(connectMetamask)
}
