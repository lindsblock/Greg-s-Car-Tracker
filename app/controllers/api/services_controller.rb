class Api::ServicesController < ApplicationController
  before_action :set_service, only: [:update, :destroy, :show]

  def index
    render json: Service.all.order(created_at: :asc)
  end

  def show
    render json: @service
  end

  def create
    service = Service.create(service_params)
    if service.save
      render json: service
    else
      render json: {  errors: service.errors.full_messages.join(','), status: 422 }
    end
  end

  def update
    if @service.update(service_params)
      render json: @service
    else
      render json: { errors: service.errors.full_messages.join(','), status: 422 }
    end
  end

  def destroy
    @service.destroy
  end

  private

  def service_params
    params.require(:service).permit(:work, :date, :price, :miles, :notes, :oci, :uoa, :id)
  end

  def set_service
    @service= Service.find(params[:id])
  end
  
end
