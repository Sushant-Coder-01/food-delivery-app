import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Sushant-Coder-01");

    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
    console.log("Parent child class mounted");
  }

  componentDidUpdate() {
    console.log("Parent componet did update");
  }

  componentWillUnmount() {
    console.log("parent component will unmount");
  }

  render() {
    console.log("parent rendered");
    return (
      <div>
        <h1>About myself</h1>
        <h2>.............</h2>
        <User />
      </div>
    );
  }
}

export default About;
