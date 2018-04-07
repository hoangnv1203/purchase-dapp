import prefix from 'helpers/prefix-map'

export const SESSION = prefix('session', {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  SETTINGWEB3: 'SETTINGWEB3',
  DECRYPT_WALLET: 'DECRYPT_WALLET'
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
