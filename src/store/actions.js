import * as types from "./constants"
export const dogpicturesapi_get_breeds_image_random_read = () => ({
  type: types.DOGPICTURESAPI_GET_BREEDS_IMAGE_RANDOM_READ
})
export const dogpicturesapi_get_breeds_image_random_readSucceeded = response => ({
  type: types.DOGPICTURESAPI_GET_BREEDS_IMAGE_RANDOM_READ_SUCCEEDED,
  response
})
export const dogpicturesapi_get_breeds_image_random_readFailed = error => ({
  type: types.DOGPICTURESAPI_GET_BREEDS_IMAGE_RANDOM_READ_FAILED,
  error
})
