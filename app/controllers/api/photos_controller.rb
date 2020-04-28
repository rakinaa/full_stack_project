class Api::PhotosController < ApplicationController
  def index
    @photos = Photo.all.includes(:user)
    render "api/photos/index"
  end

  def create
    @photos = []
    params[:photos].each do |photo|
      @photo = Photo.new(photo.permit(:title, :description, :image))
      @photo.user_id = current_user.id
      @photo.save
      @photos.push(@photo)
    end
    render :index
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  def update
    @photo = Photo.find_by(id: params[:id])
    if @photo.user_id == current_user.id
      if @photo.update(photo_params) 
        render "api/photos/show"
      else
        render json: @photo.errors.full_messages
      end
    else
      render json: ['Unauthorized edit request']
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:title, :description)
    # params.require(:photos) do |photo|
    #   photo.permit(:title, :description, :image, :user_id)
    # end
    # {photos: [{title..}, {title...}]}
    # {title: .., photos: [img.png, img.png] }
  end
end