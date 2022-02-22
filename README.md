# Introduction

Mockup implementation of a [FedCM](https://github.com/fedidcg/FedCM) Identity Provider. Express based NodeJS app.

## Secure origin

FedCM IDPs and RPs must be run in secure origins (i.e. via https). The mockup implementation expects the certificate and private key in the root folder of the deployment. (cf. *bin/www*) 
```
const options = {
   key: fs.readFileSync('./privkey.pem', 'utf8'),
  cert: fs.readFileSync('./fullchain.pem', 'utf8')
};
```

## Compatability 

This implementation works with *Chrome Canary 100.0.4878.0-487800021* - FedCM is only available on Chrome on Android.

# Usage

1. Clone Repo
2. Install dependencies

``` 
npm install
```
3. Start Server
``` 
DEBUG=fedcm:* npm start
```
# Testing

One started the server should repond to 

1. FedCM Metadata Requests (./.well-known/fedcm)
2. FedCM API Endpoint Requests (as provided in the Metadata Request)

## Responses

All reponses other than the token endpoint are fetched from static files (see *./endpoints/*). Token Post Request are handled directly in the fedcm router (see ./routes/fedcm.js)

