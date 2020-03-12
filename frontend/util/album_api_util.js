export const createAlbum = (album, inclusions) => {
  return $.ajax({
    method: 'POST',
    url: '/api/photo_albums',
    data: { album, inclusions },
  })
};

export const getAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/photo_albums'
  })
};

export const getAlbum = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/photo_albums/${albumId}`
  })
};

export const deleteAlbum = (albumId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/photo_albums/${albumId}`
  })
};