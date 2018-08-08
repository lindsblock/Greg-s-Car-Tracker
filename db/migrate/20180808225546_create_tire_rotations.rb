class CreateTireRotations < ActiveRecord::Migration[5.1]
  def change
    create_table :tire_rotations do |t|
      t.string :date
      t.integer :odometer
      t.string :name
      t.string :kind
      t.integer :total_miles

      t.timestamps
    end
  end
end
