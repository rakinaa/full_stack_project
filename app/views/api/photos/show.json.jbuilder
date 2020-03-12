json.photo do
  json.partial! "api/photos/photo", photo: @photo
end 

json.user do 
  json.extract! @photo.user, :id, :username
end

json.set! :comments, {}
json.comments do
  @photo.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body, :user_id, :photo_id
    end
  end
end

json.set! :commenters, {}
json.commenters do
  @photo.commenters.each do |user|
    json.set! user.id do
      json.extract! user, :id, :username
    end
  end
end