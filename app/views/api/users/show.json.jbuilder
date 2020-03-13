json.user do
  json.partial! "api/users/user", user: @user
end

json.set! :photos, {}
json.photos do
  @user.photos.each do |photo|
    json.set! photo.id do
      json.partial! "api/photos/photo.json.jbuilder", photo: photo
    end
  end
end

json.set! :albums, {}
json.albums do
  @user.photo_albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :user_id
      json.header_photo url_for(album.header_photo)
    end
  end
end