json.photo do
  json.partial! "api/photos/photo", photo: @photo
end 

json.user do 
  json.partial! "api/users/user.json.jbuilder", user: @photo.user
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
      json.partial! "api/users/user.json.jbuilder", user: user
    end
  end
end

json.set! :tags, {}
json.tags do
  @photo.tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :name
    end
  end
end