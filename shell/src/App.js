import React, { Suspense } from "react";

const Header = React.lazy(() => import("header/Header"));

const App = () => (
  <Suspense fallback={<div>Loading Header...</div>}>
    <Header />
    <h1>This is the Shell Application</h1>
  </Suspense>
);

export default App;
