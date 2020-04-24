class TaggedPhoto < ApplicationRecord
  validates :photo_id, uniqueness: { scope: :tag_id, message: "Photo already has that tag" }
  belongs_to :photo
  belongs_to :tag
end
