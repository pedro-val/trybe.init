
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
fetch("https://api.goprogram.ai/inspiration")
  .then(response => response.json().then((text) => console.log(text)));