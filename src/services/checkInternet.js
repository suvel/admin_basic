const checkInternetIsAvailable = () => {
  return new Promise((resolve, reject) => {
    fetch("https://8.8.8.8", {
      method: "GET",
      mode: "no-cors",
    })
      .then(() =>
        resolve({
          havNetworkConnection: true,
          msg: "Connected to Internet 🌐",
          error: undefined,
        })
      )
      .catch((error) => {
        reject(error)
      });
  });
};

export default checkInternetIsAvailable;
