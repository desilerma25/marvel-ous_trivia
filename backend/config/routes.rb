Rails.application.routes.draw do
  # resources :questions
  resources :games do
    resources :questions, shallow: true
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
