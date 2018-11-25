import React, { Component } from 'react';

import DatePicker from "react-datepicker";
import moment from 'moment';



class Picker extends component {
    render() {
        constructor(props) ;{
            Super(props);
            this.state = {
                startDate: moment()
            };
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(date) ;{
            console.log('trying to change date for', date._d)
            this.setState({
                startDate: date
            });
        }
        return (

            <div className="Picker">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
export default Picker;
