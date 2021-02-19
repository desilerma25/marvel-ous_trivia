class QuestionsController < ApplicationController
  # before_action :set_question, only: [:show, :update, :destroy]
  # added
  before_action :set_game

  # GET /questions
  def index
    #added this, prev. said @q = Q.all
    # @game = Game.find(params[:game_id])
    @questions = @game.questions

    render json: @questions
  end

  # GET /questions/1
  def show
    render json: @question
  end

  # POST /questions
  def create
    #added
    @question = @game.questions.build(question_params)
    # Question.new(question_params)

    if @question.save
      render json: @question, status: :created, location: @question
    else
      render json: @question.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /questions/1
  # def update
  #   if @question.update(question_params)
  #     render json: @question
  #   else
  #     render json: @question.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /questions/1
  # def destroy
  #   @question.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_question
    #   @question = Question.find(params[:id])
    # end

    # added
    def set_game
      @game = Game.find(params[:game_id])
    end

    # Only allow a list of trusted parameters through.
    def question_params
      params.require(:question).permit(:game_id, :difficulty, :content, :correct_answer, :option_a, :option_b, :option_c, :option_d)
    end
end
