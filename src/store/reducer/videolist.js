const { SEARCH_CLICK } = require('../action')

const initialState = {
  playingVideoId: ''
}

const result = (state = initialState, action) => {
  switch(action.type) {
    case SEARCH_CLICK:
      return {
        ...state,
        playingVideoId: action.playingVideoId
      }
    default:
      return state
  }
}

module.exports = result
