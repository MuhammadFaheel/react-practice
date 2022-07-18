import { useHistory, useParams } from "react-router-dom";
import { useFetch } from "./useFetch";

const BlogInformation = () => {
    const { id } = useParams();
    const { data: blog, error, isPending} = useFetch("http://localhost:8000/blogs/" + id)
    const history = useHistory();

    const clickHandler = () => {
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE"
        }).then(() => {
            history.push("/")
        })
    }

    return (
        <div className="blog-detail">
            { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>{ blog.body }</p>
                    <br />
                    <button onClick={ clickHandler }>Delete</button>
                </article>
            ) }
        </div>
    );
};
 
export default BlogInformation;