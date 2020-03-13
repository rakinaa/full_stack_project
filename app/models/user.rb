class User < ApplicationRecord
  attr_reader :password
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  
  after_initialize :ensure_session_token, :ensure_profile_pic

  has_many :photos
  has_many :comments
  has_many :photo_albums
  has_one_attached :profile_picture

  def ensure_profile_pic
    require 'open-uri'
    if !profile_picture.attached?
      file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/adorable-animal-animal-photography-2123773.jpg')
      profile_picture.attach(io: file, filename: "profile.jpg")
    end
  end
  
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end
  
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
  
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end
  
  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
