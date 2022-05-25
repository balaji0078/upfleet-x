import { historyActionType } from "../actionType";


export const historyDataUpdate = (reqData) => (dispatch, getState) => {
    return new Promise((resolve, reject) => {
		api(communicationList)
			.then(({ response }) => {
                dispatch({ type: historyActionType.updateHomePageData, payload: response.data });
				resolve(true);
			})
			.catch((err) => {
				reject(err);
			});
	});
}