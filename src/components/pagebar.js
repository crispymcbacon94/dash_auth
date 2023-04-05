import React from "react";
import { Link } from "react-router-dom";

function Pagebar() {
  return (
    <>

    <nav class="nav">
      <span class="nav-link active" aria-current="page" href="#">
      <Link to="/">Home</Link>
      </span>
      <span class="nav-link active" href="#">
      <Link to="/devices">Devices</Link>
      </span>
      <span class="nav-link active">
      <Link to="/user">User</Link>
      </span>
    </nav>
    <hr>
    </hr>
    </>
  );
}

export default Pagebar;

<nav class="nav">
  <span class="nav-link active" aria-current="page" href="#">Active</span>
  <span class="nav-link" href="#">
  <Link to="/">Home</Link>
  </span>
  <span class="nav-link" href="#">
  <Link to="/devices">Devices</Link>
  </span>
  <span class="nav-link disabled">
  <Link to="/user">User</Link>
  </span>
</nav>