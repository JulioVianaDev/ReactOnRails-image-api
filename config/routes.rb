Rails.application.routes.draw do
  resources :posts
  get 'latest',to: 'posts#latest'
  get 'renderall',to: 'posts#showAllPost'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
