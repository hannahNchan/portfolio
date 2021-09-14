const ip = process.env.REACT_APP_MAIN_IP_DEV;

const httpRequestMethods = {
  post: 'none',
  get: (url) => _GET(url)
};

const _GET = async (url) => {
  const formedURL = `${ip}/${url}`;
  const response = await fetch(formedURL)
  return await response.json();

}

export default httpRequestMethods;

