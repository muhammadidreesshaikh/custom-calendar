import React from 'react';
import '../assets/css/home.css';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import data from '../data/data.json'

class Home extends React.Component {
    allTimes = [];

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            selectedDate: new Date(),
            activeTime: '',
            allTimings: ''
        };
    }

    active = (e) => {
        this.setState({ activeTime: e.target.id })
    }

    formatDate = (selectedDate) => {
        let date = new Date(selectedDate);
        let finalDate = date.toLocaleDateString().split("/").reverse();
        let formattedDate = finalDate[0] + '-' + finalDate[2] + '-' + finalDate[1];

        return formattedDate;
    }

    getTimeSchedule = (event) => {
        this.setState({ selectedDate: event })

        data.forEach(element => {
            if(this.formatDate(element.Date) == this.formatDate(event)) {
                this.allTimes.push(element.Time);
            }
        });

        this.setState({ allTimings: this.allTimes })
    }

    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-4">
                        <div className="card my-5 px-3 py-2">
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Select Date"
                                    value={this.state.selectedDate}
                                    onChange={this.getTimeSchedule}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                    autoOk={true}
                                />
                            </MuiPickersUtilsProvider>
    
                            <div className="timings">
                                <p className="text-info"><small>Select available time</small></p>
                                <div className="row">
                                    {
                                        this.state.allTimings.length > 0 ?
                                        this.state.allTimings.map((item, i) => {
                                            return(
                                                <div className="col-4" key={i}>
                                                    <p id={i} 
                                                        className={"time-text " + (this.state.activeTime == i ? 'active' : '')}
                                                        onClick={(e)=> this.active(e)}>{item}
                                                    </p>
                                                </div>
                                            )
                                        })
                                        :
                                        <div className="col-12">
                                            <p className="pt-2 text-muted">
                                                <small>No Timings available</small>
                                            </p>
                                        </div>
                                    }
                                </div>
                                <a className="schedule-btn">Check Schedule</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;