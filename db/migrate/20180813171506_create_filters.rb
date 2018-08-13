class CreateFilters < ActiveRecord::Migration[5.1]
  def change
    create_table :filters do |t|
      t.string :date
      t.boolean :complete
      t.integer :oci
      t.integer :miles

      t.timestamps
    end
  end
end
