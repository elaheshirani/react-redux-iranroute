import React from 'react';
import { connect } from 'react-redux';
import Search from "../section/Search";
import Info from "../section/Info";
import RouteContainer from "../../containers/RouteContainer";
import PlaceContainer from "../../containers/PlaceContainer";
import { recieveRoutes,recievePlaces } from "../../actions";
import shop from '../../api/shop';
import TopPlaces from "../section/TopPlaces";
import Footer from "../section/Footer";
import CopyRight from "../section/CopyRight";



class Home extends React.Component{
    componentDidMount(){
        shop.getRoutes( routes => {
            this.props.getAllRoutes (routes);
        })

        shop.getPlaces( places => {
            this.props.getAllPlaces (places);
        })
    }
    render(){
        console.log(this.props);
        return(
            <main role="main">
                <Search/>
                <Info/>
                <RouteContainer/>
                <PlaceContainer/>
                <TopPlaces/>
                <Footer/>
                <CopyRight/>
            </main>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllRoutes : routes => {
            dispatch(recieveRoutes(routes))
        },
        getAllPlaces  : places => {
        dispatch(recievePlaces(places))
         }
    }
}

export default connect(null,mapDispatchToProps)(Home);