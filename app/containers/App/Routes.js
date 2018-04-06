import React from 'react'
import { Route, Switch } from 'react-router'

import { loadableContainer } from 'helpers/loadable'

class Routes extends React.Component {
  constructor(props) {
    super(props)

    this.screens = {
      home: loadableContainer('Home', '/'),
      signIn: loadableContainer('SignIn', '/sign-in'),
      signUp: loadableContainer('SignUp', '/sign-up'),
      signPrivateKey: loadableContainer('PrivateKey', '/private-key'),
      metamask: loadableContainer('Metamask', '/metamask'),
      contract: loadableContainer('Contract', '/contract'),
    }
  }

  render() {
    return this._renderRoutes(this.screens)
  }

  _renderRoutes(screens) {
    return Object.keys(screens).map(key => {
      const Component = screens[key]

      return <Component key={key} />
    })
  }
}

export default Routes
