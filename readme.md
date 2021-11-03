# Twerminal

Terminal client for Twitter
Read your timeline, send tweets and messages from your native terminal app
by Kyle Gawley [usegravity.app](https://usegravity.app)

## Installation

```shell
npm install twerminal -g
```

Next, [create a new application in the Twitter developer portral](https://developer.twitter.com/en/portal/projects-and-apps) add the following Twitter authentication keys to the /config.js file:

* Your API key
* Your API key secret
* Access token
* Access token secret


## Usage
```shell
// show home timeline
twerminal home

// show profile timeline
twerminal timeline

// show mentions
twerminal mentions

// send a new tweet
twerminal tweet 'your text here'

// list messages
twerminal messages

// send a new direct message
twerminal message @username 'your message text'

// get help
twerminal help
```
