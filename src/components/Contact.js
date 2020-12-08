import React from 'react';
import '../assets/css/contact.css';

class Contact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Contact");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>Contact Contact Contact</p>
            </div>
        );
    }
}
export default Contact;