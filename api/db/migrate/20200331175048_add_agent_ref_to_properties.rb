class AddAgentRefToProperties < ActiveRecord::Migration[5.2]
  def change
    add_reference :properties, :agent, foreign_key: true
  end
end
