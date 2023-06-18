import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Welcome extends Component {
  static propTypes = {}

  render() {
    return (
      <div>Welcome</div>
    )
  }
}

export default Welcome
// import React, { useContext } from "react";
// import { AuthContext } from "./Auth";

// const Welcome = () => {
//   const { currentUser } = useContext(AuthContext) ?? {};
//   const currentUserEmail = currentUser && currentUser.email ? currentUser.email : "";
//   console.log({ currentUserEmail });
//   return <h2>{`Welcome ${currentUserEmail}`}</h2>;
// };

// export default Welcome;
