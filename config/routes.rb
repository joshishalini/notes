Rails.application.routes.draw do
  root "notes#index"

  get "/keeps/*path" => "notes#index"
  resources :notes do
  	collection do
  		get :get_all_notes
  	end
  end

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
