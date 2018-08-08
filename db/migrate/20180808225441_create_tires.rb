class CreateTires < ActiveRecord::Migration[5.1]
  def change
    create_table :tires do |t|
      t.string :name
      t.integer :miles

      t.timestamps
    end
  end
end
