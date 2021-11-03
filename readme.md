# Twerminal

Terminal client for Twitter
Read your timeline, send tweets and messages from your native terminal app. \
Built with Javascript by [usegravity.app](https://usegravity.app)

## Requirements

* node.js v15+
* twitter developer account

## Installation

```shell
npm i twerminal -g
```

### Install via Github

If you downloaded the package from Github, run the npm link command so you can use the twerminal keyword.

```shell
npm i
npm link
```

### Register a Twitter Application

Next, [create a new application in the Twitter developer portal](https://developer.twitter.com/en/portal/projects-and-apps) 

### Config

Now, add your API keys from the previous step to the NPM config by running the following commands in any order:

```shell
npm config set TWITTER_API_KEY=your_twitter_api_key
npm config set TWITTER_API_SECRET=your_twitter_api_key_secret
npm config set TWITTER_ACCESS_TOKEN=your_twitter_access_token
npm config set TWITTER_ACCESS_TOKEN_SECRET=your_twitter_access_token_secret
```

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

