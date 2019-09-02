const VIDEO_SEARCH = 'app/VIDEO_SEARCH'
const KEYWORD_CHANGE = 'searchBar/KEYWORD_CHANGE'
const SEARCH_CLICK = 'searchBar/SEARCH_CLICK'

export const videoSearch = keyword => ({type: VIDEO_SEARCH, keyword})
export const keywordChange = data => ({type: KEYWORD_CHANGE, data})
export const searchClick = videoId => ({type: SEARCH_CLICK, videoId})
