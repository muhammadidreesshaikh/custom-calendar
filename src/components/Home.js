import React from 'react';
import Slider from '../shared/Slider';
import '../assets/css/home.css';
// import { Link } from 'react-router-dom';

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Home");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4">
                        <div className="card my-5">
                            <p>Home</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;