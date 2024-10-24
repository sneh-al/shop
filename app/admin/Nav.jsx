import React from "react";

const Nav = () => {
  return (
    <nav className=" bg-accent text-accent-foreground p-5 flex justify-between items-center">
      <h1 className="text-3xl font-bold">Admin Panel</h1>
      <ul className="flex gap-5 justify-center items-center">
        <li>
          <a href="/admin">Orders</a>
        </li>
        <li>
          <a href="/admin/products"> Products</a>
        </li>
        <li>
          <a href="/admin/users">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
