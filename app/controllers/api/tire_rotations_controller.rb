class Api::TireRotationsController < ApplicationController
  before_action :set_tire_rotation, only: [:update, :destroy]

  def index
    render json: TireRotation.all.order(created_at: :asc)
  end

  def show
    render json @tire_rotation
  end

  def create
    tire_rotation = TireRotation.create(tire_rotation_params)
    if tire_rotation.save
      render json: tire_rotation
    else
      render json: {errors: tire_rotation.errors.full_messages.join(','), status: 422}
    end
  end

  def update
    if tire_rotation.update(tire_rotation_params)
      render json: @tire_roation
    else
      render json: { errors: @tire_rotation.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @tire_rotation.destroy
  end

  private

  def tire_rotation_params
    params.require(:tire_rotation).permit(:date, :name, :total_miles, :odometer, :kind ) 
  end

  def set_tire_rotation
    @tire_rotation = Tire_rotation.find(params[:id])
  end
end
