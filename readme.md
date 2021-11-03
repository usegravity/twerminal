# Twerminal

Terminal client for Twitter
Read your timeline, send tweets and messages from your native terminal app \
by [usegravity.app](https://usegravity.app)

## Requirements

* node.js 
* twitter developer account

## Installation

```shell
npm install twerminal -g
```

### Install via Github

If you downloaded the package from Github, run the npm link command so you can use the twerminal keyword.

```shell
npm link
```

### Register a Twitter Application

Next, [create a new application in the Twitter developer portral](https://developer.twitter.com/en/portal/projects-and-apps) add the following Twitter authentication keys to the /config.js file:

* API key
* API key secret
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

