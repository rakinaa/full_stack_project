class PhotoAlbum < ApplicationRecord
  validates :user_id, presence: true

  belongs_to :user

  has_many :album_inclusions,
    foreign_key: :album_id,
    class_name: :AlbumInclusion

  has_many :photos,
    through: :album_inclusions,
    source: :photo
end
