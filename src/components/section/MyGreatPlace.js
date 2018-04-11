import React, { Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types'
import {greatPlaceStyle} from './greatPlaceStyle';


export default class MyGreatPlace extends Component {
    static propTypes = {
        text: PropTypes.string
    };

    static defaultProps = {};

    shouldComponentUpdate = shouldPureComponentUpdate;

    render() {
        return (
            <div >
                {this.props.text}
            </div>
        );
    }
}