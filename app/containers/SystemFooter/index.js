import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'

import { InternalLink } from 'components/Link'

import style from './style'

@connect(state => ({
  authorized: state.session.authorized
}))
@Radium
class SystemFooter extends React.Component {
  render() {
    return (
      <footer style={style.wrapper}>
        <section style={style.menuWrapper}>
          {this._renderLinks()}
          {this._renderAuthLinks()}
        </section>
      </footer>
    )
  }

  _renderLinks() {
    const { authorized } = this.props
    if (!authorized) return null

    return (
      <ul style={style.menu}>
         <li style={style.itemWrapper}>
          <InternalLink link="/contract" style={style.item}>
            <span>Contract</span>
          </InternalLink>
        </li>
      </ul>
    )
  }

  _renderAuthLinks() {
    const { authorized } = this.props
    if (authorized) return null

    return (
      <ul style={style.menu}>
        <li style={style.itemWrapper}>
          <InternalLink link="/metamask" style={style.item}>
            <span>Metamask</span>
          </InternalLink>
        </li>
        <li style={style.itemWrapper}>
          <InternalLink link="/private-key" style={style.item}>
            <span>Private Key</span>
          </InternalLink>
        </li>
      </ul>
    )
  }
}

export default SystemFooter
