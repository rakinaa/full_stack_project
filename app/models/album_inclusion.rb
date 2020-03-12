class AlbumInclusion < ApplicationRecord
  belongs_to :photo_album,
    foreign_key: :album_id,
    class_name: :PhotoAlbum

  belongs_to :photo

  has_one :user,
    through: :photo_album,
    source: :user
end
