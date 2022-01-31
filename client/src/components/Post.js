import { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (<div className={this.props.style.posts}>
            <img src="/blue-origami-bird.png" alt="Origami" />
            <p className={this.props.style.description}>
                {this.props.description}
            </p>
            <div>
                <span>
                    <small>Author:</small>
                    {this.props.author}
                </span>
            </div>
        </div>
        )
    }
}

export default Post;