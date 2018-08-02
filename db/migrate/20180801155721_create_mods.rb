class CreateMods < ActiveRecord::Migration[5.1]
  def change
    create_table :mods do |t|
      t.string :name
      t.string :date
      t.float :price
      t.integer :miles
      t.string :notes

      t.timestamps
    end
  end
end
