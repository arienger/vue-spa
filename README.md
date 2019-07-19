[![Build Status](https://travis-ci.org/arienger/vue-spa.svg?branch=master)](https://travis-ci.org/arienger/vue-spa)

Single Page Application with Vue.js

Branch: version_1.0.0.0

* Run tests ('test' is defined in the package.json file):
  * npm test

* Run simulated prod environment ('start:prod' is defined in the package.json file):
  * npm run start:prod

* Run development environment ('dev' is defined in the package.json file):
  * npm run dev

* Install packages:
  * npm install vuex@2.4.0 --save

* Developer utils:
  * npm install extract-text-webpack-plugin@3.0.0 --save-dev

* Node package dependencies:
  * see package.json and package-lock.json

* Deployment to Azure:
  * Azure: https://azure.microsoft.com/nb-no/
    * Select 'Portal' then App Services'
    * Select 'Add' to add service
    * After service is added choose 'Quickstart' to deploy application from github

  * run build for deployment ('build' is defined in the package.json file):
    * npm run build

* Deployment to IIS 10:
  * Reference: https://www.simplymigrate.com/2017/04/11/internet-information-server-iis-node-js-in-producton-iisnode/
  * Pre-requisites:
    * IIS 10.0
    * IIS URL Rewrite extension (https://www.iis.net/downloads/microsoft/url-rewrite)
    * Node.js (https://nodejs.org)
    * IISNode (https://github.com/Azure/iisnode/releases) (installs by default to C:\Program Files\iisnode)
    * Running setupsamples.bat (from C:\Program Files\iisnode) will deploy some sampleapps to IIS
    * check that http://localhost/node shows a list of sampleapps


* Other things...
  * authentication tokens: JWT (https://jwt.io/)
    * login to  https://www.fullstackweekly.com:
      * username: bill
      * password: vuejs

  * npm: https://docs.npmjs.com/
  * vue: https://vuejs.org
  * vue unittesting: https://vuejs.org/v2/guide/unit-testing.html
  * GitHub/Continuous Integration (bruker GitHub konto)
https://travis-ci.org/arienger/vue-spa
  * About bit.ly: https://bitly.com/
https://www.techsupportalert.com/content/worried-about-clicking-bitly-link-follow-tip.htm

