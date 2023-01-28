import { NavLink, Outlet } from "react-router-dom";
import { data as items } from "../data";
export default function Products() {
  return (
    <section>
      <h1>Products</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="featured">Featured</NavLink>
          </li>
          <li>
            <NavLink to="new">New</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
      <article>
        {items.map((item, index) => {
          return (
            <p key={index}>
              <NavLink to={`/products/${index}`}>{item}</NavLink>
            </p>
          );
        })}
      </article>
    </section>
  );
}
