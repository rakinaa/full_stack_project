class Api::ShowcasePhotosController < ApplicationController
  def index
    @showcase_photos = ShowcasePhoto.all.includes(photo: :user)
    render "api/showcase_photos/index"
  end
end
