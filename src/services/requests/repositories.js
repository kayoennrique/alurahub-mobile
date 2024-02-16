import api from "../api";

export async function getUserRepositories(id) {
  try {
    const result = await api.get(`/repos?postId=${id}`);
    return result.data
  }
  catch (error) {
    console.log(error)
    return []
  }
}