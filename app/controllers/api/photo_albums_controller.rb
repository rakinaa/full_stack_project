class Api::PhotoAlbumsController < ApplicationController
  def create
    @album = PhotoAlbum.new(album_params)
    if @album.save
      params[:inclusions].each do |inclusion|
        @inclusion = AlbumInclusion.new(photo_id: inclusion)
        @inclusion.album_id = @album.id
        @inclusion.save
      end
      render "api/photo_albums/show"
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def show
    @album = PhotoAlbum.find(params[:id])
    render "api/photo_albums/show"
  end

  def album_params
    params.require(:album).permit(:title, :user_id)
  end
end
