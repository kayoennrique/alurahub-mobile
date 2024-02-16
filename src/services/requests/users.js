import api from "../api"

export async function searchUser(userName) {
  try {
    const result = await api.get(`/users/${userName}`);
    return result.data
  }
  catch (error) {
    console.log(error)
    return {}
  }
}