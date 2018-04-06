import { combineReducers } from 'redux'

import { reducer as burgerMenu } from 'redux-burger-menu'

import bootstrap from 'reducers/bootstrap'
import form from 'reducers/form'
import routing from 'reducers/routing'
import ui from 'reducers/ui'

export default combineReducers({
  bootstrap,
  burgerMenu,
  form,
  routing,
  ui
})
