class AddBreNumberToAgents < ActiveRecord::Migration[5.2]
  def change
    add_column :agents, :bre_number, :integer
  end
end
