class Question < ApplicationRecord
  belongs_to :game
  validates :content, presence: true, uniqueness: true
  validates :correct_answer, presence: true
  validates :option_a, presence: true
  validates :option_b, presence: true
  validates :option_c, presence: true
  validates :option_d, presence: true
  validates :game_id, presence: true
end
