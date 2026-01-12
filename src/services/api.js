const BASE_URL = "http://10.189.87.179:8080/api/users";

export const getUsers = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const addUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return response.json();
};

export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
