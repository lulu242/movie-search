import { Component } from "../core";

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {name: 'Search', href: '#/'},
          {name: 'Movie', href: '#/movie?id=tt4520988'},
          {name: 'About', href: '#/about'}
        ]
      }
    })
    window.addEventListener('popstate', () => {
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split('?')[0]
            const hash = location.hash.split('?')[0]
            const isActive = href === hash
            return /* html */ `
              <li>
                <a class="${isActive ? 'active' : ''}" href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`
          }).join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
      <img src="https://velog.velcdn.com/images/heelieben/post/63766f3f-ffd7-445e-a7bc-41ba722c7cf0/image.png" alt="User">
    </a>
    `
  }
}