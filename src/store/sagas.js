import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* dogpicturesapi_get_breeds_image_random_readWorker(action) {
  try {
    const result = yield call(
      apiService.dogpicturesapi_get_breeds_image_random_read,
      action
    )
    yield put(
      actions.dogpicturesapi_get_breeds_image_random_readSucceeded(result)
    )
  } catch (err) {
    yield put(actions.dogpicturesapi_get_breeds_image_random_readFailed(err))
  }
}
function* dogpicturesapi_get_breeds_image_random_readWatcher() {
  yield takeEvery(
    types.DOGPICTURESAPI_GET_BREEDS_IMAGE_RANDOM_READ,
    dogpicturesapi_get_breeds_image_random_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [dogpicturesapi_get_breeds_image_random_readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
