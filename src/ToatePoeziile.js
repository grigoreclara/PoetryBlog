import React, { Component } from "react";
import poezii from "./Poezii.json";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CommentsBlock from "simple-react-comments";

class ToatePoeziile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }
  render() {
    var items = [];
    const box = [];
    for (var [index, value] of poezii.poezii.entries()) {
      for (var vers of value.versuri) {
        items.push(<p className="versuri">{vers}</p>);
      }
      box.push(
        <Box className="poezie">
          {items}
          <br />
		   <p className="autor">Titlu: {value.titlu}</p>
          <br />
          <p className="autor">Autor: {value.autor}</p>
        </Box>
      );
      items = [];
      index++;
    }
    return (
      <Box>
        <Box>{box}</Box>
        <Box className="comments">
          <CommentsBlock
            comments={this.state.comments}
            signinUrl={"/signin"}
            isLoggedIn
            onSubmit={text => {
              if (text.length > 0) {
                this.setState({
                  comments: [
                    ...this.state.comments,
                    {
                      authorUrl: "#",
                      avatarUrl: "#avatarUrl",
                      createdAt: new Date(),
                      fullName: "Name",
                      text
                    }
                  ]
                });
                console.log("submit:", text);
              }
            }}
          />
        </Box>
      </Box>
    );
  }
}

export default ToatePoeziile;
