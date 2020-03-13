json.album do
  json.extract! @album, :id, :title, :user_id
  json.header_photo url_for(@album.header_photo)
end

json.user do
  json.partial! "api/users/user.json.jbuilder", user: @album.user
end

json.set! :photos, {}
json.photos do
  @album.photos.each do |photo|
    json.set! photo.id do
      json.partial! "api/photos/photo", photo: photo
    end
  end
end