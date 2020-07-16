import axios from "axios"
const dogPicturesAPI = axios.create({
  baseURL: "https://dog.ceo/api/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function dogpicturesapi_get_breeds_image_random_read() {
  return dogPicturesAPI.get(`/breeds/image/random`)
}
export const apiService = { dogpicturesapi_get_breeds_image_random_read }
