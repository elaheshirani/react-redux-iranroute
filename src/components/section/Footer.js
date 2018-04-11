import React , { Component} from 'react';
import { Grid,Image } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

export default class Footer extends Component{
    render(){
        return(
            <div className="footer-home">
                <Grid reversed='computer' columns='equal'>
                    <Grid.Row>
                        <Grid.Column className="col social">
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/facebook.png' /></NavLink>
                            </Grid.Column>
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/insta.png' /></NavLink>
                            </Grid.Column>
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/linkedin.png' /></NavLink>
                            </Grid.Column>
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/pinere.png' /></NavLink>
                            </Grid.Column>
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/telegram.png' /></NavLink>
                            </Grid.Column>
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/twitter.png' /></NavLink>
                            </Grid.Column>
                            <Grid.Column >
                                <NavLink className="link-f" to="/"><Image src='/images/youtube.png' /></NavLink>
                            </Grid.Column>
                        </Grid.Column>
                        <Grid.Column className="col">
                            <div className="links">
                                <div className="txt-head">QUICK LINKS</div>
                                <ul>
                                    <li><NavLink className="link-f" to="/">Gilgamesh Magazine</NavLink></li>
                                    <li><NavLink className="link-f" to="/">Top Routes</NavLink></li>
                                    <li><NavLink className="link-f" to="/">Top Places</NavLink></li>
                                </ul>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="col">
                            <div className="links">
                                <div className="txt-head">TRAVELER TOOLS</div>
                                <ul>
                                    <li><NavLink className="link-f" to="/">Customer Support</NavLink></li>
                                    <li><NavLink className="link-f" to="/">Get Apps</NavLink></li>
                                </ul>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="col">
                            <div className="links">
                                <div className="txt-head">IRAN ROUTES</div>
                                <ul>
                                    <li><NavLink className="link-f" to="/">About Us</NavLink></li>
                                    <li><NavLink className="link-f" to="/">Contact Us</NavLink></li>
                                    <li><NavLink className="link-f" to="/">Services</NavLink></li>
                                    <li><NavLink className="link-f" to="/">Privacy Policy</NavLink></li>
                                </ul>
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        )
    }
}