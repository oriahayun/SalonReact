// ** Reducers Imports
import navbar from './navbar'
import layout from './layout'
import auth from './authentication'
import users from '@src/views/apps/user/store'
import ecommerce from '@src/views/apps/ecommerce/store'
import dataTables from '@src/views/tables/data-tables/store'

const rootReducer = {
  auth,
  users,
  navbar,
  layout,
  ecommerce,
  dataTables
}

export default rootReducer
