# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180813171506) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "filters", force: :cascade do |t|
    t.string "date"
    t.boolean "complete"
    t.integer "oci"
    t.integer "miles"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "gasolines", force: :cascade do |t|
    t.string "location"
    t.integer "octane"
    t.float "gallons"
    t.integer "miles"
    t.float "mpg"
    t.float "price"
    t.string "date"
    t.integer "miles_between"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "mods", force: :cascade do |t|
    t.string "name"
    t.string "date"
    t.float "price"
    t.integer "miles"
    t.string "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "work"
    t.string "date"
    t.float "price"
    t.integer "miles"
    t.string "notes"
    t.integer "oci"
    t.integer "uoa"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tire_rotations", force: :cascade do |t|
    t.string "date"
    t.integer "odometer"
    t.string "name"
    t.string "kind"
    t.integer "total_miles"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tires", force: :cascade do |t|
    t.string "name"
    t.integer "miles"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
