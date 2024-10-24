import { Component } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, age } = this.props;
    return (
      <div className="border-2 m-5">
        <h1 className="text-4xl m-2">Name: {name}</h1>
        <h2 className="text-4xl m-2">Age: {age}</h2>
        <UserContext.Consumer>
          {({ user }) => <h1 className="text-2xl mx-2">User: {user}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default UserClass;
