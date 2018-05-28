var time = [];
var obj = {playerName: "Chris"};
var choices = {};

obj.playerName = prompt ("Hi, what's your name?");

if (obj.playerName.length < 5) {
  alert ("I don't like your name. I'm gonna call you Chris. Much better.");
  obj.playerName = "Chris";
}

console.log(obj.playerName);

obj.playerAge = prompt (`Welcome ${obj.playerName}, I'm bleep bloop bleep but you can call me Triple B. So how old are you?`);

if (obj.playerAge <= 22) {
  prompt ("Nice, that sweet and fresh young blood. Wanna go on an adventure?");
} else if (obj.playerAge >= 23) {
  prompt ("Damn you're old. Careful old timer. Wanna go on an adventure?");
} else {
 prompt ("Wanna go on an adventure?");
}

console.log(obj.playerAge);

alert ("The illusion of choice is a beautiful thing. LETS GO!");

obj.timeOfDay = prompt ("We'll start you off in a forest, somewhere in Kent. Should we start in the night or day time? (Enter 'DAY' or 'NIGHT')");

switch (obj.timeOfDay) { // use this instead of writing loads of if and else statements
  case 'day':
  case 'Day':
    alert (`${obj.playerName}, you smart. You've clearly been on many adventures.`);
    break; // stop running switch statement
  case 'night':
  case 'Night':
    alert (`Noob. Now it's dark. Is this your first adventure ${obj.playerName}?`);
    break; // stop running switch statement
  default: // means if non of the cases are met
    alert (`${obj.playerName}, you know what, you aren't taking this seriously. Let's move on.`);
  }

if (obj.timeOfDay === "day" || obj.timeOfDay === "Day") {
  time.unshift ("DAY");
  console.log(time[0]);
} if (obj.timeOfDay === "night" || obj.timeOfDay === "Night") {
  time.shift ();
  time.unshift ("NIGHT");
  console.log(time[0]);
}

choices.chs1 = prompt ("You hear a figure approaching in the distance. What do you do? 1 for RUN AWAY, 2 for WAIT)");

if (time[0] === "DAY" && choices.chs1 === "1") {
  alert ("This is why you don't adventure at night.");
  alert ("Whilst running you tripped and fell over a tree trunk. You're hurt. You can no longer run.");
} else if (time[0] === "NIGHT" && choices.chs1 == "1") {
  alert ("You ran? But you could see the figure... oh well.");
  alert ("You're now by a wide river. The current looks fast. The water looks strange.");
} else if (choices.chs1 == "2") {
  alert ("You wait for the figure to approach you... IT'S A BEAR!");
} else {
  alert (`${obj.playerName}, you know what, you aren't taking this seriously. Let's move on.`);
}

alert ("To be continued...");
