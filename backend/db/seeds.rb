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
Question.create(game_id: 1, content: "What is Thor the god of?", correct_answer: "Thunder", option_a: "Fire", option_b: "Ocean", option_c: "Love", option_d: "Thunder")

Question.create(game_id: 2, content: "Who made Captain America's shield?", correct_answer: "Howard Stark", option_a: "Natasha Romanoff", option_b: "Howard Stark", option_c: "Tony Stark", option_d: "Bruce Banner")
Question.create(game_id: 2, content: "From which Infinity Stone did Carol Danvers get her powers?", correct_answer: "Space", option_a: "Mind", option_b: "Space", option_c: "Reality", option_d: "Power")

Question.create(game_id: 3, content: "Who killed T’Challa’s father?", correct_answer: "Helmut Zemo", option_a: "Captain America", option_b: "Winter Soldier", option_c: "Thanos", option_d: "Helmut Zemo")
Question.create(game_id: 3, content: "Who did the Sovereign create in the mid-credits scene for Guardians of the Galaxy 2?", correct_answer: "Adam Warlock", option_a: "Winter Soldier", option_b: "Vision", option_c: "Adam Warlock", option_d: "Ant-Man")