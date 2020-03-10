class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all.includes(:user)
    render "api/photos/index"
  end

  def create
    @photo = Photo.new(photo_params)
    if @photo.save
      render "api/photos/show"
    else
      render json: @photo.errors.full_messages
    end
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description, :image, :user_id)
  end
end