import React from 'react';
import Slider from '../shared/Slider';
import '../assets/css/home.css';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function Home() {

    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-4 className=">
                    <div className="card my-5 px-3 py-2">
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <div className="timings">
                            <p className="text-info"><small>Select available time</small></p>
                            <div className="row">
                                <div className="col-4">
                                    <p className="time-text">9:30 AM</p>
                                </div>
                                <div className="col-4">
                                    <p className="time-text active">11:30 AM</p>
                                </div>
                                <div className="col-4">
                                    <p className="time-text">2:30 pM</p>
                                </div>
                                <div className="col-4">
                                    <p className="time-text">9:30 AM</p>
                                </div>
                                <div className="col-4">
                                    <p className="time-text">11:30 AM</p>
                                </div>
                                <div className="col-4">
                                    <p className="time-text">2:30 pM</p>
                                </div>
                            </div>
                            <a className="schedule-btn">Check Schedule</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;