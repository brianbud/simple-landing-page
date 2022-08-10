# Simple Landing Page

### My first React Project

The goal is to get more practice with JSX and the Component tree.

## How It's Made:

**Tech used:**

## Initial Set up

After making sure Node.js is installed, I install [Create React App](https://create-react-app.dev/) which I find it amazing that 1 command helps me set up my web app!

To test that it's working, I run the `npm start` command to run the app in the development mode. I could see that the app started in localhost:3000 and it looks like it is running properly and that webpack compiled successfully.

I reset the App.js file to a blank slate to work on it as well as removed any default files such as the following: logo.svg, reportWebVitals.js, setupTests.js, App.test.js, and their imports to keep only the minimum needed files.

I wanted this simple landing page to have 3 sections and with that I created 3 components for those sections:

-HeroSection.js
-ServicesSection.js
-FooterSection.js

## Exporting and Importing

I wanted HeroSection.js, SercicesSection.js, and FooterSection to be in the same level of the component tree but one level deep inside App.js.

To accomplish that, I `export default` each component, and then `import` them in App.js.

**Obstacle** I wanted to write this note to myself because I was taking some time to figure out why my code wasn't working this point.

When `export default FooterSection();` remember that you do not need to call the function; removing `()` made it work!. Also, you have to `return()` some JSX in each component or an error will occur.

## Hero Section

One thing I had to get used to is that React uses `className` over class attribute.
