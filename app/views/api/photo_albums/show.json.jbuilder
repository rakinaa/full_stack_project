json.album do
  json.extract! @album, :id, :title, :user_id
end

json.user do
  json.extract! @album.user, :id, :username
end

json.set! :photos, {}
json.photos do
  @album.photos.each do |photo|
    json.set! photo.id do
      json.partial! "api/photos/photo", photo: photo
    end
  end
end