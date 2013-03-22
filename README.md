sse-xul-goliath
===============

XUL with Server-Sent Events (Demo)


* 0) unzip sse_goliath_nad_xul.zip
* 1) cd app
* 2) bundle
* 3) ruby sse.rb -sv sse.rb
* 4) cd xul-helloWorld
* 5) xulrunner application.ini


It’s HTTP-compatible, so it works with standard proxies (including nginx, Varnish, etc.), and  firewalls
An SSE endpoint can be implemented by any streaming capable HTTP web server.
