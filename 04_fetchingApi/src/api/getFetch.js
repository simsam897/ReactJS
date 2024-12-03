export const GetFetch = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  return response.json();
};

export const GetRandomUser = async () => {
  const response = await fetch("https://randomuser.me/api/", {
    method: "GET",
  });
  return await response.json();
};
