import Radium from 'radium'
import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import Tx from 'ethereumjs-tx'

import { SystemLayout } from 'decorators/Layout'
import Form from './Form'
import FormDeposit from './FormDeposit'
import style from './style'

import AuthRequired from 'components/AuthRequired'

@connect(state => ({
  web3: state.session.web3,
  contract: state.session.contract,
  wallet: state.session.wallet,
  isMetamask: state.session.isMetamask
}))
@AuthRequired
@SystemLayout
@Radium
class Contract extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      balance: 0,
      address: null,
      totalDeposit: 0,
      txData: null,
      totalPayment: 0
    }

    this._processPayment = this._processPayment.bind(this)
    this._processDeposit = this._processDeposit.bind(this)
    this._sendTxWithMetamask = this._sendTxWithMetamask.bind(this)
    this._sendRawTx = this._sendRawTx.bind(this)
    this._processPaymentByContract = this._processPaymentByContract.bind(this)
  }

  componentDidMount() {
    let { wallet, web3, contract } = this.props

    contract.getAmountBuyer((err, result) => {
      this.setState({
        totalDeposit: web3.fromWei(result.toNumber(), 'ether')
      })
    })

    contract.getAmountBuyerPay((err, result) => {
      this.setState({
        totalPayment: web3.fromWei(result.toNumber(), 'ether')
      })
    })

    this.setState({
      balance: parseFloat(web3.fromWei(wallet.balance, 'ether')),
      address: wallet.getAddressString()
    })
  }

  render() {
    let { contract } = this.props

    return (
      <div style={style.wrapper}>
        <Helmet>
          <title>Contracts</title>
        </Helmet>
        <div style={style.signUp}>
          <p style={style.featureDesc}>
            Total deposit: <span>{this.state.totalDeposit} ether</span>
          </p>
          <p style={style.featureDesc}>
            Total Pay: <span>{this.state.totalPayment} ether</span>
          </p>
          <Form onSubmit={this._processPayment} />
          <p>{this.state.txData}</p>
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
          <br />
          <FormDeposit contract={contract} onSubmit={this._processDeposit}/>
        </div>
      </div>
    )
  }

  _processPaymentByContract(data) {
    const { web3, contract } = this.props
    contract.buyerDepositToContract({
      value: web3.toWei(data.amount, 'ether'),
      gas: 2000000
    }, (err, data) => {
      console.log('error', err)
      console.log('data', data)
    })
  }

  _processPayment(data) {
    const { web3, contract } = this.props

    contract.sendMoney(data.address, data.shopId, web3.toWei(data.amount, 'ether'), (err, result) => {
      if (err) {
        console.log('error', err)
      }

      web3.eth.getTransaction(result, (err, data) => {
        this.setState({
          txData: JSON.stringify(data)
        })
      })
    })
  }

  _processDeposit(data) {
    const { isMetamask } = this.props
    this._processPaymentByContract(data)
    // if (isMetamask) {
    //   this._sendTxWithMetamask(data)
    // } else {
    //   this._sendRawTx(data)
    // }
  }

  _sendTxWithMetamask(data) {
    const { web3, contract, wallet } = this.props

    window.web3.eth.sendTransaction({
      from: wallet.getAddressString(),
      to: contract.address,
      value: web3.toWei(data.amount, 'ether')
    }, (err, data) => {
      if (err) {
        console.log('error', err)
      }
      console.log('data', data)
    })
  }

  _sendRawTx(data) {
    const { web3, contract, wallet } = this.props

    const privateKey = wallet.privKey
    let txData = {
      from: wallet.getAddressString(),
      to: contract.address,
      value: web3.toWei(data.amount, 'ether')
    }

    web3.eth.getTransactionCount(wallet.getAddressString(), (err, nonce) => {
      txData.nonce = nonce

      web3.eth.estimateGas(txData, (err, gas) => {
        txData.gas = gas

        let tx = new Tx(txData)
        tx.sign(privateKey)
        const serializedTx = tx.serialize()

        web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
          if (err) {
            console.log('error', err)
          }

          console.log('hash', hash)
        })
      })
    })
  }
}

export default Contract
