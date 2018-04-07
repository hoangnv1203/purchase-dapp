import Web3 from 'web3'
import { BOOTSTRAP } from 'actions/bootstrap'
import { CONST } from 'constants/index'

const initialState = {
  contract: null,
  web3: null
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

export default function(state = initialState, action) {
  switch (action.type) {
    case BOOTSTRAP.SUCCESS: {
      return false
    }

    case BOOTSTRAP.SETTINGWEB3:
      return {
        ...state,
        ...settingWeb3()
      }
  }

  return state
}
