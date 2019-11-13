export default {
  generateIds: () => {
    const favourites = JSON.parse(localStorage.getItem("favorites"));

    if (!favourites) {
      return null;
    }

    let result = "";

    favourites.forEach(element => {
      result += `${element}|`;
    });

    return result.slice(0, -1);
  }
};
