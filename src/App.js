import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import loadable from "@loadable/component";
// import About from "./components/About";

import Featured from "./components/Featured";
import Home from "./components/Home";
import Nav from "./components/Nav";
import New from "./components/New";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
// import Profile from "./components/Profile";
import SingleProduct from "./components/SingleProduct";
import "./styles.css";
// using React inbuilt lazy and suspense
const About = lazy(() => import("./components/About"));
// using package @loadable/component
const Profile = loadable(() => import("./components/Profile"));

export default function App() {
  return (
    <main className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/about"
          element={
            <Suspense fallback={<div>Loading... </div>}>
              <About />
            </Suspense>
          }
        />
        {/* Nested Route example */}
        <Route path="/products" element={<Products />}>
          {/* index - will show under parents route i.e. /products */}
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
