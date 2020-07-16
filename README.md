# Advanced Styling Techniques

## About the setup

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server runs on port `1234` by default, but will use another if `1234` is
being used by another application.

The API runs on port `4000`, and will not work if this port is being used
by another process. You can easily kill a process hogging the port using [fkill-cli](https://github.com/sindresorhus/fkill-cli),
all you have to do is run the command `fkill :4000`

## Running this project

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`.
- Run `npm run server` to start an API running on `http://localhost:4000`
- Run `npm start` to compile the React project and serve the page on `http://localhost:1234`.
