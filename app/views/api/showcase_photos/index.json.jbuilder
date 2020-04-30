json.photos do 
  @showcase_photos.each do |showcase_photo|
    json.set! showcase_photo.photo_id do
      json.partial! "api/photos/photo", photo: showcase_photo.photo
    end
  end
end