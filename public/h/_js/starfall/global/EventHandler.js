var EventHandler = {
		
	eventList: [],
	tickList: [],
	activity: true,
 
	addEvent: function (__obj, __type, __listener) {
		//console.log('event check', __obj.hasEventListener(__type));
		if (__type == 'tick') {
			EventHandler.tickList.push({obj:__obj, type:__type, listener:__listener});
			__obj.addEventListener(__type, __listener);
		} else if (!__obj.hasEventListener(__type)) {
			if (EventHandler.activity) {
				EventHandler.eventList.unshift({obj:__obj, type:__type, listener:__listener});
			} else {
				EventHandler.eventList.push({obj:__obj, type:__type, listener:__listener});
			}
			__obj.addEventListener(__type, __listener);
		}
	},
 
	removeEvent: function (__obj, __type, __listener) {
		var __event;
		var __length = EventHandler.eventList.length;
		for(var i=0; i<__length; i++) {
			__event = EventHandler.eventList[i];
			if (__event.obj == __obj && __event.type == __type && __event.listener == __listener) {
				__obj.removeEventListener(__type, __listener);
				EventHandler.eventList.splice(i, 1);
				break;
			}
		}
		__length = EventHandler.tickList.length;
		for(i=0; i<__length; i++) {
			__event = EventHandler.tickList[i];
			if (__event.obj == __obj && __event.type == __type && __event.listener == __listener) {
				__obj.removeEventListener(__type, __listener);
				EventHandler.tickList.splice(i, 1);
				break;
			}
		}
	},
 
	removeAllEvents: function (__list) {
		if (__list == null) __list = [];
		var __event;
		for(var i=0; i<EventHandler.eventList.length; i++) {
			__event = EventHandler.eventList[i];
			var removeEvent = true;
			for(var j=0; j<__list.length; j++) {
				if (__list[j] == __event.obj.name) {
					removeEvent = false;
					break;
				}
			}
			if (removeEvent) {
				//console.log(__event.obj.name);
				__event.obj.removeEventListener(__event.type, __event.listener);
				EventHandler.eventList.splice(i, 1);
				i--;
			}
 		}
		for(i=0; i<EventHandler.tickList.length; i++) {
			__event = EventHandler.tickList[i];
			__event.obj.removeEventListener(__event.type, __event.listener);
 		}
		 EventHandler.tickList = [];
	}
}