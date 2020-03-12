class Api::AlbumInclusionsController < ApplicationController
  def create
    params[:inclusions].each do |inclusion|
      @inclusion = AlbUmInclusion.new(inclusion.permit(:user_id, :photo_id))
      @inclusion.save
    end
  end
end
