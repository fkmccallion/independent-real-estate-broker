export const addImage = image => {
  return {
    type: 'ADD_IMAGE',
    image
  };
};

export const deleteImage = image => {
  return {
    type: 'DELETE_IMAGE',
    image
  };
};

export function fetchImages() {
  const BASE_URL = "http://localhost:3000"
  const IMAGES_URL = `${BASE_URL}/images`

  return (dispatch) => {
    dispatch({ type: 'START_ADDING_IMAGES_REQUEST' });
    fetch(IMAGES_URL)
      .then(response => response.json())
      .then(images => dispatch({ type: 'POPULATE_IMAGES', images }));
  };
}
