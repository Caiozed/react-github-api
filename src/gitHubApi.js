import React, { Component } from "react";
import { Button, Card, CardTitle, Row, Col } from "react-materialize";

class GitHubApi extends Component {
  state = { data: {} };
  searchByUsername = (event, username) => {
    event.preventDefault();
    username = this.usernameNode.value;
    fetch("https://api.github.com/users/" + username)
      .then(response => response.json())
      .then(data => this.setState({ data: data }));
  };
  render() {
    const { username } = this.props;
    const { data } = this.state;
    return (
      <div>
        <Row>
          <Col m={6} offset={"m3"} s={6}>
            <form onSubmit={e => this.searchByUsername(e, username)}>
              <Row>
                <Col m={7} s={7}>
                  <input
                    style={{ textAlign: "center" }}
                    type="text"
                    ref={node => (this.usernameNode = node)}
                  />
                </Col>
                <Col m={3} s={3}>
                  <Button waves="light" type="submit">
                    Search
                  </Button>
                </Col>
              </Row>
            </form>

            <Card
              header={
                <CardTitle reveal image={data.avatar_url} waves="light" />
              }
              title={data.login}
              reveal={
                <div>
                  <p>Public repositories: {data.public_repos}</p>
                  <p>Real name: {data.name ? data.name : "No name"}</p>
                  <p>Followers: {data.followers}</p>
                  <p>Following: {data.following}</p>
                </div>
              }
            >
              <p>
                <a href={data.html_url}>
                  {data.login ? data.login + "'s profile" : ""}
                </a>
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GitHubApi;
