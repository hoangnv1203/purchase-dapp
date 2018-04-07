import Radium from 'radium'
import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { InternalLink } from 'components/Link'
import { SystemLayout } from 'decorators/Layout'

import style from './style'

@connect(state => ({
  web3: state.bootstrap.web3,
  contract: state.bootstrap.contract
}))
@SystemLayout
@Radium
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      totalBalance: 0,
      totalBuyer: 0,
      historiesTx: null
    }
  }

  componentDidMount() {
    this.updateState()
  }

  updateState() {
    const { web3, contract } = this.props

    contract.getTotalAmount((err, result) => {
      if (!result) {
        return
      }

      this.setState({
        totalBalance: parseFloat(web3.fromWei(result, 'ether'))
      })
    })

    contract.getTotalBuyer((err, result) => {
      if (!result) {
        return
      }

      this.setState({
        totalBuyer: parseFloat(result)
      })
    })
  }

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
              <span style={style.featureName}>Dashboard</span>
              <p style={style.featureDesc}>
                Total balance: <span>{this.state.totalBalance} ether</span>
              </p>
              <p style={style.featureDesc}>
                Total buyer: <span>{this.state.totalBuyer}</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default HomePage
