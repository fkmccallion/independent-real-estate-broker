class AddClientToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :client, :string
  end
end
