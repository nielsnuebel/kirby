![Logo of the project](./images/logo.sample.png)

# Kirby
> Additional information or tag line

A brief description of your project, what it is used for.

## Installing / Getting started

Install NPM-Modules via 

```shell
$ npm install
# OR
$ yarn
```

This install the required node_modules.
Then run

```
# Development initialization
$ npm run init

# Develop-Mode with file-watch
$ npm run dev

# Copy HTML-Assets and Images
$ npm run uiimages && npm run htmlassets

# Build for production
$ npm run build
```

## Developing

### Built With
List main libraries, frameworks used including versions (React, Angular etc...)

### Prerequisites
What is needed to set up the dev environment. For instance, global dependencies or any other tools. include download links.


### Setting up Dev

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/nielsnuebel/kirby.git
cd kirby/
mkdir dist && cd dist && git clone --recursive https://github.com/getkirby/starterkit.git .
rm -rf .git && cd .. 
npm install
npm init
npm dev 
```
