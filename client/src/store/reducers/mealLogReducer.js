import { DAILYSTAT, FOODLOGS } from '../../../dummy/data/dummyData';

const initialState = {
	dailyState: DAILYSTAT,
	foodLogs: FOODLOGS,
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
