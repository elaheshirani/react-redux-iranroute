import React , { Component} from 'react';
import { Grid, Image } from 'semantic-ui-react'


export default class Info extends Component{
    render(){
        return(
            <div className="info">
                <Grid centered columns={2} className="w-50">
                    <Grid.Column style={{textAlign:'center'}}>
                        <span className="top-text">
                            Important Things You'll Like <span style={{color:'#d7941d'}}> IranRoute</span>
                        </span>
                    </Grid.Column>
                    <Grid.Row centered columns={3}>
                        <Grid.Column className="col">
                            <Image src="/images/info-1.svg"  className="info1"/>
                            <div style={{textAlign:'center',marginTop:'15px'}}>
                                <h3>Easy to Use</h3>
                                <div className="des-info">The faster easier way to book driver guide, homes tours and every thing.</div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="col">
                            <Image src="/images/info-2.svg" className="info2"/>
                            <div style={{textAlign:'center',marginTop:'15px'}}>
                                <h3>In safe Hands</h3>
                                <div className="des-info">Covered and trusted all
                                    servises by 2477 customer
                                    support team.
                                </div>
                            </div>
                        </Grid.Column>
                        <Grid.Column className="col">
                            <Image src="/images/info-3.svg" className="info3"/>
                            <div style={{textAlign:'center',marginTop:'15px'}}>
                                <h3>The Price Guarantee</h3>
                                <div className="des-info">Choose lowest price service
                                    to travel
                                    Iran destinations.</div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                </Grid>
            </div>
        )
    }
}