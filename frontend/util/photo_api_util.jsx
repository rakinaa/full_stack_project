export const createPhoto = photoData => {
  return $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: photoData,
    contentType: false,
    processData: false
  })
};

export const getPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
};

export const getPhoto = (photoId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/photos/${photoId}`
  })
};

export const deletePhoto = (photoId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/photos/${photoId}`
  })
};