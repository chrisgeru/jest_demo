import _ from "lodash";

export const getRandomQuote = () => {
    const index = _.random(0, 18);
    return fetch(`https://my-json-server.typicode.com/chrisgeru/quotes/posts/${index}`)
        .then(response => response.json())
        .then(json => json.title);
};
