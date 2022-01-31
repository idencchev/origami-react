import { Component } from 'react';
import Post from './Post';
import postService from '../services/postService';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async componentDidMount() {
        const data = await postService.getAll();
        this.setState({ posts: data });
    }

    render() {
        if (this.state.posts.length == 0) {
            return <span>Loading posts...</span>;
        }

        return (
            <main className={this.props.style.main}>
                <h1>Sooome Heading</h1>

                {this.state.posts.map(x => {
                    return (<Post
                        style={this.props.style}
                        key={x.id}
                        description={x.description}
                        author={x.author}
                    />
                    )
                })}



            </main>
        )
    }
}

export default Main;