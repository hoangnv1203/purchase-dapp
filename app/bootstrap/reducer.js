import { combineReducers } from 'redux'

import { reducer as burgerMenu } from 'redux-burger-menu'

import session from 'reducers/session'
import form from 'reducers/form'
import routing from 'reducers/routing'
import ui from 'reducers/ui'

export default combineReducers({
  session,
  burgerMenu,
  form,
  routing,
  ui
})
