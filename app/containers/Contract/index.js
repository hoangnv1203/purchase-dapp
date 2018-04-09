import Radium from 'radium'
import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { SystemLayout } from 'decorators/Layout'
import Form from './Form'
import style from './style'

import AuthRequired from 'components/AuthRequired'

@connect(state => ({
  web3: state.session.web3,
  contract: state.session.contract,
  wallet: state.session.wallet
}))
@AuthRequired
@SystemLayout
@Radium
class Contract extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: 0,
      address: null
    }

    this._processDeposit = this._processDeposit.bind(this)
  }

  componentDidMount() {
    let { wallet, web3 } = this.props

    this.setState({
      balance: parseFloat(web3.fromWei(wallet.balance, 'ether')),
      address: wallet.getAddressString()
    })
  }

  render() {
    return (
      <div style={style.wrapper}>
        <Helmet>
          <title>Contracts</title>
        </Helmet>
        <div style={style.signUp}>
          <Form onSubmit={this._processDeposit} />
        </div>
        <div style={style.promoteSignUp}>
          <p style={style.signUpQuestion}>
            <b>Account information</b>
          </p>
          <p style={style.featureDesc}>
            <b>Account Address:</b> <span>{this.state.address}</span>
          </p>
          <p style={style.featureDesc}>
            <b>Account Balance:</b> <span>{this.state.balance} ether</span>
          </p>
        </div>
      </div>
    )
  }

  _processDeposit(data) {
    const { web3, contract } = this.props

    contract.sendMoney(data.address, data.shopId, data.amount, (err, result) => {
      if (err) {
        console.log('error', err)
      }
      console.log('Deposit success', result)
    })
  }
}

export default Contract
