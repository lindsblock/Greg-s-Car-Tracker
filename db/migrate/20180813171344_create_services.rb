class CreateServices < ActiveRecord::Migration[5.1]
  def change
    create_table :services do |t|
      t.string :work
      t.string :date
      t.float :price
      t.integer :miles
      t.string :notes
      t.integer :oci
      t.integer :uoa

      t.timestamps
    end
  end
end
