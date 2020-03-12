Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:create, :index, :show]
    resources :comments, only: [:create, :update, :destroy]
    resources :photo_albums, only: [:create, :update, :destroy, :show]
  end
  root "static_pages#root"
end