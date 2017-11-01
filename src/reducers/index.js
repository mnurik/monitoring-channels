import { combineReducers } from "redux";
import channels from "./channels";
import current from "./current";
import control from "./control";

export default combineReducers({ channels, current, control })