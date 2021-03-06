import { Component } from 'react';

class Aside extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className={this.props.style.aside}>
                <li className={this.props.style.listItem}><a href="#">Going to 1</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 2</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 3</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 4</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 5</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 6</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 7</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 8</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 9</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 10</a></li>
                <li className={this.props.style.listItem}><a href="#">Going to 11</a></li>
            </aside>
        )
    }
}

export default Aside;