import Web3 from 'web3'
import Wallet from 'helpers/wallet'
import { SESSION } from 'actions/session'
import { CONST } from 'constants/index'

const initialState = {
  contract: null,
  web3: null,
  authorized: false
}

function settingWeb3() {
  let web3 = new Web3(new Web3.providers.HttpProvider(CONST.HTTP))

  const PurchaseSC = web3.eth.contract(CONST.ABI)
  const purchaseSC = PurchaseSC.at(CONST.ADDRESS_CONTRACT)
  web3.eth.defaultAccount = CONST.ACCOUNT

  return {
    contract: purchaseSC,
    web3: web3
  }
}

function decryptWallet(privateKey, web3) {
  const wallet = new Wallet(privateKey)
  let authorized = false

  wallet.balance = web3.eth.getBalance(wallet.getAddressString())

  if (wallet.getAddressString()) {
    authorized = true
  }

  return {
    wallet: wallet,
    authorized: authorized
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SESSION.SUCCESS: {
      return false
    }

    case SESSION.SETTINGWEB3:
      return {
        ...state,
        ...settingWeb3()
      }

    case SESSION.DECRYPT_WALLET:
      return {
        ...state,
        ...decryptWallet(action.payload.privateKey, state.web3)
      }
  }

  return state
}
