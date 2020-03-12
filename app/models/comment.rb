class Comment < ApplicationRecord
  validates :user_id, :body, :photo_id, presence: true

  belongs_to :photo
  belongs_to :user
end
