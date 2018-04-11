import React , { Component} from 'react';
import { Grid,Dropdown, Menu } from 'semantic-ui-react';
//import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import GoogleMap from 'google-map-react';
import MyGreatPlace from "./MyGreatPlace";
import PropTypes from 'prop-types'
const getOptions = [
    { key: 1, text: 'Spring', value: 1 },
    { key: 2, text: 'Summer', value: 2 },
    { key: 3, text: 'Autumn', value: 3 },
    { key: 4, text: 'Winter', value: 4 },
]


export default class TopPlaces extends Component{
    static propTypes = {
        center: PropTypes.array,
        zoom: PropTypes.number,
        greatPlaceCoords: PropTypes.any
    };
    static defaultProps = {
        center: [59.938043, 30.337157],
        zoom: 9,
        greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
    };
    shouldComponentUpdate = shouldPureComponentUpdate;



    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div  >
                <div className="top-places">
                    <Grid centered columns={2} className="w-50">
                        <Grid.Column style={{textAlign:'center'}} >
                            <span className="top-text" style={{color:'#d7941d'}}>
                                Top Places
                            </span>
                            <hr className="hr-home"/>
                        </Grid.Column>
                        <Grid.Row centered columns={4}>
                            <Grid.Column className="col">
                                <span className="top-txt">Top</span>
                                <img src="/images/top10.png"  />
                                <div className="des-info">UNESCO Places</div>
                            </Grid.Column>
                            <Grid.Column className="col">
                                <span className="top-txt">Top</span>
                                <img src="/images/top10.png" />
                                <div className="des-info">Spiritual Places</div>
                            </Grid.Column>
                            <Grid.Column className="col">
                                <span className="top-txt">Top</span>
                                <img src="/images/top10.png" />
                                <div className="des-info">Pristine Places</div>
                            </Grid.Column>
                            <Grid.Column className="col">
                                <span className="top-txt">Top</span>
                                <img src="/images/top10.png" />
                                <div className="des-info">Famous Places</div>
                            </Grid.Column>
                        </Grid.Row>
                        <div className="season-drop">
                            <Dropdown placeholder='Spring' scrolling options={getOptions} error/>
                        </div>
                    </Grid>
                </div>
                <div className="contain-map">
                    <GoogleMap
                        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
                        center={this.props.center}
                        zoom={this.props.zoom}>
                        <MyGreatPlace lat={59.955413} lng={30.337844} text={'A'} /* Kreyser Avrora */ />
                        <MyGreatPlace {...this.props.greatPlaceCoords} text={'B'} /* road circle */ />
                    </GoogleMap>
                </div>
            </div>

        )
    }
}