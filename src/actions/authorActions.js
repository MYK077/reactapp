import dispatcher from "../appDispatcher";
import * as authorApi from "../api/authorApi";
import actionTypes from "./actionTypes";

export function loadAuthors() {
  return authorApi.getAuthors().then((authors) => {
    //   dispatcher.dispatch() will notify the stores that a course was created
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_AUTHORS,
      authors: authors,
    });
  });
}
