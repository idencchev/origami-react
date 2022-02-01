import { Component } from 'react';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <nav className={this.props.style.navigation} style={{ position: "fixed" }}>
                <img src="/white-origami-bird.png" alt="white origami" />
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
                <li className={this.props.style.listItem}><a href="/about">About</a></li>
            </nav>
        )
    }
}

export default Navigation;