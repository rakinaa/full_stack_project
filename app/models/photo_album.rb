class PhotoAlbum < ApplicationRecord
  validates :user_id, presence: true
  after_initialize :ensure_header_photo

  belongs_to :user

  has_many :album_inclusions,
    foreign_key: :album_id,
    class_name: :AlbumInclusion

  has_many :photos,
    through: :album_inclusions,
    source: :photo

  has_one_attached :header_photo

  def ensure_header_photo
    require 'open-uri'
    if !header_photo.attached?
      file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-3789871.jpeg')
      header_photo.attach(io: file, filename: "header.jpg")
    end
  end
end
