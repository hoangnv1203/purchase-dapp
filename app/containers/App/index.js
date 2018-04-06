import React from 'react'

import SystemDrawer from 'containers/SystemDrawer'
import Header from './Header'
import Footer from './Footer'
import Routes from './Routes'
import style from './style'

class App extends React.Component {
  render() {
    return [
      <SystemDrawer key="system-drawer" />,
      <div id="page-wrap" style={style.wrapper} key="page-wrap">
        <Header />
          <Routes />
        <Footer />
      </div>
    ]
  }
}

export default App
