const { VIDEO_SEARCH } = require('../action')

const initialState = {
  video: [],
  selectedVideo: null
}

const app = (state = initialState, action) => {
  switch(action.type) {
    case VIDEO_SEARCH:
      return {
        ...state,
        video: action.video,
        selectedVideo: action.selectedVideo
      }

    default:
      return state
  }
}

module.exports = app
