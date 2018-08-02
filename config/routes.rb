Rails.application.routes.draw do
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
