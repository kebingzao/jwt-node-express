#一个关于JWT (JSON Web Tokens)的Node/Express Example

This simple application is designed to demonstrate the principle of using JWT (JSON Web Tokens) as access tokens to protect an API.

For an overview of how it all works, read the tutorial - to follow shortly.

##Pre-requisites

Obviously you'll need Node and npm, and you also need MongoDB installed and running.

##Installing and Setting Up

Install the project dependencies:

	npm install

Ensure Mongod is running, and seed the database:

	node seed.js

This will create a single user:

**Username**: `zach`

**Password**: `password`

##Using It

To use it without a client application, use something like [Postman, for Chrome](https://chrome.google.com/webstore/detail/postman-rest-client/fdmmgilgnpjigdojojpjoooidkmcomcm?utm_source=chrome-ntp-icon) or [Poster, for Firefox](https://addons.mozilla.org/en-US/firefox/addon/poster/).

Run the application:

	node app.js

To get a token, make a `GET` request to:

	http://localhost:3000/token

You'll need to set the **headers**:

`username` : `zach`

`password` : `password`

Make a note of the access token in the returned JSON.

Now try making a `GET` request to the following URL:

	http://localhost:3000/secret

You should get a 401 Not Authorized.

However, if you set the access token; either as a `GET` parameter `access_token` or a header called `x-access-token` you should see the following:

	Hello zach

That' it!

