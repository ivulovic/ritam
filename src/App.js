import HomePage from "containers/Home";
import DrumsPage from "containers/Drums";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "components/Navigation";
import SamplesPage from "containers/Samples";

function App() {
  const renderPageLayout = (C, p) => (
    <div className="page">
      <C {...p} />
    </div>
  )
  return (
    <Router basename="/ritam">
      <div className="page-layout">
        <Navigation />

        <Switch>
          <Route path="/samples/:id/:type" render={p => renderPageLayout(SamplesPage, p)} />
          <Route path="/drums" render={p => renderPageLayout(DrumsPage, p)} />
          <Route path="/" render={p => renderPageLayout(HomePage, p)} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
