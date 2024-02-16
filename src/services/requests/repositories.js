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

export async function saveUserRepositories(postId, name, data, id) {
  try {
    await api.put(`/repos/${id}`, {
      name: name,
      data: data,
      postId: postId
    });
    return 'sucess'
  }
  catch (error) {
    console.log(error)
    return 'erro'
  }
}