import { Component } from "../core";

interface State {
  [key: string]: unknown
  menus: {
    name: string
    href: string
  }[]
}

export default class TheHeader extends Component {
  public state!: State // state가 super로 만들어져서 class에 초기화를 따로 하지 않음 !을 사용해 후에 타입을 지정해줌
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