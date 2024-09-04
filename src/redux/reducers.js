import {
  GET_ALL_PLAYLISTS_FAILURE,
  GET_ALL_PLAYLISTS_LOADING,
  GET_ALL_PLAYLISTS_SUCCESS,
  GET_FEEDS_BY_PLAYLIST_FAILURE,
  GET_FEEDS_BY_PLAYLIST_LOADING,
  GET_FEEDS_BY_PLAYLIST_SUCCESS,
} from "./actionTypes";

const initialState = {
  playlistsLoading: false,
  feedsLoading: false,
  data: [],
  feedsData: [],
  error: "",
};

const playlistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PLAYLISTS_LOADING:
      return {
        ...state,
        playlistsLoading: true,
      };
    case GET_ALL_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlistsLoading: false,
        data: action.payload,
        error: "",
      };
    case GET_ALL_PLAYLISTS_FAILURE:
      return {
        ...state,
        playlistsLoading: false,
        error: action.error,
      };
    case GET_FEEDS_BY_PLAYLIST_LOADING:
      return {
        ...state,
        feedsLoading: true,
      };
    case GET_FEEDS_BY_PLAYLIST_SUCCESS:
      return {
        ...state,
        feedsLoading: false,
        feedsData: action.payload,
        error: "",
      };
    case GET_FEEDS_BY_PLAYLIST_FAILURE:
      return {
        ...state,
        feedsLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default playlistsReducer;
