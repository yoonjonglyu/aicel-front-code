# 에이셀 과제
> react.js, react-router, 상태 관리 라이브러리를 제외하고 나머지는 순수 JS, CSS로 과제.

## 목적
> Todo, Grid, Modals, Counter, Async 메뉴 구현하기.

## DIR STRUCTURE
- build 
> webpack build utils
- public
> static root
- src
> 개발 소스 root

### 개발 구조
> mvvm 패턴을 디폴트로 삼아서 작업하기 편하게 설계. (추후 변경가능)

- index.js
> 번들 entry
- app.js
> 웹어플리케이션 entry
- assets
> css, image 같은 정적 리소스 dir
- view
> route pages
- controller
> 컨트롤러 models 과 뷰를 연결
- models
> viewmodel 데이터 가공
- components
> 공통 컴포넌트 모음
- actions
> redux actions dir 
- reducers
> redux reducers dir


## LICENSE
- MIT

## AUTHOR
- ISA (yoonjonglyu)