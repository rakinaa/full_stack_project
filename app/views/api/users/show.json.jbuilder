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