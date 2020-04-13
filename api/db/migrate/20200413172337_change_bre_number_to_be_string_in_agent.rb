class ChangeBreNumberToBeStringInAgent < ActiveRecord::Migration[5.2]
  def change
     change_column :agents, :bre_number, :string
  end
end
