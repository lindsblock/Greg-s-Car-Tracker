class CreateGasolines < ActiveRecord::Migration[5.1]
  def change
    create_table :gasolines do |t|
      t.string :location
      t.integer :octane
      t.float :gallons
      t.integer :miles
      t.float :mpg
      t.float :price
      t.string :date
      t.integer :miles_between
      t.string :notes

      t.timestamps
    end
  end
end
