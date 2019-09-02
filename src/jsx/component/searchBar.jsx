import React from 'react';

const SearchBar = (props) => {

    return(
        <div>
            <input type="text" value={props.state.value} onChange={this.onKeywordChange}/>
            <button onClick={props.onButtonClick}>입력</button>
        </div>
    );

}

export default SearchBar;