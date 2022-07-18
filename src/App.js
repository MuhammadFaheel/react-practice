import Home from "./Home";
import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogInformation from "./BlogInformation";
import PageNotFound from "./404Page";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/New-Blogs">
              <CreateBlog />
            </Route>
            <Route path="/Blog/:id">
              <BlogInformation />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
