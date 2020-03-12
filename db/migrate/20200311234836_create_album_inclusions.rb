class CreateAlbumInclusions < ActiveRecord::Migration[5.2]
  def change
    create_table :album_inclusions do |t|
      t.integer :album_id, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end
    add_index :album_inclusions, [:album_id, :photo_id], unique: true
  end
end
