Rails.application.routes.draw do

  namespace :api do
    resources :tire_rotations
  end
  namespace :api do
    resources :filters
  end
  namespace :api do
    resources :services
  end

  namespace :api do
    resources :gasolines
  end

  namespace :api do
    resources :tires
  end

  namespace :api do
    resources :mods
  end

  #Do not place any routes below this one
  get '*other', to: 'static#index'
end
