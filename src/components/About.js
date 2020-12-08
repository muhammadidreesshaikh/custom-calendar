import React from 'react';
import '../assets/css/about.css';

class About extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("About");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>About About About</p>
            </div>
        );
    }
}
export default About;