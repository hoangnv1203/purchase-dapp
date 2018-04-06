import Radium from 'radium'
import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { LinkButton } from 'components/Button'
import { InternalLink } from 'components/Link'
import Redirect from 'components/Redirect'
import ResponsiveBox from 'components/ResponsiveBox'
import { SystemLayout } from 'decorators/Layout'

import SignInForm from './SignInForm'
import style from './style'

@connect(state => ({
  reject: state.routing.reject,
}))
@SystemLayout
@Radium
class SignIn extends React.Component {
  constructor(props) {
    super(props)

    this._processSignIn = this._processSignIn.bind(this)
  }

  render() {
    const { reject } = this.props

    return this._renderLayout()
  }

  _renderLayout() {
    return (
      <div style={style.wrapper}>
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <div style={style.signIn}>
          <SignInForm onSubmit={this._processSignIn} />
        </div>
        <div style={style.promoteSignUp}>
          <p style={style.signUpQuestion}>
            <b>Don't have an account on Nexty Purchase yet?</b>
          </p>
          <InternalLink link="/sign-up">Create a new account</InternalLink>
        </div>
      </div>
    )
  }

  _processSignIn(credential) {
    const { dispatch } = this.props
  }
}

export default SignIn
