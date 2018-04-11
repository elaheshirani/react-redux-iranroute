import React , { Component} from 'react';
import { Grid,Segment } from 'semantic-ui-react'

export default class CopyRight extends Component{
    render(){
        return(
            <div className="copytight">
                <Grid reversed='computer' columns='equal'>
                    <Grid.Row>
                        <Grid.Column>
                            <Segment>2018 IranRoute All rights reserved. Terms of Use | Privacy Policy | Site Map</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                                <img src="/images/logo-footer.png" />
                                <span>IranRoute, Inc.</span>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}