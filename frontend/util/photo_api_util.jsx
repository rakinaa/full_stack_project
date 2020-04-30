export const createPhoto = photoData => {
  return $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: photoData,
    contentType: false,
    processData: false
  })
};

export const updatePhoto = (photoId, photoData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photoId}`,
    data: photoData
  })
};

export const getPhotos = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
};

export const getShowcase = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/showcase_photos'
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