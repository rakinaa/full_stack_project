Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create , :update, :index, :show, :destroy]
    resources :showcase_photos, only: [:index]
    resources :comments, only: [:create, :update, :destroy]
    resources :photo_albums, only: [:create, :update, :destroy, :show]
    resources :album_inclusions, only: [:create]
    resources :tags, only: [:create]
  end
  root "static_pages#root"
end