import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router01 from "./RouterStudy/Router01/Router01";
import Router02 from "./RouterStudy/Router02/Router02";
import Router03 from "./RouterStudy/Router03/Router03";
import Router04 from "./RouterStudy/Router04/Router04";


function App() {
    
    return (
        <>
          <BrowserRouter>
            {/* <React01 /> */}
            {/* <React02 /> */}
            {/* <React03
                name={name}
                age={age}
                address={"부산시"}
                tel={"010-1234-5678"}
            /> */}
            {/* <React04>
                <h1>자식요소</h1>
            </React04> */}
            {/* <ReactHook01 /> */}
            {/* <CountState /> */}
            {/* <ReactHook03 /> */}
            {/* <ReactHook04 /> */}
            {/* <ReactHook05 /> */}
            {/* <ReactHook06 /> */}
            {/* <ReactHook07 /> */}
            {/* <Render /> */}
            {/* <LifeCycleApp /> */}
            {/* <FruitsFilter /> */}
            {/* <SignupForm /> */}
            {/* <ReactHook08 /> */}
            {/* <Emotion1 /> */}
            {/* <ReactHook09 /> */}
            {/* <Index /> */}
            <Router04 />
            </BrowserRouter>
            {/*BrowserRouter로 감싸진 내부에 있는 컴포넌트들만 Routes, Route, Link, UseNavigation 같은 라우터 기능을 쓸 수 있다. */}
        </>
    );
}

export default App;