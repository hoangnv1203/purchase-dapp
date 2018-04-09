import prefix from 'helpers/prefix-map'

export const SESSION = prefix('session', {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  SETTINGWEB3: 'SETTINGWEB3',
  DECRYPT_WALLET: 'DECRYPT_WALLET',
  CONNECT_METAMASK: 'CONNECT_METAMASK',
  CREATE_WEB3WALLET: 'CREATE_WEB3WALLET',
  SIGN_OUT: 'SIGN_OUT'
})

export function bootstrap() {
  return {
    type: SESSION.REQUEST
  }
}

export function settingWeb3() {
  return {
    type: SESSION.SETTINGWEB3
  }
}

export function decryptWallet(privateKey) {
  return {
    type: SESSION.DECRYPT_WALLET,
    payload: {
      privateKey: privateKey
    }
  }
}

export function connectMetamask() {
  return {
    type: SESSION.CONNECT_METAMASK
  }
}

export function createWeb3Wallet(addressBuffer) {
  return {
    type: SESSION.CREATE_WEB3WALLET,
    payload: {
      addressBuffer: addressBuffer
    }
  }
}

export function signOut() {
  return {
    type: SESSION.SIGN_OUT
  }
}
