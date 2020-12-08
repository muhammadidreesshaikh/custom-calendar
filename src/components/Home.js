import React from 'react';
import '../assets/css/home.css';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// import data from '../data/data.json';

function Home() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [activeTime, setActiveTime] = React.useState('');
    const [allTimings, setAllTimings] = React.useState([]);
    const [data, setData] = React.useState(
        [
            {
                "Date": "2020-12-07",
                "Time": "17:00:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "17:00:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "17:30:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "17:30:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "18:00:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "18:00:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "18:30:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "18:30:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "19:00:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "19:00:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "19:30:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "19:30:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "20:00:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "20:00:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            {
                "Date": "2020-12-07",
                "Time": "20:30:00",
                "Duration": 30,
                "AppointmentInfo": {
                    "Appts": [
                        {
                            "Pools": [
                                {
                                    "Options": [
                                        {
                                            "Date": "2020-12-07",
                                            "Time": "20:30:00",
                                            "Duration": 30,
                                            "VisitType": {
                                                "ID": "    2997",
                                                "Type": "INTERNAL"
                                            },
                                            "Agent": {
                                                "ID": "    5321",
                                                "Type": "INTERNAL"
                                            },
                                            "Department": {
                                                "ID": "160199991",
                                                "Type": "INTERNAL"
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    );

    let allTimes = [];

    const active = (e) => {
        setActiveTime(e.target.id);
    }

    const formatDate = (selectedDate) => {
        let date = new Date(selectedDate);
        let finalDate = date.toLocaleDateString().split("/").reverse();
        let formattedDate = finalDate[0] + '-' + finalDate[2] + '-' + finalDate[1];

        return formattedDate;
    }

    const getTimeSchedule = (event) => {
        setSelectedDate(event);

        data.forEach(element => {
            if(formatDate(element.Date) == formatDate(event)) {
                allTimes.push(element.Time);
            }
        });

        setAllTimings(allTimes);
    }

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
                                value={selectedDate}
                                onChange={getTimeSchedule}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>

                        <div className="timings">
                            <p className="text-info"><small>Select available time</small></p>
                            <div className="row">
                                {
                                    allTimings.length > 0 ?
                                    allTimings.map((item, i) => {
                                        return(
                                            <div className="col-4" key={i}>
                                                <p id={i} 
                                                    className={"time-text " + (activeTime == i ? 'active' : '')}
                                                    onClick={(e)=> active(e)}>{item}
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
export default Home;