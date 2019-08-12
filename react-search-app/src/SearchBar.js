import React from 'react'

class SearchBar extends React.Component{

    render(){
        return(
            <div>
            <label>Search Product: </label>
            <input type="text" placeholder="Search" onChange={this.props.change} ></input>
            {/*
            <label>Show in Stock only: </label>
            <input type="checkbox" onChange={this.props.change} ></input>
            */}
            </div>
        );
    }
}

export default SearchBar;