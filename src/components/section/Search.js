import React , { Component} from 'react';
import SearchForm from "./SearchForm";

export default class Header extends Component{
    render(){
        return(
            <div className="search-home">
                <div className="search-text">
                    Iran's Routes At Your Fingertips
                </div>
                <SearchForm/>
            </div>
        )
    }
}