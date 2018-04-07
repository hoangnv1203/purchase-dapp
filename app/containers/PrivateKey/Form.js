import Radium from 'radium'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'
import TextBox from 'components/inputs/TextBox'
import ResponsiveBox from 'components/ResponsiveBox'
import { InternalLink } from 'components/Link'

import { form as style } from './style'

@reduxForm({ form: 'privatekey' })
@Radium
class Form extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <p style={style.row}>
          <span>This is <b>not</b> a recommended way to access your wallet.</span>
        </p>
        <div style={style.row}>
          <Field component={TextBox}
            type="text"
            name="key"
            placeholder="Private key"
          />
        </div>
        <div style={style.row}>
          <ResponsiveBox>
            <Button style={style.signIn} type="submit">Unlock</Button>
          </ResponsiveBox>
        </div>
      </form>
    )
  }
}

export default Form
