const BASE_URL = "http://10.123.131.179:8080/api/users";

export const getUsers = async () => {
  const response = await fetch(BASE_URL);

  if (!response.ok) {
    const text = await response.text();
    console.log("GET USERS ERROR:", text);
    return [];
  }

  return await response.json();
};

export const addUser = async (user) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const text = await response.text();
    console.log("ADD USER ERROR:", text);
    throw new Error("Failed to add user");
  }

  // ✅ SAFE: backend may return empty body
  return;
};

export const deleteUser = async (id) => {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
};
