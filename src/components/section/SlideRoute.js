import React , { Component} from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Grid } from 'semantic-ui-react'


export default class SlideRoute extends Component{
    render(){
        const {routes} = this.props;
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay : true
        };
        return(
            <div className="slideRoute">
                <Grid.Column style={{textAlign:'center'}}>
                    <span className="top-text" style={{color:'#d7941d'}}>
                        Iran Route
                    </span>
                    <hr className="hr-home"/>
                </Grid.Column>
                <Slider {...settings}>
                    {
                        Object.keys(routes).map(RouteKey =>
                            <div className="routeItem">
                                <div class="overlay">
                                    <div class="text">{routes[RouteKey].title}</div>
                                </div>
                                <div className="title">{routes[RouteKey].title}</div>
                                <img src={routes[RouteKey].img} className="img-route"/>
                                <div className="contain-fr">
                                    <img src="/images/rate1.png" style={{float:'left',width:'80px'}}/>
                                    <span style={{float:'left'}}>146</span>
                                    <img src="/images/rate-fav.png" style={{float:'right',width:'15px'}}/>
                                    <span style={{clear:'both'}}></span>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        )
    }
}