import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true
   
  };

  async componentDidMount() {
    const url = "http://localhost:57491/api/getmoviename";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    //this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
      
      </div>
    );
  }
}
