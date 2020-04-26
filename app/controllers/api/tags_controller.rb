class Api::TagsController < ApplicationController
  def create
    @tag = Tag.new(tag_params)
    if @tag.save
      @tagged_photo = TaggedPhoto.new(photo_id: params.photo_id)
      @tagged_photo.tag_id = @tag.id
      @tagged_photo.save
      render "api/tags/show"
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end
end
