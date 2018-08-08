class CreateTires < ActiveRecord::Migration[5.1]
  def change
    create_table :tires do |t|
      t.string :name
      t.string :date
      t.integer :odometer
      t.string :kind
      t.integer :total_miles
      t.string :tire
      t.integer :miles

      t.timestamps
    end
  end
end
