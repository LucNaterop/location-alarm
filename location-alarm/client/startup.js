Meteor.startup(() => {
	// definiere Tageszeit (Morgen, Tag, Abend)
	findDayTime();
});

function findDayTime() {
	var split_afternoon = 11 			//24hr time to split the afternoon
	var split_evening = 17 				//24hr time to split the evening
	var currentHour = new Date().getHours();
	if(currentHour >= split_afternoon && currentHour < split_evening) {
		DayTime = "Tag";
	} else if(currentHour >= split_evening) {
		DayTime = "Abend";
	} else {
		DayTime = "Morgen";
	}
}
