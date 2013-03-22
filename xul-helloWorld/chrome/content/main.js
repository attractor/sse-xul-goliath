

// messages from server
var data = "";

// set event source 
var source = new EventSource('http://0.0.0.0:9000/events');
var sseMessage = document.getElementById("sse-text");


// new connection opened callback
source.addEventListener('open', function(e) {
  console.log('connection opened');
}, false);

// subscribe to unnamed messages
source.onmessage = function(e) {
  console.log(e);
  var description = document.getElementById("sse-text");
  description.textContent += e.data;

};

// listen for signup events
source.addEventListener('signup', function(e) {
  console.log(e);
  var description = document.getElementById("sse-text");
  description.textContent += e.data;

}, false);

// connection closed callback
source.addEventListener('error', function(e) {
  if (e.eventPhase == EventSource.CLOSED) {
    console.log('connection closed');
  }
}, false);
