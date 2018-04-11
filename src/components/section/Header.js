import React , { Component} from 'react';
import { Button, Dropdown, Menu,Grid } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';
import {countryOptions,menuOptions} from '../../consts/consts';


export default class Header extends Component{
    state = { activeItem: 'Iran Routes' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        const { activeItem } = this.state
        return(
            <div className="menuContainer">

                <Menu size='massive'>
                    <Menu.Item name="Iran Routes" active={activeItem === "Iran Routes"} onClick={this.handleItemClick} />
                    <Menu.Item name="Iran's Places" active={activeItem === "Iran's Places"} onClick={this.handleItemClick} />
                    <Menu.Item name="Local Guides" active={activeItem === "Local Guides"} onClick={this.handleItemClick} />

                    <Grid centered className="logo">
                        <Grid.Row>
                            <Grid.Column>
                                <img src="/images/logo-header.svg" className="img-logo" alt="logo"/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                    <Menu.Menu position='right' className="menu-left">
                        <Menu.Item>
                            <NavLink className="nav-link" to="/fav">
                                <img src="/images/fav.png"  alt="" width="22"/>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink className="nav-link" to="/userProfile">
                                <img src="/images/user.svg"  alt="" width="20"/>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <Button className="btn-home">JOIN</Button>
                        </Menu.Item>
                        <Menu.Item>
                            <img src="/images/usa.png"  alt="" width="20" style={{marginRight:'10px'}}/>
                            <Dropdown text='EN'   className='icon lang-home' >
                                <Dropdown.Menu className="drop-right">
                                    {countryOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                        <Menu.Item>
                            <Dropdown text=''  icon="content" className='icon ' >
                                <Dropdown.Menu className="drop-right lang-home">
                                    {menuOptions.map(option => <Dropdown.Item key={option.value} {...option} />)}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>

        )
    }
}
