import { Component } from "../core";

export default class NotFound extends Component {
  render() {
    this.el.classList.add('not-found', 'container')
    this.el.innerHTML = `
      <h1>
        Sorry, page not found.
      </h1>
    `
  }
}