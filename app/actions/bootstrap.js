import prefix from 'helpers/prefix-map'

export const BOOTSTRAP = prefix('bootstrap', {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  SETTINGWEB3: 'SETTINGWEB3'
})

export function bootstrap() {
  return {
    type: BOOTSTRAP.REQUEST
  }
}

export function settingWeb3() {
  return {
    type: BOOTSTRAP.SETTINGWEB3
  }
}
