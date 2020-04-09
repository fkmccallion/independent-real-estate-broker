export default (state = { images: [], requesting: false}, action) => {

  const BASE_URL = "http://localhost:3000"
  const IMAGES_URL = `${BASE_URL}/images`

  switch (action.type) {
    case 'START_ADDING_IMAGES_REQUEST':
      return {
        ...state,
        images: [...state.images],
        requesting: true
      }

}
