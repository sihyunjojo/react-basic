# 하루에 조금씩 꾸준히 하자!!

# 공부 내용

## 4.0(introduction)
    nodejs를 이용하는거다.

    react app 설정 및 파일 만들기

    create-react-app을 이용하면 auto-reload를 사용할 수 있다.

## 4.1(tour of CRA)

    css code 를 js code로 바꿔준다.

## 5.0 (introdution)

    앞에서 우리는 React.js가 변하지 않는 값을 제외하고 리렌더링 하는 것을 알 수 있었다.

    그런데 한번만 받아도 될 정보의 경우에도 리렌더링에 의해 계속해서 불려지는 문제가 발생한다.
    최초 한번만 필요한 정보를 계속해서 리렌더링 하는 것은 코드의 규모가 클 경우 비효율적이기 때문에 그것을 줄일 방법을 알아보자

## 5.1(useEffect)

    useEffet()는 두개의 인자를 받는 함수이다.
    첫번째 인자는 우리가 한번만 실행할 함수이다.
    두번째 인자는 나중에 알려준데.. 왜?? ㅠ 궁금

## 5.2{Deps)

    나는 keyword가 변화할때 영화를 검색하고 싶은 것이지
    counter가 변화할떄도 계속 검색해주고 싶지 않다.
    그런데 counter변화시에도 검색을 해주고 있다.

    그 이유는 우리가 state를 변화 시킬때 마다
    이 줄이 모두 실행되기 떄문이다.
    특정부분만이 변화 되었을대 원하는 코드를 실행 할 수 있는 방법을 배우고 싶다.
    moie state가 변화할때만 변하게 하고 싶다.

    userEffect는 우리에게 선택권을 주었다.
    이 코드가 실행 될때는 이걸 변화시키고 싶다. 하고
    원한다면 두개를 합칠 수 도있다.
    [keyword, counter]로

## 5.3(Recap)

    리액트를 사용하는 이유는 최소 단위의 렌더링을 위해
    useState(): 변수, 변수를 제어하는 함수로 구성되며 변하는 값을 제어, 해당 부분의 리렌더링을 위함
    props: 태그의 속성 값을 함수의 아규먼트 처럼 컴포넌트에 값을 전달해준다.
    useEffect(): 코드의 실행 시점을 관리할 수 있는 선택권을 얻는 방어막 같은 존재, 디펜던시가 없을 경우 최초 1회 실행, 있을 경우 해당 값이 변할 경우 실행한다. 이 때 디펜던시는 여러개 입력이 가능하다.

    부모 컴포넌트에서 리렌더링이 일어날 경우 모든 자식들이 리렌더링이 된다.(wa can use memo)
    propType을 설치하고 props의 타입을 지정해 줄 수 있다. 이 때 isRequired로 필수값을 지정 가능하다.

## 5.4(Cleanup)

    {showing ? <Hello /> : null}
    위 코드를 통해서 css로 숨기는 것이아니라 아예 없애는 기법이 사용 가능하다.

    clean up function 이란?
    그냥 함수인데 너의 component가 파괴될때 코드를 실행해 주는 것이다.
    그러면 그사람들은 api를 분석 할 수 있다.

## 6.0(To Do List part One)

    이번 섹션에서는 할 수 있는 최대한 많이 연습하고 최대한 많은 것을 만들어 볼 것이다.

# Basic

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
