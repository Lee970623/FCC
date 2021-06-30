import React from "react";
import { Button, Space, Tooltip, Skeleton, Alert } from "antd";
import { WechatOutlined, TwitterOutlined } from "@ant-design/icons";
import { getRandomColor, getRandomInteger } from "../utils/functions";
import "./Quote.css";
import { get } from "../utils/axios";

export default class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      quote_list: [],
      color: "",
      loading: true,
      displayError: false,
    };
    this.getNewQuote = this.getNewQuote.bind(this);
    this.changeTheme = this.changeTheme.bind(this);
  }

  componentDidMount() {
    this.getQuotes()
      .then(() => {
        const quote =
          this.state.quote_list[
            getRandomInteger(0, this.state.quote_list.length - 1)
          ];
        this.setState({
          quote: quote.text,
          author: quote.author,
          color: getRandomColor(),
          loading: false,
        });
      })
      .catch((err) => {
        if (err.message.includes("Network Error")) {
          this.setState({
            displayError: true,
          });
        }
      });
  }

  getNewQuote() {
    if (this.state.quote_list) {
      const quote =
        this.state.quote_list[
          getRandomInteger(0, this.state.quote_list.length - 1)
        ];
      this.setState({
        quote: quote.text,
        author: quote.author,
        color: getRandomColor(),
      });
    }
  }

  changeTheme(event) {
    this.setState({
      color: event.target.value,
    });
  }

  getQuotes() {
    return get("data.json").then((response) => {
      this.setState({
        quote_list: response,
      });
    });
  }

  render() {
    const background = { backgroundColor: this.state.color };
    const color = { color: this.state.color };

    return (
      <div id="container" style={background}>
        <Alert
          message="Error"
          description="Something wrong happens when fetching data"
          type="error"
          showIcon
          closable
          style={{ display: this.state.displayError ? "" : "none" }}
        />
        <div id="quote-box">
          <Skeleton loading={this.state.loading}>
            <div className="quote-area">
              <div id="text">
                <h1 style={color}>{this.state.quote}</h1>
              </div>
              <div id="author" style={color}>
                - {this.state.author}
              </div>
            </div>
            <div className="btn-group">
              <div id="post-btn-group">
                <Space size={12}>
                  <Tooltip title="post quote to twitter">
                    <a
                      id="tweet-quote"
                      href="twitter.com/intent/tweet"
                      style={background}
                    >
                      <TwitterOutlined
                        style={{ fontSize: "1.5rem", color: "white" }}
                      />
                    </a>
                  </Tooltip>
                  <Tooltip title="post quote to wechat">
                    <a
                      id="wechat-quote"
                      href="twitter.com/intent/tweet"
                      style={background}
                    >
                      <WechatOutlined
                        style={{ fontSize: "1.5rem", color: "white" }}
                      />
                    </a>
                  </Tooltip>
                </Space>
              </div>

              <Space>
                <label htmlFor="theme" style={color}>
                  Theme color
                </label>
                <input
                  type="color"
                  id="theme"
                  value={this.state.color}
                  onChange={this.changeTheme}
                />
                <Button
                  id="new-quote"
                  type="primary"
                  onClick={this.getNewQuote}
                  style={background}
                >
                  New Quote
                </Button>
              </Space>
            </div>
          </Skeleton>
        </div>
        <footer id="copyright">by Lzd</footer>
      </div>
    );
  }
}
