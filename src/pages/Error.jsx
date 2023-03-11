import React from "react";
import { Link } from "react-router-dom";
function Error(props) {
  return (
    <div>
      <p>opps! something is wrong!</p>
      <Link to="/">Go home</Link>
    </div>
  );
}

export default Error;
