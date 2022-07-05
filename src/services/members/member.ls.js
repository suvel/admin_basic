const memberls = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
    )
      .then((response) => response.json())
      .then((result) => resolve(result))
      .catch((error) => reject(error));
  });
};

export default memberls;
