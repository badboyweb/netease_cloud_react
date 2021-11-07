// 第三方库
import React, { memo,Suspense } from "react";
import { renderRoutes } from "react-router-config";

// 公共配置
import routes from "./router";
import store from "./store";

// 组件导入
import { Provider } from "react-redux";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import HYAppPlayerBar from "./pages/player/app-player-bar"

const App = memo(function (props) {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
          <Suspense fallback={<div>page loading</div>}>
              {renderRoutes(routes)}
          </Suspense>
        <AppFooter />
        <HYAppPlayerBar/>
      </div>
    </Provider>
  );
});

export default App;
