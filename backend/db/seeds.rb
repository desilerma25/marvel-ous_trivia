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
Question.create(game_id: 1, content: "Which beloved comic book writer cameoed in every Marvel film up to Avengers: Endgame?", correct_answer: "Stan Lee", option_a: "Chris Claremont", option_b: "Stan Lee", option_c: "Alan Moore", option_d: "Joss Whedon")
Question.create(game_id: 1, content: "How many Infinity Stones are there?", correct_answer: "Six", option_a: "Four", option_b: "Seven", option_c: "Nine", option_d: "Six")
Question.create(game_id: 1, content: "What is the name of Thor's hammer", correct_answer: "Mjolnir", option_a: "Norn", option_b: "Mjolnir", option_c: "Minchi", option_d: "Hagui")

Question.create(game_id: 2, content: "Who made Captain America's shield?", correct_answer: "Howard Stark", option_a: "Natasha Romanoff", option_b: "Howard Stark", option_c: "Tony Stark", option_d: "Bruce Banner")
Question.create(game_id: 2, content: "From which Infinity Stone did Carol Danvers get her powers?", correct_answer: "Space", option_a: "Mind", option_b: "Space", option_c: "Reality", option_d: "Power")
Question.create(game_id: 2, content: "The Flerkens are a race of extremely dangerous aliens that resembles what?", correct_answer: "Cats", option_a: "Cats", option_b: "Dogs", option_c: "Racoons", option_d: "Hamsters")
Question.create(game_id: 2, content: "What is Wanda Maximoff’s brother’s first name?", correct_answer: "Pietro", option_a: "Peter", option_b: "Cosmo", option_c: "Pietro", option_d: "Richard")
Question.create(game_id: 2, content: "Who is Black Panther’s sister?", correct_answer: "Shuri", option_a: "Okoye", option_b: "Nakia", option_c: "Shuri", option_d: "Adah")


Question.create(game_id: 3, content: "Who killed T’Challa’s father?", correct_answer: "Helmut Zemo", option_a: "Captain America", option_b: "Winter Soldier", option_c: "Thanos", option_d: "Helmut Zemo")
Question.create(game_id: 3, content: "Who did the Sovereign create in the mid-credits scene for Guardians of the Galaxy 2?", correct_answer: "Adam Warlock", option_a: "Winter Soldier", option_b: "Vision", option_c: "Adam Warlock", option_d: "Ant-Man")
Question.create(game_id: 3, content: "What is the name of the group of alien assassin's lead by Thanos?", correct_answer: "Black Order", option_a: "Black Order", option_b: "Lethal Legion", option_c: "Sinister Six", option_d: "Illuminati")
Question.create(game_id: 3, content: "Agatha Harkness claims that Scarlet Witch's twin boys are shards from whose soul?", correct_answer: "Mephisto", option_a: "Magneto", option_b: "Mephisto", option_c: "Death", option_d: "Doctor Doom")
Question.create(game_id: 3, content: "What is the name of the weapon Odin created for Beta Ray Bill?", correct_answer: "Stormbreaker", option_a: "Excalibur", option_b: "Ebony Blade", option_c: "Stormbreaker", option_d: "Godslayer")