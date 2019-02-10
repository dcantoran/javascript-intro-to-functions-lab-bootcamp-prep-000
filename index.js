function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var msg = ''
  if (string.toUpperCase()) {
    msg = "YES INDEED!";
  } else if (string.toLowerCase()) {
    msg = "I can't hear you!"
  } else if (string === "I love you, Grandma.") {
    msg = "I love you, too."
  }
  return msg;
}

