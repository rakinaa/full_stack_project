class CreatePhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :photos do |t|
      t.string :title
      t.string :description
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :photos, :user_id
    add_index :photos, :title
  end
end
