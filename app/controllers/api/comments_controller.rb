class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = currentUser.id

    if @comment.save
      # render "api/comment/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render "api/comment/show"
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end
end