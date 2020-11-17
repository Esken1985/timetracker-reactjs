import { ADD_FAVORITE, CREATE_ISSUE, DELETE_ISSUE } from "./actionTypes";

export function createIssue(issue) {
  return {
    type: CREATE_ISSUE,
    payload: issue,
  };
}
export function deleteIssue(id) {
  return {
    type: DELETE_ISSUE,
    id,
  };
}
export function addFavorite(id) {
  return {
    type: ADD_FAVORITE,
    id,
  };
}
