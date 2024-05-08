class Article < ApplicationRecord
  validates :title, presence: true
  validates :body, presence: true


  private

  def set_defaults
    self.published ||= false
  end
end
