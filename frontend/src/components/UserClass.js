import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

export default UserClass;
