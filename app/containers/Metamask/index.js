import Radium from 'radium'
import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { LinkButton } from 'components/Button'
import { InternalLink } from 'components/Link'
import Redirect from 'components/Redirect'
import ResponsiveBox from 'components/ResponsiveBox'
import { SystemLayout } from 'decorators/Layout'
import { connectMetamask } from 'actions/session'

import Form from './Form'
import style from './style'

@connect(state => ({
  reject: state.routing.reject,
}))
@SystemLayout
@Radium
class Metamask extends React.Component {
  constructor(props) {
    super(props)

    this._processConnectToMetamask = this._processConnectToMetamask.bind(this)
  }

  render() {
    const { reject } = this.props

    return this._renderLayout()
  }

  _renderLayout() {
    return (
      <div style={style.wrapper}>
        <Helmet>
          <title>Metamask</title>
        </Helmet>
        <div style={style.signIn}>
          <Form onSubmit={this._processConnectToMetamask} />
        </div>
        <div style={style.promoteSignUp}>
          <p style={style.signUpQuestion}>
            This allows you to download different versions of private keys and re-print your paper wallet. You may want to do this in order to import your account into Geth/Mist. If you want to check your balance, we recommend using a blockchain explorer like etherscan.io.
          </p>
        </div>
      </div>
    )
  }

  _processConnectToMetamask(credential) {
    const { dispatch } = this.props
    dispatch(connectMetamask())
  }
}

export default Metamask
