import Radium from 'radium'
import React from 'react'
import { Helmet } from 'react-helmet'

import { InternalLink } from 'components/Link'
import { SystemLayout } from 'decorators/Layout'

import style from './style'

@SystemLayout
@Radium
class HomePage extends React.Component {
  render() {
    return (
      <section style={style.wrapper}>
        <Helmet>
          <title>Nexty</title>
        </Helmet>
        <div style={style.about}>
          <div style={style.homeHead}>
            <div id="logo" style={style.homeHeadAnimation}></div>
          </div>
          <h1 style={style.heading}>Nexty Platform Payment Online</h1>
          <p style={style.description}><b>Payment online</b></p>
        </div>
        <div style={style.features}>
          <ul style={style.featuresList}>
            <li style={style.feature}>
              <span style={style.featureName}>An innovative dashboard</span>
              <p style={style.featureDesc}></p>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default HomePage
