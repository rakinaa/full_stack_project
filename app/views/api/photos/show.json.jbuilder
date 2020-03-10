json.photo do
  json.partial! "api/photos/photo", photo: @photo
end 

json.user do 
  json.extract! @photo.user, :id, :username
end