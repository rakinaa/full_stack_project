json.user do
  json.partial! "api/users/user", user: @user
end

if @user.photos.length < 1
  json.set! :photos, {}
else
  json.photos do
    @user.photos.each do |photo|
      json.set! photo.id do
        json.partial! "api/photos/photo.json.jbuilder", photo: photo
      end
    end
  end
end