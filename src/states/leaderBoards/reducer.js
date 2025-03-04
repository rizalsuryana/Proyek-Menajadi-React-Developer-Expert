import { ActionType } from './action';

const leaderBoardsReducer = (leaderBoards = null, action = {}) => {
  switch (action.type){
  case ActionType.RECEIVE_LEADERBOARDS:
    return action.payload.leaderBoards;
  case ActionType.CLEAR_LEADERBOARDS:
    return [];
  default:
    // leaderBoards;
    return leaderBoards;
  }
};


export default leaderBoardsReducer;