class Tag < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :tagged_photos

  has_many :photos,
    through: :tagged_photos,
    source: :photo
end
