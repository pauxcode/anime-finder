import { useReducer } from "react";

const ACTIONS = {
  UPDATE_SUB_TYPE: "update_subType",
  UPDATE_SEASON: "update_season",
  UPDATE_DAY: "update_day",
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATED: "update_rate",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_SUB_TYPE:
      return {
        ...state,
        type: action.payload,
      };
    case ACTIONS.UPDATE_SEASON:
      return {
        ...state,
        type: action.payload,
      }
    case ACTIONS.UPDATE_DAY:
      return {
        ...state,
        type: action.payload,
      };
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    case ACTIONS.UPDATE_RATED:
      return {
        ...state,
        rated: action.payload,
      };
    default:
      return state;
  }
};

export default function useForm({ initialSubType, initialSeason, initialDay, initialKeyword, initialRated }) {
  const [state, dispatch] = useReducer(reducer, {
    subType: initialSubType,
    season: initialSeason,
    day: initialDay,
    keyword: initialKeyword,
    rated: initialRated,
  });

  const { subType, season, day, keyword, rated } = state;

  return {
    subType,
    season,
    day,
    keyword,
    rated,
    updateSubType: (subType) =>
      dispatch({
        type: ACTIONS.UPDATE_SUB_TYPE,
        payload: subType,
      }),
    updateSeason: (season) =>
      dispatch({
        type: ACTIONS.UPDATE_SEASON,
        payload: season,
      }),
    updateDay: (day) =>
      dispatch({
        type: ACTIONS.UPDATE_DAY,
        payload: day,
      }),
    updateKeyword: (keyword) =>
      dispatch({
        type: ACTIONS.UPDATE_KEYWORD,
        payload: keyword,
      }),
    updateRated: (rated) =>
      dispatch({
        type: ACTIONS.UPDATE_RATED,
        payload: rated,
      }),
  };
}