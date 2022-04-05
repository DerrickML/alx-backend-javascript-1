function getResponseFromAPI() {
  return Promise.resolve({
    body: 'A promise always fullfilled',
  });
}

export default getResponseFromAPI;
