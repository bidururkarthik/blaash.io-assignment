import { combineReducers } from "redux";
import playlistsReducer from "./reducers";

const rootReducer = combineReducers({
  playlists: playlistsReducer,
});

export default rootReducer;
