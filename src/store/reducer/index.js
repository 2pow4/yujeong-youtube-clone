const { combineReducers } = require('redux')
const app = require('./app.js')
const search = require('./search.js')

module.exports = combineReducers({
  app,
  search
})
