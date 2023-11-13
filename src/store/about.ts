import { Store } from "../core";

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}

export default new Store<State>({
  photo: 'https://velog.velcdn.com/images/heelieben/post/63766f3f-ffd7-445e-a7bc-41ba722c7cf0/image.png',
  name: 'WonYeongEun',
  email: 'woneun10@gmail.com',
  blog: 'https://velog.io/@lulu',
  github: 'https://github.com/lulu242',
  repository: 'https://github.com/lulu242/movie-search'
})