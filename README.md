# multiCLI

multiCLI is a javascript command line interface tool built by a group of aspiring developers. It offers many functions. Some useful, some useless, but all of them fun!

### Installation

multiCLI requires [Node.js](https://nodejs.org/) to run, and now encourages the usage of [yarn](https://yarnpkg.com/). 

_Note: Although the usage of Yarn is encouraged, NPM is still supported._

Start by cloning the repository, and installing the dependencies...

```sh
$ git clone https://github.com/drum-IT/multiCLI.git
$ cd multiCLI
$ npm install
```

_OR_

```sh
$ git clone https://github.com/drum-IT/multiCLI.git
$ cd multiCLI
$ yarn install
```

Give the bin file the proper permissions so that it can be run...

```
$ chmod +x bin/multicli
```

Symlink the bin file to npm so that you can run it with a single command...

```
$ npm link
```

Test the installation...

```
$ multicli
```

You should see the help menu!

### Creating New Commands

To create a new command, create a new .js file in the cmds directory...

The bare minimum code is as follows:

```
module.exports = args => {
  
};
```

You can access the args object, and perform any logic you like. Take a look at the hello.js file for a simple example.

## Testing
This project now supports and encourages test coverage via [Jest](https://jestjs.io/). 

### Running the Test Suite

```sh
$ npm run test
```

_OR_

```sh
$ yarn test
```

