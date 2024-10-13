// creating class-based component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        login: "susnat",
        id: 123,
      },
    };
    // console.log(this.props.name + " child constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " child class mounted");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.count !== prevState.count) {
      console.log("component did update is called");
    }
  }

  componentWillUnmount() {
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    const { login, id, avatar_url } = this.state.userInfo;

    // console.log(this.props.name + " child rendered");

    return (
      <div className="user-details">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          increase count
        </button>
        <h1>{login}</h1>
        <h2>{id}</h2>
        <h3>software developer</h3>
      </div>
    );
  }
}

export default UserClass;
