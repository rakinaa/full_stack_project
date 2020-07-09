class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id

    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment.user_id == current_user.id
      if @comment.update(comment_params) 
        render "api/photos/show"
      else
        render json: @comment.errors.full_messages
      end
    else
      render json: ['Unauthorized edit request']
    end
  end

  def show
    @comment = Comment.find(params[:id])
    render "api/comments/show"
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