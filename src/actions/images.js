const BASE_URL = "http://localhost:3000"
const IMAGES_URL = `${BASE_URL}/images`

export const addImage = image => {

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'title': image.title,
      'img_url': image.img_url,
      'property_id': image.property_id
    })
  };

  return (dispatch) => {
    fetch(IMAGES_URL, configObj)
      .then(response => response.json())
      .then(images => dispatch({ type: 'ADD_IMAGE', images }));
  };

};

export const deleteImage = image => {

  let configObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      'id': image
    })
  };

  return (dispatch) => {
    fetch(IMAGES_URL + `/${image}`, configObj)
      .then(response => response.json())
      .then(image => dispatch({ type: 'DELETE_IMAGE', image }));
  };

};

export function fetchImages() {

  return (dispatch) => {
    fetch(IMAGES_URL)
      .then(response => response.json())
      .then(images => dispatch({ type: 'POPULATE_IMAGES', images }));
  };
  
}
