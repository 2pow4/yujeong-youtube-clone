import React from 'react'
import {connect} from 'react-redux'
import SearchBar from '../component/searchBar.jsx'
import {keywordChange, searchClick} from '../../store/action'


class searchContainer extends React.Component {

    constructor(props){
        super(props)
    }

    handleSearchInput(e) {
        this.props.keywordChange(e.target.value)
    }

    handleClickEnter(e){
        this.props.searchClick(e.target.value)
    }

    render(){
        return(
            <SearchBar
                onKeywordChange={(e) => this.handleSearchInput(e)}
                onButtonClick={(e) => this.handleClickEnter(e)}
                term = {this.props.keyword}
            />
        )
    }
    
}

const mapStateToProps = ({searchBar}) => ({
    term: searchBar.keyword
})

const mapDispatchToProps = dispatch => ({
    keywordChange: keyword => dispatch(keywordChange(keyword)),
    searchClick: data => dispatch(searchClick(data))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(searchContainer)