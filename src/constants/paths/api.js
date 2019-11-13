export default {
  build: (path, ...params) => {
    return path.replace(/(:\w+)/g, () => params.shift());
  },
  GET_BEERS: "https://api.punkapi.com/v2/beers"
};
