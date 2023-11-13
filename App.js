import TheFooter from './src/components/TheFooter';
import TheHeader from './src/components/TheHeader';
import { Component } from './src/core';


// 전체 routes를 넣어줄 App 컴포넌트 생성
export default class App extends Component {
  render() {
    const theHeader = new TheHeader().el
    const theFooter = new TheFooter().el
    const routerView = document.createElement('router-view'); // 태그 이름 -넣어 생성하면 기존 태그로 헷갈리지 않음
    this.el.append(theHeader, routerView, theFooter);
  }
}
