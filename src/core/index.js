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

// Router
// 페이지 렌더링
function routeRender(routes) {
  // 해시 없을 경우 현재 url를 /#/으로 대체한다
  if (!location.hash) {
    history.replaceState(null, '', '/#/'); // (상태, 제목, 주소)
  }
  
  const routerView = document.querySelector('router-view');
  const [hash, querystring] = location.hash.split('?');
  // 물음표를 기준으로 해시 정보와 쿼리스트링을 구분

  // 1) 쿼리스트링을 각각 key와 value 나누어 객체로 히스토리의 상태에 저장!
  const query = querystring
  .split('&')
  .reduce((acc, cur) => {
    const [key, value] = cur.split('=');
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, '') //(상태, 제목) 주소입력 안하면 현재 url유지

  // 2) 현재 라우트 정보를 찾아서 렌더링!
  const currnetRoute = routes.find(route => new RegExp(`${route.path}`).test(hash))
  routerView.innerHTML = ''
  routerView.append(new currnetRoute.component().el)
  
  // 3) 화면 출력 후 스크롤 위치 복구!
  window.screenTop(0,0)
}
export function createRouter(routes) {
  // 원하는(필요한) 곳에서 호출할 수 있도록 함수 데이터를 반환!
  return function () {
    window.addEventListener('popstate', () => { //히스토리가 변할 때마다 렌더링
      routeRender(routes)
    })
    routeRender(routes) // 최초 호출(popstate 처음은 인식x, 변경만)
  }
}
