import React from 'react';
import '../assets/css/slider.css';

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loading: false
        };
    } 

    componentDidMount() {
        console.log("Slider");

        this.setState({
            loading: true
        });
    }

    render() {
        return(
            <div>
                <p>Slider Slider Slider</p>
            </div>
        );
    }
}
export default Slider;