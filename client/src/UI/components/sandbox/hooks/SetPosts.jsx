import { useState } from "react";
import '../../../styles/table.css'

const SetPosts = () => {
    const styleIn = {
        // for input
        border: '1px solid #ccc',
        borderRadius: 5,
        padding: 10,
        margin: 6,
        btn: {
            border: '1px solid #ccc',
            borderRadius: 5,
            padding: 10,
            margin: 6,
            cursor: 'pointer'
        }
    }

    const INITIAL_POST = {
        title: '',
        subtitle: '',
        author: '',
        createdAt: '',
    }

    if(true || false) {
        console.log("Hello world");
    }

    const [post, setPost] = useState(INITIAL_POST);
    const [posts, setPosts] = useState([]);

    const createNewPost = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPosts([...posts, {...post, createdAt: new Date().toLocaleString()}]);
        setPost(INITIAL_POST);
    }
    
    return (
        <div>
            <form style={{ width: '85%', marginTop: 40, padding: 12 }}>
                <h3>Post title: {post.title} {post.subtitle} {post.author}</h3>
                <input style={styleIn} placeholder="Enter title" type="text" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
                <input style={styleIn} placeholder="Enter subtitle" type="text" value={post.subtitle} onChange={(e) => setPost({ ...post, subtitle: e.target.value })} />
                <input style={styleIn} placeholder="Enter author" type="text" value={post.author} onChange={(e) => setPost({ ...post, author: e.target.value })} />
                <button style={styleIn.btn} onClick={createNewPost} disabled={!post.title || !post.subtitle || !post.author}>Submit</button>
            </form>

            {!!posts.length && (
                <table>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Title</th>
                            <th>Subtitle</th>
                            <th>Author</th>
                            <th>Created At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{post.title}</td>
                                <td>{post.subtitle}</td>
                                <td>{post.author}</td>
                                <td>{post.createdAt}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default SetPosts;