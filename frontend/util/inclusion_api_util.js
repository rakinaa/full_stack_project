export const createInclusions = album_inclusions => {
  return $.ajax({
    method: 'POST',
    url: '/api/album_inclusions',
    data: { album_inclusions }
  })
};