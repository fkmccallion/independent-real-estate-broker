class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :title
      t.string :img_url

      t.timestamps
    end
  end
end