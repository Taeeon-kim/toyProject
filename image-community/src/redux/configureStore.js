import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter } from "connected-react-router";

import User from "./modules/user";

export const history =createBrowserHistory();

const rootReducer = combineReducers({
  user: User,
  router: connectRouter(history),
});

const middlewares = [thunk.withExtraArgument({history:history})];

// 지금이 어느 환경인 지 알려줘요. (개발환경, 프로덕션(배포)환경 ...)
const env = process.env.NODE_ENV; //지금 어느환경인지 알려준다. 여기선 개발환경development 로 나온다.

// 개발환경에서는 로거라는 걸 하나만 더 써볼게요.
if (env === "development") {
  // 그래서 개발환경일때
  const { logger } = require("redux-logger"); //로거라는걸 패키지redux-logger 에서 가져온다. 왜냐하면 프로덕션에서는 필요없는데 임포트할필요없어서 개발환경일때만 쓰도록한것이다
  middlewares.push(logger);
}

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

let store = (initialStore) => createStore(rootReducer, enhancer);

export default store();
