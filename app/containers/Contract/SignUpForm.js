import Radium from 'radium'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'
import TextBox from 'components/inputs/TextBox'
import ResponsiveBox from 'components/ResponsiveBox'

import { form as style } from './style'

@reduxForm({ form: 'signUp' })
@Radium
class SignUpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <p style={style.row}>
          <span>Handle payment online</span>
        </p>
        <div style={style.row}>
          <Field component={TextBox}
            type="text"
            name="address"
            placeholder="Wallet address"
          />
        </div>
        <div style={style.row}>
          <Field component={TextBox}
            type="text"
            name="shopId"
            placeholder="Shop Id"
          />
        </div>
        <div style={style.row}>
          <Field component={TextBox}
            type="text"
            name="amount"
            placeholder="Amount"
          />
        </div>
        <div style={style.row}>
          <ResponsiveBox>
            <Button type="submit">Deposit</Button>
          </ResponsiveBox>
        </div>
      </form>
    )
  }
}

export default SignUpForm
