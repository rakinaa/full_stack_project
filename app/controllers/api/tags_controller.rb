class Api::TagsController < ApplicationController
  def create
    @tag = Tag.find_by_name(tag_params.name)
    if @tag
      @tagged_photo = TaggedPhoto.new(photo_id: params.photo_id)
      @tagged_photo.tag_id = @tag.id
      @tagged_photo.save
      render "api/photos/show"
    else
      @tag = Tag.new(name: tag_params.name)
      if @tag.save
        @tagged_photo = TaggedPhoto.new(photo_id: params.photo_id)
        @tagged_photo.tag_id = @tag.id
        @tagged_photo.save
        render "api/photos/show"
      else
        render json: @tag.errors.full_messages, status: 422
      end
    end
  end

  def tag_params
    params.require(:tag).permit(:name, :photo_id)
  end
end
