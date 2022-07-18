import { useState } from "react";
import { useHistory } from "react-router-dom";
import { AddBlog } from "./useFetch";

const CreateBlog = () => {
    const [ title, setTitle ] = useState("");
    const [ body, setBody ] = useState("");
    const [ isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blogItem = { title, body };

        setIsPending(true);

        AddBlog("http://localhost:8000/blogs", blogItem).then(() => {
            history.push("/")
        });
    }

    return (
        <div className="createBlog">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required value={ title } onChange={ (e) => setTitle(e.target.value) } />
                <label>Blog Body:</label>
                <textarea required value={ body } onChange={ (e) => setBody(e.target.value) } ></textarea>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled >Submitting...</button> }
            </form>
        </div>
    );
};
 
export default CreateBlog;