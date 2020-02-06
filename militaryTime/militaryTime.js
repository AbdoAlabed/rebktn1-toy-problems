/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  // your code here...
  const military = {
    "1": "13",
    "2": "14",
    "3": "15",
    "4": "16",
    "5": "17",
    "6": "18",
    "7": "19",
    "8": "20",
    "9": "21",
    "10": "22",
    "11": "23"
  };
  if (time.includes("p")) {
    time = time.split(":");
    time[0] = military[time[0]];
    time = time[0].concat(":", time[1]);
    time = time.slice(0, time.length - 2);
  } else if (time === "12:00am") {
    time = "00:00";
  } else if (time.includes("a")) {
    time = time.slice(0, time.length - 2);
  }
  return time;
}
toMilitary("3:00pm");
