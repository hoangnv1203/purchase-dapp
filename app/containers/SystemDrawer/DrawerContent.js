import Radium from 'radium'
import React from 'react'
import { redirect } from 'actions/routing'
import { signOut } from 'actions/session'
import { InternalLink } from 'components/Link'
import { content as style } from './style'

@Radium
class DrawerContent extends React.Component {
  constructor(props) {
    super(props)

    this._signOut = this._signOut.bind(this)
  }

  render() {
    return (
      <ul style={style.wrapper}>
        <li>
          <InternalLink link="/" style={style.heading}>
            <span>Nexty purchase</span>
          </InternalLink>
        </li>
        {this._renderPublicMenu()}
        {this._renderPrivateMenu()}
      </ul>
    )
  }

  _renderPublicMenu() {
    const { authorized } = this.props
    if (authorized) return null

    return [
      <li key="metamask">
        <InternalLink link="/metamask" style={style.item}>
          <span>MetaMask</span>
        </InternalLink>
      </li>,
      <li key="private-key">
        <InternalLink link="/private-key" style={style.item}>
          <span>Private Key</span>
        </InternalLink>
      </li>
    ]
  }

  _renderPrivateMenu() {
    const { authorized } = this.props
    if (!authorized) return null

    return [
      <li key="contract">
        <InternalLink link="/contract" style={style.item}>
          <span>Contract</span>
        </InternalLink>
      </li>,
      <li key="sign-out">
        <span style={style.item} onClick={this._signOut}>Sign out</span>
      </li>
    ]
  }

  _signOut() {
    const { dispatch } = this.props

    dispatch(signOut())
    dispatch(redirect('/'))
  }
}

export default DrawerContent
