import { combineReducers } from 'redux'

import students from './students'

const reducer = combineReducers({
  students
})

export default reducer


export * from './students'
