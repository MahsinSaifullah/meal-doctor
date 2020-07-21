import { USERS } from '../../../dummy/data/dummyData';

const initialState = {
	user: USERS.find((user) => user.id === 1),
};

export default (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
