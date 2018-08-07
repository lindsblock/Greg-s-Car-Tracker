class Api::GasolinesController < ApplicationController
  before_action :set_gasoline, only: [:update, :destroy]

  def index
    render json: Gasoline.all.order(created_at: :asc)
  end

  def show
    render json: @gasoline
  end

  def create
    gasoline = Gasoline.create(gasoline_params)
    if gasoline.save
      render json: gasoline
    else
      render json: { errors: gasoline.errors.full_messages.join(','), status: 422 }
    end
  end

  def update
    if @gasoline.update(gasoline_params)
      render json: @gasoline
    else
      render json: { errors: @gasoline.errors.full_messages.join(',') }, status: 422
    end
  end

  def destroy
    @gasoline.destroy
  end

  private

  def gasoline_params
    params.require(:gasoline).permit(:location, :octane, :gallons, :miles, :mpg, :price, :date, :miles_between, :notes)
  end

  def set_gasoline
    @gasoline = Gasoline.find(params[:id])
  end

end
