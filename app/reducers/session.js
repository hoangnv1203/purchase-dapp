import Web3 from 'web3'
import Web3Wallet from 'helpers/web3wallet'
import Wallet from 'helpers/wallet'
import { SESSION } from 'actions/session'
import { CONST } from 'constants/index'

const initialState = {
  contract: null,
  web3: null,
  authorized: false,
  wallet: null,
  isMetamask: false
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
  wallet.balance = null

  wallet.balance = web3.eth.getBalance(wallet.getAddressString())

  if (wallet.getAddressString()) {
    authorized = true
  }

  return {
    wallet: wallet,
    authorized: authorized
  }
}

function getAuth() {
  let authorized = false

  if (window.web3) {
    authorized = true
  }

  return {
    authorized: authorized
  }
}

function createWeb3Wallet(addressBuffer, web3) {
  if (!window.web3) return null

  let wallet = new Web3Wallet(addressBuffer)
  wallet.balance = web3.eth.getBalance(wallet.getAddressString())

  return {
    wallet: wallet,
    authorized: true,
    isMetamask: true
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

    case SESSION.CREATE_WEB3WALLET:
      return {
        ...state,
        ...createWeb3Wallet(action.payload.addressBuffer, state.web3)
      }

    case SESSION.SIGN_OUT:
      return {
        ...state,
        authorized: false,
        wallet: null,
        isMetamask: false
      }
  }

  return state
}
