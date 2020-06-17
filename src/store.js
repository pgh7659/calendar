import { createStore, applyMiddleware } from "redux";
import loggerMiddleware from "./lib/loggerMiddleware";
import modules from "./modules/modules";

const store = createStore(modules, applyMiddleware(loggerMiddleware));

export default store;