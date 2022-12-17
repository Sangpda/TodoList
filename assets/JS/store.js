import reducer from "../JS/reducer.js";
import { createStore } from "../JS/RRLibrary.js";
import stateLogger from "./stateLogger.js";

const { attach, connect, dispatch } = createStore(stateLogger(reducer));

window.dispatch = dispatch;

export { connect, attach };