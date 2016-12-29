class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.integer :category, null: false
      t.string  :name, null: false
      t.float   :price, null: false
      t.text    :description

      t.timestamps null: false
    end
  end
end
