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
      #   # render "api/photos/show"
      # else
      #   # render json: @photo.errors.full_messages
      # end
    end
    
    render :index
    # p params[:photos].to_a
    # Photo.create(params[:photos].to_a)
    # render "api/photos/show"
  end

  def show
    @photo = Photo.find(params[:id])
    render "api/photos/show"
  end

  private

  def photo_params
    # params.roquire(:photo).permit(:title, :description, :image, :user_id)
    # params.require(:photos) do |photo|
    #   photo.permit(:title, :description, :image, :user_id)
    # end
    # {photos: [{title..}, {title...}]}
    # {title: .., photos: [img.png, img.png] }
  end
end