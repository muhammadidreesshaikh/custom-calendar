import React from 'react';
import '../assets/css/services.css';

class Services extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Services");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>Services Services Services</p>
            </div>
        );
    }
}
export default Services;