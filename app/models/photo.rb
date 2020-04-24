class Photo < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user
  has_many :comments
  has_many :commenters,
    through: :comments,
    source: :user
  
  has_many :album_inclusions

  has_many :photo_albums,
    through: :album_inclusions,
    source: :photo_album

  has_one_attached :image
end