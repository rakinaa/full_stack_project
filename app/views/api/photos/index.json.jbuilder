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
      json.extract! photo.user, :id, :username
    end
  end
end