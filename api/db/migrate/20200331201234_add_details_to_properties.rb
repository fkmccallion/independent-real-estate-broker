class AddDetailsToProperties < ActiveRecord::Migration[5.2]
  def change
    add_column :properties, :bed, :float
    add_column :properties, :bath, :float
    add_column :properties, :sqft, :integer
    add_column :properties, :transaction_date, :date
  end
end
