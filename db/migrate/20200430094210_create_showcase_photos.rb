class CreateShowcasePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :showcase_photos do |t|
      t.integer :photo_id, null:false

      t.timestamps
    end
  end
end
