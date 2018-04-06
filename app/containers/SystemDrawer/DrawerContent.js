import Radium from 'radium'
import React from 'react'

import { InternalLink } from 'components/Link'

import { content as style } from './style'

@Radium
class DrawerContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { signedIn } = this.props

    return (
      <ul style={style.wrapper}>
        <li>
          <InternalLink link="/" style={style.heading}>
            <span>Nexty purchase</span>
          </InternalLink>
        </li>
        { signedIn ?
            this._renderPersonalMenu() :
            this._renderPublicMenu()
        }
      </ul>
    )
  }

  _renderPublicMenu() {
    return [
      <li key="contract">
        <InternalLink link="/contract" style={style.item}>
          <span>Contract</span>
        </InternalLink>
      </li>,
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
}

export default DrawerContent
