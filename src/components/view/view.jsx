import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

const Menu = () => {
  return <ul>
    <li>
      <Link to="/">Home Foo</Link>
    </li>
    <li>
      <Link to="/cores">Cores</Link>
    </li>
  </ul>
}

const Rotas = () => {
  return <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cores">
            <Topics />
          </Route>
        </Switch>
}

export default function NestingExample(props) {
  console.log(props);

  return (
    <Router>
      Foo - Rota Interna 
      <div>
        <Menu />

        <hr />

        <Rotas />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home Foo</h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Cores</h2>
      <div>Raiz: {window.location.href}</div>
      <ul>
        <li>
          <Link to={`${url}/vermelho`}>vermelho</Link>
        </li>
        <li>
          <Link to={`${url}/amarelo`}>amarelo</Link>
        </li>
        <li>
          <Link to={`${url}/azul`}>azul</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Selecione uma cor</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>Cores - {topicId}</h3>
    </div>
  );
}
