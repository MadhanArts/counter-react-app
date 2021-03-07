import React, { Component } from "react";

// stateless functional components
// props value is passed as a parameter
// return the jsx code to render
// It is used for simple components
// Destructuring arguments is used here so that this.props may not be repeated again

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//     NavBar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
//           </a>

//       </nav>
//     );
//   }
// }

export default NavBar;
