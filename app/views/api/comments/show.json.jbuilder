json.comment do
  json.extract! @comment, :id, :body, :user_id
end