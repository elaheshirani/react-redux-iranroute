import React , { Component } from 'react';
import {connect} from 'react-redux';
import SlidePlace from "../components/section/SlidePlace";



class PlaceContainer extends Component{
    render(){
        const {places} = this.props;
        return(
            <div>
                <SlidePlace  places={places} />
            </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        places : state.places.placebyId
    }
}


export default connect(mapStateToProps,null)(PlaceContainer);