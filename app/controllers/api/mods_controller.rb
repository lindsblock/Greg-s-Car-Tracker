class Api::ModsController < ApplicationController
  before_action :set_mod, only: [:update, :destroy, :show]

  def index
    render json: Mod.all.order(created_at: :asc)
  end

  def show
    render json: @mod
  end

  def create
    mod = Mod.create(mod_params)
    if mod.save
      render json: mod
    else
      render json: { errors: mod.errors.full_messages.join(','), status: 422 }
    end
  end

  def update
    if @mod.update(mod_params)
      render json: @mod
    else
      render json: { errors: mod.errors.full_messages.join(','), status: 422 }
    end
  end

  def destroy
    @mod.destroy
  end

  private

  def mod_params
    params.require(:mod).permit(:name, :date, :price, :miles, :notes, :id)
  end

  def set_mod
    @mod = Mod.find(params[:id])
  end

end
