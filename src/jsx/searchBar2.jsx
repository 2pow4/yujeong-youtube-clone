import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {term: ''};
    }

    onKeywordChange = (event) => {
        this.setState({term: event.target.value})
    }

    onButtonClick = (event) => {
        event.preventDefault()
        this.props.onSearchTermChange(this.state.term);
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.value} onChange={this.onKeywordChange}/>
                <button onClick={this.onButtonClick}>입력</button>
            </div>
        );
    }
}

export default SearchBar;