class UsersController < ApplicationController
  def index
    users = User.all 
    render json: users.to_json({
      except: [:created_at, :updated_at],
      :include => {
        :savepets => {
          except: [:created_at, :updated_at]
        }
      }
    }

    )
  end

  def show
    user = User.find(params[:id])
    
    render json: user
  end 

  def create
    newUser = User.create(name: params["name"], phone_number: params["phone_number"], email: params["email"])
    render json: newUser
  end
  
  def

  def update
    
	end

	def destroy

	end

end
