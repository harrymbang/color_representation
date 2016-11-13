import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  activeSite:null,
  siteSummary:null,
  site_status:null,
  siteStat:null,
  activeStat:null,
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.PICK_SITE:
		let siteSum = null;
      return {...state, activeSite: action.siteId};
	case ActionTypes.REQUEST_SITE:
		return {...state, site_status:"loading"};
	case ActionTypes.RECIEVE_SITE:
		return {...state, siteSummary:action.siteSummary.sum, site_status:"loaded"};
	case ActionTypes.GET_STAT:
		return {...state, siteStat:action.siteStat};
	case ActionTypes.REQUEST_STAT:
		return {...state, activeStat:action.stat};
    default:
      return state;
  }
}

