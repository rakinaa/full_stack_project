class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

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

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.user_id == current_user.id
      @comment.destroy
      if @comment.destroyed?
        render :show
      else
        render json: @comment.errors.full_messages, status: 422
      end
    else
      render json: ["Unauthorized deletion"], status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :photo_id)
  end
end