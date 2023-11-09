// Component
export class Component {
  constructor(payload = {}) {
    // 컴포넌트 생성시 최상위 요소 태그, props와 state 생성
    const { tagName = 'div', props = {}, state = {} } = payload;
    this.el = tagName; // 컴포넌트의 최상위 요소
    this.props = props; // 부모 컴포넌트에서 받는 데이터
    this.state = state; // 컴포넌트 안에서 사용할 데이터
    this.render();
  }
  render() {} // 컴포넌트를 렌더링하는 함수
}

