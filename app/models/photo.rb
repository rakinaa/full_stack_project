class Photo < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  has_many :comments
  has_many :commenters,
    through: :comments,
    source: :user

  has_one_attached :image
end