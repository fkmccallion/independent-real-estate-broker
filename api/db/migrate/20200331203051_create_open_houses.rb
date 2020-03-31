class CreateOpenHouses < ActiveRecord::Migration[5.2]
  def change
    create_table :open_houses do |t|
      t.string :title
      t.string :content
      t.datetime :start_time

      t.timestamps
    end
  end
end
