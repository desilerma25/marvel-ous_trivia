Rails.application.routes.draw do
  root 'games#index'
  # resources :questions
  resources :games do
    resources :questions, only: [:index]
  end

  resources :questions, only: [:create, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
