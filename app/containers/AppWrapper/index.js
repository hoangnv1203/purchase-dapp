import React from 'react'
import { connect } from 'react-redux'

import App from 'containers/App'
import HistoryProvider from 'containers/HistoryProvider'
import ReduxRouter from 'containers/ReduxRouter'

class AppWrapper extends React.Component {
  render() {
    return (
      <HistoryProvider>
        <ReduxRouter history={history}>
          <App />
        </ReduxRouter>
      </HistoryProvider>
    )
  }
}

export default AppWrapper
