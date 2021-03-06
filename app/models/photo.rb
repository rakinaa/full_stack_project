class Photo < ApplicationRecord

  validates :user_id, presence: true

  belongs_to :user

  has_many :comments,
    dependent: :destroy
  
  has_many :commenters,
    through: :comments,
    source: :user
  
  has_many :album_inclusions,
    dependent: :destroy

  has_many :photo_albums,
    through: :album_inclusions,
    source: :photo_album

  has_many :showcase_photos,
    dependent: :destroy

  has_many :tagged_photos

  has_many :tags,
    through: :tagged_photos,
    source: :tag

  has_one_attached :image
end