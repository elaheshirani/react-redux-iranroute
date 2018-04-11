import React , { Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Grid } from 'semantic-ui-react'


export default class SlidePlace extends Component{
    render(){

        const {places} = this.props;

        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay : true
        };
        return(
            <div className="slidePlace">
                <Grid.Column style={{textAlign:'center'}}>
                    <span className="top-text" style={{color:'#d7941d'}}>
                        Iran's Places
                    </span>
                    <hr className="hr-home"/>
                </Grid.Column>
                <Slider {...settings}>
                    {
                        Object.keys(places).map(PlaceKey =>
                            <div className="placeItem">
                                <div className="title">{places[PlaceKey].title}</div>
                                <img src={places[PlaceKey].img} />
                            </div>
                        )
                    }
                </Slider>
            </div>
        )
    }
}