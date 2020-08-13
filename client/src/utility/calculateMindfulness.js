import moment from 'moment';

const calculateMindfulness = (start, end, interval) => {
	const startDate = moment(start);
	const endDate = moment(end);
	const totalTime = endDate.diff(startDate, 'seconds');

	return Math.floor(totalTime / interval);
};

export default calculateMindfulness;
