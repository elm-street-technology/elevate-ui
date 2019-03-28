[<img src="https://github.com/elm-street-technology/elevate-ui/raw/develop/elevate-ui-logo.png" width="280" />](https://www.elevate-ui.com)

[<img src="https://img.shields.io/npm/v/elevate-ui.svg?style=flat-square" />](https://www.npmjs.com/package/elevate-ui) [![Build Status](https://travis-ci.com/elm-street-technology/elevate-ui.svg?branch=develop)](https://travis-ci.com/elm-street-technology/elevate-ui) ![David](https://img.shields.io/david/elm-street-technology/elevate-ui.svg?style=flat-square)

## [Docs + Demo](https://www.elevate-ui.com)

Elevate-UI is an opinionated toolkit of React components and patterns used for the rapid prototyping and development of web apps and sites for Elm Street Technology. It seeks to establish best practices around user-interface and user-experience design, for both the platform's users, as well as the developers.

## Libraries

A number of open-source libraries have been used to build Elevate-UI:

- [babel](https://babeljs.io/)– A JavaScript compiler
- [eslint](https://github.com/eslint/eslint)– JavaScript linting utility
- [eslint-config-react-app](https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app)– ESLint configuration specifically for React components and apps
- [prettier](https://github.com/prettier/prettier)– Opinionated code formatting for js/json/css/md
- [formik](https://github.com/jaredpalmer/formik)– Form state management and utilities
- [yup](https://github.com/jquense/yup)– Client-side form schema validation
- [react-jss](https://github.com/cssinjs/react-jss)– CSS-in-JS solution with theming and easy overrides
- [react-table](https://github.com/react-tools/react-table)– a lightweight, fast and extendable datagrid
- [react-datetime](https://github.com/YouCanBookMe/react-datetime)– a lightweight but complete datetime picker

## Forms with Formik

The majority of functionality in our applications revolve around _forms_. In order to maintain organization and consistency– we'll want to use the library Formik.

> "My goal with Formik was to create a scalable, performant, form helper with a minimal API that does the really really annoying stuff, and leaves the rest up to you." –[Jared Palmer at ReactNYC](https://www.youtube.com/watch?v=-tDy7ds0dag&feature=youtu.be&t=33s)

Anywhere we use a form in our apps, we'll want to make sure that we have accounted for the following:

- Proper input types for requested data
- Validation messaging at the form level
- Validation messaging at the individual field level
- Loading and disabled states for async data fetching and on submit

## Styling with CSS-in-JS

We'll use CSS-in-JS to help guarantee that our components have all their markup, logic, and styling, together. CSS-in-JS helps prevent against any side effects that could occur from the cascading portion of CSS, while also giving us the ability to theme and customize our components with ease.

- [Benefits of using JavaScript Style Sheets](http://cssinjs.org/benefits)
- [React: CSS in JS by vjeux (2014)](https://speakerdeck.com/vjeux/react-css-in-js)

## Code-splitting with Webpack's dynamic imports

We are also able to utilize our Loading component, which uses [React-Loadable](https://github.com/jamiebuilds/react-loadable) and [Webpack's dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports) to split our application bundle into proper chunks. This helps ensure we are delivering optimized frontend assets to our users– saving them both time and data.
