import { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={this.props.style.main}>
                <h1>
                    This is an example of about page.
                <p>Software University &copy; 2022</p>
                </h1>
            </div>
        )
    }
}

export default About;