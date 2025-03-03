import React from "react";
import ReactDOM from "react-dom";

const Header = React.lazy(() => import("header/Header"));

const App = () => (
  <React.Suspense fallback={<div>Header is loading...</div>}>
    <Header />
    <h1>Shell Application</h1>
  </React.Suspense>
);

ReactDOM.render(<App />, document.getElementById("root"));
