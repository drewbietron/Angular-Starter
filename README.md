[![DT Logo](https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xaf1/t31.0-8/c0.0.851.315/p851x315/1274723_608973065821031_561617611_o.jpg)](http://drewtempleton.com/)

## Overview

Starter template for AngularJS apps.  Built using the [Yeoman Angular Generator](https://github.com/yeoman/generator-angular).  Added [320+](http://stuffandnonsense.co.uk/projects/320andup/) for the responsive-ness.  Breakpoints at 480, 600, 768, 992 and 1382.  Uses the [Skeleton CSS Grid](https://github.com/dhg/Skeleton/) and the [Bourbon SASS Mixin Library](http://bourbon.io/docs/#px-to-rem).

## Getting Started

Before you begin make sure you have the [yo scaffolding tool](http://yeoman.io/generators/) installed(As it is part of the Yeoman tool set you might have installed it before). To globally install *yo* you will need to use npm:

```
$ npm install -g yo
```

Once you have *yo* installed, you will need to install the Angular generator

```
$ npm install -g generator-angular
```

## To run a local server

```
$ grunt serve
```
**If you get errors running Grunt, make sure that you have the [Grunt & The Grunt CLI](https://github.com/gruntjs/grunt) installed

Your app will be running on 
```
http://localhost:3000
```

## Dependencies

All dependencies are handled by [Bower](https://github.com/bower/bower) and are installed by running
```
bower install package_name
```
Once installed, you can see your list of installed dependences in /bower.json - You can also change the version number of these dependencies right in this file and then run 
```
bower update
```

## Generators

Run these generators in conjunction with the Yeoman's Angular generator for quickly scaffilding routes, directives, controllers, all sorts of stuff.  [Available generators](https://github.com/yeoman/generator-angular#generators) 

**Note: Generators are to be run from the root directory of your app.**

## Testing

BP Tests are setup in the /spec directory