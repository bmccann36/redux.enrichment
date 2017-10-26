import { combineReducers } from 'redux'

import students from './students'
import campuses from './campuses'

const reducer = combineReducers({
  students,
  campuses
})

export default reducer


export * from './students'
export * from './campuses'
