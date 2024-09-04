import axios from "axios";
import {
  GET_ALL_PLAYLISTS_FAILURE,
  GET_ALL_PLAYLISTS_LOADING,
  GET_ALL_PLAYLISTS_SUCCESS,
  GET_FEEDS_BY_PLAYLIST_FAILURE,
  GET_FEEDS_BY_PLAYLIST_LOADING,
  GET_FEEDS_BY_PLAYLIST_SUCCESS,
} from "./actionTypes";

export const getAllPlaylists = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ALL_PLAYLISTS_LOADING });
    try {
      const POST_URL = `${process.env.REACT_APP_API_ENDPOINT}getAllPlayList`;
      const body = { Content_Type: 2 };
      const headers = {
        "X-Api-Key": process.env.REACT_APP_X_API_KEY,
        "X-Tenant-Key": process.env.REACT_APP_X_TENANT_KEY,
      };
      const response = await axios.post(POST_URL, body, { headers });
      dispatch({
        type: GET_ALL_PLAYLISTS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_PLAYLISTS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const getFeedsByPlaylist = (postIds) => {
  return async (dispatch) => {
    dispatch({ type: GET_FEEDS_BY_PLAYLIST_LOADING });
    try {
      const POST_URL = `${process.env.REACT_APP_API_ENDPOINT}getfeeds_v1`;
      const body = {
        Index: 1,
        ContentType: [2],
        IsTagged: false,
        URL: "",
      };
      const headers = {
        "X-Api-Key": process.env.REACT_APP_X_API_KEY,
        "X-Tenant-Key": process.env.REACT_APP_X_TENANT_KEY,
      };
      const response = await axios.post(POST_URL, body, { headers });
      const data = response.data.data.Feeds?.filter((x) =>
        postIds.includes(x?.EngagementPostId)
      );
      dispatch({
        type: GET_FEEDS_BY_PLAYLIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_FEEDS_BY_PLAYLIST_FAILURE,
        error: error.message,
      });
    }
  };
};
