json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description
  json.photo_url url_for(photo.image)
end