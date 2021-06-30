import React from "react";
import marked from "./marked";
import { Input, Layout, Divider } from "antd";
import "./Markdown.css";

const { TextArea } = Input;
const { Header, Content } = Layout;

export default class Markdown extends React.Component {
  constructor() {
    super();
    this.state = {
      input:
        "# header 1 \n\n ## header 2 \n\n ### header3 \n\n *this is italic* \n\n `function() { console.log('Hello World!') }` \n\n There's also [links](https://www.freecodecamp.org), and \n\n > Block Quotes! \n\n And if you want to get really crazy, even tables: \n\n Wild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here.... \n And here. | Okay. | I think we get it. \n\n - And of course there are lists. \n\n\t  - Some are bulleted. \n\n\t\t - With different indentation levels. \n\n 1. numbered List \n 1. second one. \n 1. last one. \n\n",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.setState({
        input: this.state.input + "\n",
      });
    } else if (event.keyCode === 9) {
      event.preventDefault();
      this.setState({
        input: this.state.input + "\t",
      });
    }
  }

  render() {
    return (
      <Layout>
        <Header>
          <header id="app-title">
            <h1>Simple Markdown App</h1>
          </header>
        </Header>

        <Content id="container">
          <div className="area">
            <h1 className="title">Editor</h1>
            <Divider></Divider>
            <TextArea
            bordered={true}
              id="editor"
              allowClear
              defaultValue={this.state.input}
              onChange={this.handleInput}
              onKeyDown={this.handleKeyDown}
            ></TextArea>
          </div>

          <div className="area">
            <h1 className="title">Preview</h1>
            <Divider></Divider>
            <div id="preview-area">
              <div
                id="preview"
                dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}
              ></div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}
