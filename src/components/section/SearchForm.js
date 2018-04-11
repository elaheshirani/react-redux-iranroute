import React from 'react';
import { Dropdown,Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'
import validator from 'validator';

const cityOptions = [
    { key: 'Is', value: 'Isfahan', name: 'Is', text: 'Isfahan' },
    { key: 'Te', value: 'Tehran', name: 'Te', text: 'Tehran' },
    { key: 'Shi', value: 'Shiraz', name: 'Shi', text: 'Shiraz' },
    { key: 'Ah', value: 'Ahvaz', name: 'Ah', text: 'Ahvaz' }
]
class SearchForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            fields : {
                name : '',
                family : '',
                email : '',
                mobile : '',
                gender : '',
                birthday : '',
                city : '',
                bio : ''
            },
            errors : {}
        }
    }


    handleChangeDropDown = (event: React.SyntheticEvent<HTMLDivElement>, data: any) => {
        let fields = this.state.fields;
        fields["city"] = data.value;
        this.setState({
            fields
        });
    }


    handleValidation(callback) {
        let { fields } = this.state;
        let errors = {};
        let formIsValid = true;

        // city
        if(validator.isEmpty(fields.city)) {
            formIsValid = false;
            errors["city"] = "City is required !";
        }

        this.setState({ errors },() => {
            return callback(formIsValid)
        });

    }

    handleSubmit(e){
        e.preventDefault();
        this.handleValidation((valid) => {
            let {pathname} = this.props.location;
            const locationPush = {
                pathname: '/userPanel',
                state: { from: {pathname: pathname} }
            }

            if(valid) {
                const userInfo = this.state.fields;
                localStorage.setItem('userInfo' , JSON.stringify(userInfo));
                this.props.history.push(locationPush);
            }
        })
    }
    render(){
        const { errors } = this.state;
        return(
            <div className="container-search">
                <form className="searchForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="drop-search">
                        <Dropdown multiple search selection closeOnChange options={cityOptions} placeholder='Any Where ( place / route /.. )' className="item-drop" />
                        <span className="vl"></span>
                        <Dropdown multiple search selection options={cityOptions} placeholder='Categories' className="item-drop" />
                    </div>
                    <Button animated='fade' className="btn-search btn-home">
                        <Button.Content visible>
                            Search
                        </Button.Content>
                        <Button.Content hidden>
                            Search
                        </Button.Content>
                    </Button>
                </form>
            </div>
            /*<div >
                <Dropdown placeholder='Select City' name="city"   fluid search selection options={cityOptions}  onChange={this.handleChangeDropDown} />
                <span className="invalid-feedback rtl" style={{ display : errors["city"] ? 'block' : 'none'}}>{errors["city"]}</span>
                <Dropdown placeholder='Select City' name="city"   fluid search selection options={cityOptions}  onChange={this.handleChangeDropDown} />
                <span className="invalid-feedback rtl" style={{ display : errors["city"] ? 'block' : 'none'}}>{errors["city"]}</span>
                </form>
            </div>*/


        )
    }
}

export default withRouter(SearchForm);