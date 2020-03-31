class CreateAgents < ActiveRecord::Migration[5.2]
  def change
    create_table :agents do |t|
      t.string :first_name
      t.string :last_name
      t.string :biography
      t.string :phone
      t.string :email
      t.string :img_url

      t.timestamps
    end
  end
end
