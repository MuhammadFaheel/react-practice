import { Link } from "react-router-dom";

const PageNotFound= () => {
    return (
        <div className="Page-Not-Found">
            <h2>Sorry</h2>
            <p>The Page is not Found...</p>
            <Link to="/">Back To Home</Link>
        </div>
    );
}
 
export default PageNotFound;