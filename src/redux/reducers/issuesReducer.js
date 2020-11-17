import { ADD_FAVORITE, CREATE_ISSUE, DELETE_ISSUE } from "../actions/actionTypes";
import _ from "lodash"

const initialState = {
  issues: [],
};

export const issuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ISSUE:
      return {
        ...state,
        issues: state.issues.concat([action.payload]),
      };
    case DELETE_ISSUE:
      let newIssues = state.issues.filter((issue) => {
        return action.id !== issue.id;
      });
      return {
        ...state,
        issues: newIssues,
      };
      case ADD_FAVORITE:
        let targetIssue = _.find(state.issues, function (issue) {
            return issue.id === action.id;
          });
          targetIssue.favorite = true;
        return {
          ...state
        }

    default:
      return state;
  }
};
