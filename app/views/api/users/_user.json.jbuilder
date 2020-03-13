# json.user do
#   json.extract! user, :id, :username
# end

# if user.photos.length < 1
#   json.set! :photos, {}
# else
#   json.photos do
#     user.photos.each do |photo|
#       json.set! photo.id do
#         json.partial! "api/photos/photo.json.jbuilder", photo: photo
#       end
#     end
#   end
# end
json.extract! user, :id, :username
json.profile_pic url_for(user.profile_picture)