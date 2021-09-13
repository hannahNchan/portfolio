const ip = process.env.REACT_APP_MAIN_IP_DEV;
const port = process.env.REACT_APP_MAIN_PORT_DEV;

const httpRequestMethods = {
  post: 'none',
  get: (url) => _GET(url)
};

const _GET = async (url) => {
  const formedURL = `${ip}:${port}/${url}`;

  const options = {
    mode: 'no-cors',
  };

  const response = await fetch(formedURL, options)
  return await response.json();

}

export default httpRequestMethods;

