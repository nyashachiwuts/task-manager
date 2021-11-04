class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :todo, null: false

      t.timestamps
    end
  end
end
