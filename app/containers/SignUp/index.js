import Radium from 'radium'
import React from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'

import { SystemLayout } from 'decorators/Layout'

import SignUpForm from './SignUpForm'
import style from './style'

@connect()
@SystemLayout
@Radium
class SignUp extends React.Component {
  constructor(props) {
    super(props)

    this._processSignUp = this._processSignUp.bind(this)
  }

  render() {
    return (
      <div style={style.wrapper}>
        <Helmet>
          <title>Sign Up</title>
        </Helmet>
        <div style={style.signUp}>
          <SignUpForm onSubmit={this._processSignUp} />
        </div>
      </div>
    )
  }

  _processSignUp(credential) {
    const { dispatch } = this.props
  }
}

export default SignUp
