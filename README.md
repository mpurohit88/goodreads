### Getting Started

## Prerequisite

# Get the below installed:

- NodeJs Version 8 and above
- NPM version 6 and above
- GIT client

# Setup goodreads 

- Clone goodreads repo from git

``` git clone https://github.com/mpurohit88/goodreads.git ```

- NPM scripts

To install node modules for Client run command - ``` npm install ```

To install node modules for Server run command - ``` npm install ./server ``` 

- Run Application

To run client project - ``` npm start ```

To run server project - ``` npm start ./server ```

- Publish App to heroku

As of now I created separate project to publish application

``` https://github.com/mpurohit88/goodreads-server.git ```

With more time I would created jenkins pipeline to build at run time and move it to server project.
Then publish server project to heroku with static build.