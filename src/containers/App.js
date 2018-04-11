import React , { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import '../css/style.css';
import Header from "../components/section/Header";
import {Route, Switch} from 'react-router-dom';
import NoMatch from "../components/pages/NoMatch";
import Home from "../components/pages/Home";

class App extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Header/>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                    <Route  component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}

export default connect()(App);