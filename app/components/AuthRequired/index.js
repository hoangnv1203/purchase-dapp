import React from 'react'
import { connect } from 'react-redux'

import Redirect from 'components/Redirect'

export default function(Component) {
  @connect(state => ({
    authorized: state.session.authorized
  }))

  class AuthRequired extends React.Component {
    constructor(props) {
      super(props)
    }

    render() {
      const { authorized } = this.props
      return (
        authorized ?
        <Component { ...this.props } { ...this.state } /> :
        <Redirect path="/metamask" />
      )
    }
  }

  return AuthRequired
}
