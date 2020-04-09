import React from "react";
import UserList from "./Components/UserList";

class App extends React.Component {
  state = {
    myData: [],
  };

  componentDidMount() {
    fetch("https://api.github.com/users/christianlewis024")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myData: [data] });
      });
    fetch("https://api.github.com/users/christianlewis024/followers")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ myData: [...this.state.myData, ...data] });
      });
  }

  render() {
    return (
      <>
        <UserList users={this.state.myData} />
      </>
    );
  }
}

export default App;
