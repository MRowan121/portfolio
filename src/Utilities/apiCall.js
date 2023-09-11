const url = "https://api.github.com/users/MRowan121";

const getUser = () => {
  return fetch(`${url}`).then((res) => {
    if (!res.ok) {
      throw new Error("Something went wrong");
    }
    return res.json();
  });
};

export { getUser };
