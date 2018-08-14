class Api::FiltersController < ApplicationController
  before_action :set_filter, only: [:update, :destroy, :show]

  def index
    render json: Filter.all.order(created_at: :asc)
  end

  def show
    render json: @filter
  end

  def create
    filter = Filter.create(filter_params)
    if filter.save
      render json: filter
    else
      render json: {  errors: filter.errors.full_messages.join(','), status: 422 }
    end
  end

  def update
    if @filter.update(filter_params)
      render json: @filter
    else
      render json: {  errors: filter.errors.full_messages.join(','), status: 422 }
    end
  end

  def destroy
    @filter.destroy
  end

  private

  def filter_params
    params.require(:filter).permit(:date, :complete, :oci, :miles)
  end

  def set_filter
    @filter = Filter.find(params[:id])
  end
end
