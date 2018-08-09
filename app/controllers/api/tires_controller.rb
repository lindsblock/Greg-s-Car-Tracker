class Api::TiresController < ApplicationController
  before_action :set_tire, only: [:update, :destroy, :show]

  def index
    render json: Tire.all.order(created_at: :asc)
  end

  def show
    render json @tire
  end

  def create
    tire= Tire.create(tire_params)
    if tire.save
      render json: tire
    else
      render json: {errors: tire.errors.full_messages.join(','), status: 422}
    end
  end

  def update
    if tire.update(tire_params)
      render json: @tire
    else
      render json: { errors: @tire.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @tire.destroy
  end

  private

  def tire_params
    params.require(:tire).permit(:name, :miles )
  end

  def set_tire
    @tire = Tire.find(params[:id])
  end

end
