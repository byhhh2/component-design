## [Render Props Pattern](https://ko.reactjs.org/docs/render-props.html)

- Function as Children과 비슷하다.
- 횡단 관심사(Cross-Cutting Concerns)를 위한 render props
- 동적으로 렌더링할 수 있도록 해주는 함수 prop을 제공하는 것
  - **render props : 무엇을 렌더링할지 컴포넌트에게 알려주는 함수**
- 코드를 공유하기 위함.
  - ex) 예시 코드에서 마우스 위치 state를 사용하는 것은 동일하나 UI를 다르게 해주어야 할 때 사용
  - state와 setState는 동일하고 UI가 달라진다.
- 자체적으로 렌더링 로직을 구현하는 대신 react 엘리먼트 요소를 반환하고 이를 호출하는 함수(render)를 사용합니다.
- 컴포넌트에서 캡슐화된 상태나 동작을 같은 상태(로직)를 가진 다른 컴포넌트와 공유하는 방법이 항상 명확하지는 않습니다. (상태 로직을 어떻게 잘 공유할 수 있을까?)
- 로직은 같지만 UI는 항상 달라질 수 있다.
  - 로직을 나타내는 디자인은(태그, css 등) 항상 달라 질 수 있다.

<br>
<br>

> **횡단 관심사란? (Cross-Cutting Concerns)**
>
> 핵심적인 기능이 아닌 중간 삽입되어야 하는 기능의 관심들 - [참고](https://willseungh0.tistory.com/m/61)  
> 예시 | 로깅하는 기능
