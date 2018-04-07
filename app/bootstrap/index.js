import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { bootstrap, settingWeb3 } from 'actions/session'
import AppWrapper from 'containers/AppWrapper'
import store from './store'

class Bootstrap extends React.Component {
  componentDidMount() {
    store.dispatch(bootstrap())
    store.dispatch(settingWeb3())
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <AppWrapper />
      </ReduxProvider>
    )
  }
}

export default Bootstrap
