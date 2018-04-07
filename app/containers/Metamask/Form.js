import Radium from 'radium'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'
import TextBox from 'components/inputs/TextBox'
import ResponsiveBox from 'components/ResponsiveBox'
import { InternalLink } from 'components/Link'

import { form as style } from './style'

@reduxForm({ form: 'signIn' })
@Radium
class Form extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <p style={style.row}>
          <span>This is a recommended way to access your wallet.</span>
        </p>
        <div style={style.row}>
          <ResponsiveBox>
            <Button style={style.signIn} type="submit">Connect to Metamask</Button>
          </ResponsiveBox>
        </div>
      </form>
    )
  }
}

export default Form
