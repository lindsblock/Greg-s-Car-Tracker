class CreateTires < ActiveRecord::Migration[5.1]
  def change
    create_table :tires do |t|
      t.string :name
      t.string :date
      t.integer :odometer
      t.string :type
      t.integer :total_miles
      t.string :tire
      t.string :miles

      t.timestamps
    end
  end
end
