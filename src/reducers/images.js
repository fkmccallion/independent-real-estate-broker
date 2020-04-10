export default (state = { images: [], requesting: false}, action) => {

  const BASE_URL = "http://localhost:3000"
  const IMAGES_URL = `${BASE_URL}/images`

  function addImage() {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'title': action.image.title,
        'img_url': action.image.img_url,
        'property_id': action.image.property_id
      })
    };
    fetch(IMAGES_URL, configObj);
  }

  function deleteImage() {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        'id': action.image
      })
    };
    fetch(IMAGES_URL + `/${action.image}`, configObj);
  }

  switch (action.type) {
    case 'START_ADDING_IMAGES_REQUEST':
      return {
        ...state,
        images: [...state.images],
        requesting: true
      }
    case 'POPULATE_IMAGES':
      return {
        ...state,
        images: action.images,
        requesting: false
      }
    case 'ADD_IMAGE':
      addImage();
      return {
        ...state
      }
    case 'DELETE_IMAGE':
      deleteImage();
      return {
        ...state
      }
    default:
      return state;
  }

}
