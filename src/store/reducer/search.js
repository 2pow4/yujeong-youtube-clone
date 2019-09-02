const { KEYWORD_CHANGE, SEARCH_CLICK } = require('../action')

const initialState = {
  keyword: '',
  data: []
}

const input = (state = initialState, action) => {
  switch(action.type) {
    case KEYWORD_CHANGE:
      return {
        ...state,
        keyword: action.keyword
      }

    case SEARCH_CLICK:
      return {
        ...state,
        data: action.data
      }

    default:
      return state
  }
}

module.exports = input
