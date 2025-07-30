import AsyncStorage from '@react-native-async-storage/async-storage'

const types = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
}

export const actionCreators = {
  loading: () => ({ type: types.LOADING }),
  failure: () => ({ type: types.FAILURE }),
  success: (photos, page) => ({
    type: types.SUCCESS,
    payload: { photos, page },
  }),
}

export const initialState = {
  loading: false,
  error: false,
  photos: [],
  nextPage: 1,
}
export function reducer(state, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, loading: true, error: false }
    case types.SUCCESS:
        const combined=[...state.photos, ...action.payload.photos]
        const uniquePhotosMap = new Map()
        combined.forEach((photo) => {
            if(!uniquePhotosMap.has(photo.id)){
                uniquePhotosMap.set(photo.id, photo)
            }
        })
        const newPhotos = Array.from(uniquePhotosMap.values())
        AsyncStorage.setItem(`PHOTOS_PAGE_${action.payload.page}`, JSON.stringify(action.payload.photos)).catch(console.error)

      return {
        ...state,
        loading: false,
        error: false,
        photos: newPhotos,
        nextPage: state.nextPage + 1,
      }
    case types.FAILURE:
      return { ...state, loading: false, error: true }
  }
}
