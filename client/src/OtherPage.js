import React from "react";
import { Link } from "react-router-dom";

const OtherPage = () => {
  return (
    <div>
      Im some other page! Now you can
      <Link to="/">go back home</Link>
    </div>
  );
};

export default OtherPage;
