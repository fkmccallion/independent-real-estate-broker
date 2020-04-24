class AddTitleToAgents < ActiveRecord::Migration[5.2]
  def change
    add_column :agents, :title, :string
  end
end
