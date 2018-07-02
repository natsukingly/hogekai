class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery
  before_action :skip_session

  protected
    def skip_session
      request.session_options[:skip] = true
    end
end
