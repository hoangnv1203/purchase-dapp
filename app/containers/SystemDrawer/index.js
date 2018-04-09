import React from 'react'
import { connect } from 'react-redux'

import { slide as Menu } from 'react-burger-menu'
import { decorator as reduxBurgerMenu } from 'redux-burger-menu'

import IconClose from 'react-icons/lib/io/close-round'

import { LAYOUT } from 'actions/layout'

import DrawerContent from './DrawerContent'
import DrawerBottom from './DrawerBottom'
import { sideMenuStyle } from './style'

const ReduxMenu = reduxBurgerMenu(Menu, LAYOUT.SYSTEM_MODE)
@connect(state => ({
  authorized: state.session.authorized
}))

class SystemDrawer extends React.PureComponent {
  render() {
    const { dispatch, authorized } = this.props

    return (
      <ReduxMenu right
        pageWrapId="page-wrap"
        width={240}
        styles={sideMenuStyle}
        customBurgerIcon={false}
        customCrossIcon={false}>
        <DrawerContent authorized={authorized} dispatch={dispatch} />
        <DrawerBottom />
      </ReduxMenu>
    )
  }
}

export default SystemDrawer
