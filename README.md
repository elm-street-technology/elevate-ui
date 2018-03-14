[<img src="./elevate-ui-logo.png" width="280" />](https://chrisheninger.com/elevate-ui)

## [Docs + Demo](https://chrisheninger.com/elevate-ui)

Elevate-UI is a toolkit of React components used for the rapid prototyping and development of web applications and sites for Elm Street Technology. It seeks to establish best practices around UI/UX for both the end users as well as the developers.

## Libraries

A number of open-source libraries have been used to accomplish this:

* [nwb](https://github.com/insin/nwb)– Toolkit for developing React components and apps
* [eslint](https://github.com/eslint/eslint)– JavaScript linting utility
* [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)– ESLint configuration specifically for React components and apps
* [prettier](https://github.com/prettier/prettier)– Opinionated code formatting for js/json/css/md)
* [formik](https://github.com/jaredpalmer/formik)– Form state management and utilities
* [yup](https://github.com/jquense/yup)– Client-side form schema validation
* [react-jss](https://github.com/cssinjs/react-jss)– CSS-in-JS solution with theming and easy overrides

## Forms

The majority of functionality in our applications revolve around _forms_. In order to maintain organization– we'll want to utilize the library Formik. For every form in our app– we'll want to make sure that we have accounted for the following:

* Proper input type for requested data
* Validation messaging at the form level
* Validation messaging at the individual field level
* Loading and disabled states for async data fetching and on submit

"My goal with Formik was to create a scalable, performant, form helper with a minimal API that does the really really annoying stuff, and leaves the rest up to you." –[Jared Palmer at ReactNYC](https://www.youtube.com/watch?v=-tDy7ds0dag&feature=youtu.be&t=33s)

## Styling

Utilizing the idealogy of CSS-in-JS helps guarantee that our components have all their markup, logic, and styling, together in the same file. It helps prevent against any side effects that could occur from the "cascading" portion of CSS, while also giving us the ability to theme and customize our components with ease.

* [Benefits of using JavaScript Style Sheets](http://cssinjs.org/benefits)
* [React: CSS in JS by vjeux (2014)](https://speakerdeck.com/vjeux/react-css-in-js)

## Code-splitting with dynamic imports

We are also able to utilize our Loading component, which uses [React-Loadable](https://github.com/jamiebuilds/react-loadable) and [Webpack's dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) to split our application bundle into proper chunks. This helps ensure we are delivering optimized frontend assets to our users– saving them both time and data.
