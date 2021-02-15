class CreateQuestions < ActiveRecord::Migration[6.1]
  def change
    create_table :questions do |t|
      t.belongs_to :game, null: false, foreign_key: true
      # t.string :difficulty
      t.text :content
      t.string :correct_answer
      t.string :option_a
      t.string :option_b
      t.string :option_c
      t.string :option_d

      t.timestamps
    end
  end
end
