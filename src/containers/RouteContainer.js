import React , { Component } from 'react';
import {connect} from 'react-redux';
import SlideRoute from "../components/section/SlideRoute";



class RouteContainer extends Component{
    render(){
        const {routes} = this.props;
        return(
            <div>
                <SlideRoute  routes={routes} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        routes : state.routes.routebyId
    }
}

export default connect(mapStateToProps,null)(RouteContainer);