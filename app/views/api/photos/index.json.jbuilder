# json.array! @photos do |photo|
#   json.partial! "api/photos/photo", photo: photo
# end

json.photos do 
  @photos.each do |photo|
    json.set! photo.id do
      json.partial! "api/photos/photo", photo: photo
    end
  end
end

json.users do
  @photos.each do |photo|
    json.set! photo.user_id do
      json.partial! 'api/users/user.json.jbuilder', user: photo.user
    end
  end
end