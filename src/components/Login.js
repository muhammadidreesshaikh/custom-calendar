import React from 'react';
import '../assets/css/login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Login");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>Login Login Login</p>
            </div>
        );
    }
}
export default Login;