Rails.application.routes.draw do
  resources :images
  resources :property_images
  resources :properties
  resources :agents
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
