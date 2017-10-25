import { combineReducers } from "redux";
import channels from "./channels";
import currentChannel from "./currentChannel";

export default combineReducers({ channels, currentChannel })