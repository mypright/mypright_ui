# MyPright

Use MyPright to take the true ownership of your personal data. 
Refrain third party login services (you know who. Isshhh !! they are 
tracking you !) who target you with your data.

With MyPright, you decide who should have access your data and until when. 
Centralized control of all your data. 
Grant/Revoke the access to any service when ever you want just with a click.

And guess what ? 
Even MyPright doesn't store your data. 
Your store your data in your private instance by deploying 
it into your private cloud.

In simple words, it is :
#### Your private single sign-on and a private personal data vault.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/)

```sh
git clone git@gitlab.com:mypright/mypright_ui.git # or clone your own fork
cd mypright_ui
cp .env.example .env
npm install
npm start
```

.env file should have your own backend [MyPright](https://gitlab.com/mypright/mypright) instance url

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
heroku create
git push heroku master
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/mypright/mypright_ui)

Last Step: Add `REACT_APP_BACKEND` in your heroku app config vars.
