class CreatePhotoAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :photo_albums do |t|
      t.string :title
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :photo_albums, :user_id
  end
end