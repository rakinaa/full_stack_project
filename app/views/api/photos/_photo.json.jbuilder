json.extract! photo, :id, :title, :description, :user_id
json.image_url url_for(photo.image)