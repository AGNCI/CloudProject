class HtmlController < ApplicationController
  def index
    send_file "#{Rails.root}/public/html/#{params[:path]}", type: 'text/html', disposition: 'inline'
  end
end
