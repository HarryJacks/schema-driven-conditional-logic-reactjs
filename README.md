# schema-driven-conditional-logic-reactjs
Schema driven conditional logic in React JS using Redux store. This repo just contains the /src folder of a React JS project and therfore doesn't include the package.json and build tools that are in the https://github.com/HarryJacks/webpack-reactjs repo.

The schema is just hardcoded in the MyForm.jsx file but would ideally come back from a Fetch or Axios request in ComponentDidMount function etc.

The importance here is the "dependantOn" and "triggerValues" properties on each field object. This prevents us from having to duplicate content like you would have to if you used a child like structure of data.
