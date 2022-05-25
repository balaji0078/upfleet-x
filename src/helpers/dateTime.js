import moment from 'moment';
import _ from 'lodash';

export const weekDays = [
	{
		label: 'Monday',
		day: 1
	},
	{
		label: 'Tuesday',
		day: 2
	},
	{
		label: 'Wednesday',
		day: 3
	},
	{
		label: 'Thursday',
		day: 4
	},
	{
		label: 'Friday',
		day: 5
	},
	{
		label: 'Saturday',
		day: 6
	},
	{
		label: 'Sunday',
		day: 7
	}
];

/**
 * All date / time conversions using momentjs are done here
 */

// used for google maps calculations
export const secondsToTime = (seconds) => {
	let d = moment.duration(seconds, 'seconds');
	let str = '';
	if (d._data.days) {
		d._data.hours += d._data.days * 24;
	}
	if (d._data.hours) {
		str += `${d._data.hours} ${d._data.hours < 2 ? 'hour' : 'hours'}`;
	}
	str += ` ${d._data.minutes} ${d._data.minutes < 2 ? 'minute' : 'minutes'}`;

	return str;
};

// default start time for schedules
export const scheduleDefaultTime = () => {
	return moment('09:00', 'HH:mm').format('HH:mm');
};

export const formatTime = (time, inputFormat = '', outputFormat = 'HH:mm') => {
	return moment(time, inputFormat).format(outputFormat);
};

export const hourFormat = (obj) => {
	return moment(obj, 'HH:mm').format('hh:mm A');
};
export const utcHourFormat = (obj, format='hh:mm A') => {
	return moment(obj, 'YYYY-MM-DDTHH:mm:ss.000Z').format(format);
};
export const formatTimeOnly = (obj) => {
	return moment(obj, 'HH:mm').format('HH:mm');
};
export const utcTimeToNormalTime = (date, currentFormat = "YYYY-MM-DDTHH:mm:ss.000Z") => {
	return moment.utc(date, currentFormat).format('hh:mm');
	// return moment(obj, 'HH:mm').format('HH:mm');
};
export const addMinutesToTime = (time, minutes = 0, congestionFactor = 1, format = 'hh:mm', outputFormat) => {
	if (!time) return '';
	// let mins = minutes * congestionFactor;
	let result = moment(time, format).add(minutes, 'minutes');

	//  if format provided do the formatting. If outputFormat is set to true return default moment value
	if (outputFormat) {
		if (typeof outputFormat === 'string') result = result.format(outputFormat);
		else if (typeof outputFormat === 'boolean') result = result.format();
	} else result = result.format(format);

	return result;
};

// function to add minutes used in new stop timings table (ISO)
export const addMinutes = (time, minutes = 0, inputFormat = 'HH:mm', outputFormat = 'HH:mm') => {
	if (!time) return '';
	let result = moment(time, inputFormat).add(minutes, 'minutes');
	return result.format(outputFormat);
};

export const getEndScheduleTime = (times, minutes = 0, format = 'HH:mm') => {
	if (times.length === 0) return '';
	let days = [];
	let scheduleTimes = _.cloneDeep(times)

	let tempenddtate=[]
	 weekDays.map((singledate, index) => {
		
		tempenddtate = scheduleTimes.map((item) => {
			let time = moment(item.time, format).add(item.stops[item.stops.length - 1].timeFromSource, 'minutes').format(format);
			if (singledate.label === item.label) {
		 
				if (time < item.time) {
						let day ={}
						day.label = index === 6 ? weekDays[0].label: weekDays[index + 1].label;
						day.day =index === 6 ? weekDays[0].day: weekDays[index + 1].day;
						day.congestionFactor = item.congestionFactor
						day.stops = item.stops
						day.time = item.time
						days.push(day)
					}
				else{
					days.push(item)
				}
			}   
		}) 
	}) 

	return days 
 
};

export const removePastDate = (current, isSubtract = true) => {
	if (isSubtract) {
		return current.isAfter(moment(new Date()).subtract(1, 'days'));
	} else {
		return current.isAfter(moment(new Date()));
	}
};

export const removeStartDate = (current, startDate) => {
	let StartDate = moment(startDate, 'DD-MM-YYYY');
	return current.isAfter(StartDate);
};

export const removeFutureDate = (current) => {
	return !current.isAfter(moment(new Date()));
};

export const remove18yearsFromCurrent = (current) =>{

	return !current.isAfter(moment().subtract(18, 'years')); 
}

export const validateEndDate = (current, startDate, validityDays) => {
	let StartDate = moment(startDate, "DD-MM-YYYY");
	let EndDate = moment(startDate, "DD-MM-YYYY").add(validityDays, "days");
	return current.isAfter(StartDate) && current.isBefore(EndDate);
}

export const dateFormat = (date, currentFormat = "YYYY-MM-DDTHH:mm:ss.000Z") => { // YYYY-MM-DD
	if (moment.utc(date, currentFormat).isValid()) {
		return moment.utc(date, currentFormat).format('DD-MM-YYYY');
	} else {
		return date;
	}
};

export const dateTimeFormat = (date, currentFormat = 'YYYY-MM-DDTHH:mm:ss.000Z') => {
	// YYYY-MM-DD
	if (moment(date, currentFormat).isValid()) {
		return moment(date, currentFormat).format('DD-MM-YYYY hh:mm A');
	} else {
		return date;
	}
};

export const dateFormatymd = (date, currentFormat = 'DD-MM-YYYY') => {
	if (moment(date, currentFormat).isValid()) {
		return moment(date, currentFormat).format('YYYY-MM-DD');
	} else {
		return date;
	}
};

export const dateMomentFormatymd = (date) => {
	if (date) {
		return moment(date).format('YYYY-MM-DD');
	} else {
		return date;
	}
};

export const changeDateTimeFormat = (date, format = 'DD/MM/YYYY', currentFormat = 'YYYY-MM-DDTHH:mm:ss.000Z') => {
	if (date) {
		return moment(date, currentFormat).format(format);
	} else {
		return date;
	}
};

export const utcTimeFormat = (current, startDate) => {
	let StartDate = moment.utc(startDate, 'DD-MM-YYYY').format('YYYY-MM-DDTHH:mm:ss.000Z');

	return current.isAfter(StartDate);
};

export const utcToNormal = (date, format = 'YYYY-MM-DD') => {
	return moment(date).format(format);
};

export const changeDateFormat = (date, dateFormat = {}) => {
	let { format = 'YYYY-MM-DDTHH:mm:ss.000Z', defaultFormat = 'DD-MM-YYYY' } = dateFormat;
	return moment(date, defaultFormat).format(format);
};

export const isTripCompleted = (journeyDate, endTime) => {
	let date = moment(journeyDate).format('DD-MM-YYYY');
	let time = moment(endTime, 'YYYY-DD-MMTHH:mm:ss.000z').format('HH:mm');

	let d = moment(date + ' ' + time, 'DD-MM-YYYY HH:mm').format();

	return moment().diff(d, 'minutes') > 0;
};

export const timeDifference = (start, end, format = '') => {
	let startTime = moment(start, format);
	let endTime = moment(end, format);

	return endTime.diff(startTime, 'minutes');
};
export const endDateValidation = (current, startDate) => {
	let StartDate = moment.utc(startDate, 'DD-MM-YYYY').subtract(1, 'days').format('YYYY-MM-DDTHH:mm:ss.000Z');
	return current.isAfter(StartDate);
};

export const getFullDateFromTime = (time, timeFormat = 'HH:mm') => {
	return moment(time, timeFormat).format();
};

export const isValidTime = (time, timeFormat = 'HH:mm') => {
	return moment(time, timeFormat)._isValid;
};

export const timeToUTC = (time) => {
	// let temp = time.split(':');
	// let date = new Date();
	// date.setHours(temp[0]);
	// date.setMinutes(temp[1]);
	// return date.toISOString();
	return moment(time, 'HH:mm').add(1, 'days').toISOString();
};

export const getCurrentWeek = () =>{
	let currentDate = moment();
	let today =  moment().format("DD/MM/YYYY")
	let weekStart = currentDate.clone().startOf('isoWeek');
	let weekEnd = currentDate.clone().endOf('isoWeek');

	let days = [];

	for (var i = 0; i <= 6; i++) {
		let day = moment(weekStart).add(i, 'days').format("DD/MM/YYYY")
		let temp ={}
		temp.days = day
		temp.isToday = day === today ? true : false
		days.push(temp);
	} 
return days

}

export const getCurrentDateTime = (currentFormat = "YYYY-MM-DDTHH:mm:ss.000Z") =>{
	let currentDate = moment();

	return moment(currentDate).format('hh:mm A');
}

export const getTimeFormat = (date)=>{

	return moment(date).fromNow()
}

export const getUTCTime = (date, format='YYYY-MM-DD[T]HH:mm:ss[Z]') =>{
	console.log(moment(date).format('YYYY-MM-DD HH:mm:ss'),"dsadasdb")
	// console.log(moment.utc(date).format('YYYY-MM-DD HH:mm:ss'))
	return moment.utc(date).format(format)
	// let temptime = new Date(date); 
	// temptime.setHours(temptime.getHours()-5);
	// temptime.setMinutes(temptime.getMinutes()-30);

	// return moment(temptime).format('YYYY-MM-DD HH:mm:ss')
	
}

export const getChangedTImeFormat = (date) =>{
	return moment(date).format('YYYY-MM-DD HH:mm:ss')
}

export const removeUTCTime = (date) =>{ 
	// console.log(moment.utc(date).format('YYYY-MM-DD HH:mm:ss'))
	return moment(date,'YYYY-MM-DDTHH:mm:ss.000Z').format('DD-MM-YYYY hh:mm:ss');
	// return moment(date).utcOffset("+05:30").format('YYYY-MM-DD HH:mm:ss');
	 
}

export const currentDateTimeFormat = (date,format= 'DD-MM-YYYY hh:mm A') => { 
	 
	let momentDate = moment(date, 'YYYY-MM-DDTHH:mm:ss.000Z');
		if (momentDate.isValid()) {
			return momentDate.format(format);
		} else {
			return "-";
		}
};

export const getToday = (date, ) => { 
	 
	return moment(new Date()).format('DD-MM-YYYY')
};

export const utcDateFormat = (obj) => {
	return moment(obj, 'YYYY-MM-DDTHH:mm:ss.000Z').format('DD MMM YYYY');
};

export const getCurrentUTCDateEndTime = () =>{

	let today = moment(new Date()).endOf('day').toLocaleString()

	today = JSON.stringify(today)
	today = today.slice(1,25) 

	return today
}

export const getYearMonthDateTimeFomat  = (data) =>{
	return moment(data).format('YYYY-MM-DD HH:mm:ss')
}

export const getCurrentUtcDateAndTime = () =>{

	return moment.utc(). format('ddd MMM DD YYYY HH:mm:ss')
}

export const getSomeDaysAfter = (days,format="ddd MMM DD YYYY HH:mm:ss") =>{

	return moment(new Date(), "DD-MM-YYYY").add(days, "days").format(format)
}

export const hourFormat12 = (time) =>{
	return moment(time,"hh:mm").format('hh:mm A');
}

export const getRiderCount = (rideDetails) => {
	let count = 0;
	if(rideDetails && rideDetails.length > 0){
		let rideArr = rideDetails.map(function(item) { return item.riderName})
		let duplicateCount = rideArr.some(function(item,idx){
			if(rideArr.indexOf(item) != idx){
				count += 1
			}
			return count
		})
		return rideDetails.length - duplicateCount;
	} else {
		return '-'
 }
}

export const getSomeDaysBefore = (days,format="ddd MMM DD YYYY HH:mm:ss") =>{
	return moment(new Date(), "DD-MM-YYYY").subtract(days, "days").format(format)
}

export const getCurrentZonedDate = (currentFormat = "YYYY-MM-DD HH:mm:ss") =>{
	let currentDate = moment();

	return moment(currentDate).format(currentFormat);
}

export const getTimezoneOffset = () => {
	return new Date().getTimezoneOffset();
};