# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.create(difficulty: "Beginner")
Game.create(difficulty: "Intermediate")
Game.create(difficulty: "Expert")

Question.create(game_id: 1, content: "Before becoming Vision, what was the name of Iron Man's A.I. butler?", correct_answer: "J.A.R.V.I.S", option_a: "Benji", option_b: "A.L.F.R.E.D", option_c: "J.A.R.V.I.S", option_d: "Ultron")
Question.create(game_id: 2, content: "Who made Captain America's shield?", correct_answer: "Howard Stark", option_a: "Natasha Romanoff", option_b: "Howard Stark", option_c: "Tony Stark", option_d: "Bruce Banner")
Question.create(game_id: 3, content: "Who killed T’Challa’s father?", correct_answer: "Helmut Zemo", option_a: "Captain America", option_b: "Winter Soldier", option_c: "Thanos", option_d: "Helmut Zemo")
