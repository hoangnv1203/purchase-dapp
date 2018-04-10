import Radium from 'radium'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import Button from 'components/Button'
import TextBox from 'components/inputs/TextBox'
import ResponsiveBox from 'components/ResponsiveBox'

import { form as style } from './style'

@reduxForm({ form: 'fromdeposit' })
@Radium
class FormDeposit extends React.Component {
  render() {
    const { handleSubmit, contract } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <p style={style.row}>
          Deposit to smart contract: {contract.address}
        </p>
        <div style={style.row}>
          <Field component={TextBox}
            type="text"
            name="amount"
            placeholder="Amount of Ether"
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

export default FormDeposit
