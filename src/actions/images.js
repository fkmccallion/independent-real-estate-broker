const BASE_URL = "http://localhost:3000"
const IMAGES_URL = `${BASE_URL}/images`

export const addImage = image => {

  function addImage() {
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
    fetch(IMAGES_URL, configObj);
  }

  addImage()

  return {
    type: 'ADD_IMAGE',
    image
  };
};

export const deleteImage = image => {

  function deleteImage() {
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
    fetch(IMAGES_URL + `/${image}`, configObj);
  }

  deleteImage()

  return {
    type: 'DELETE_IMAGE',
    image
  };
};

export function fetchImages() {

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_IMAGES_REQUEST' });
    fetch(IMAGES_URL)
      .then(response => response.json())
      .then(images => dispatch({ type: 'POPULATE_IMAGES', images }));
  };
}
