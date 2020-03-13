# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

AlbumInclusion.destroy_all
Comment.destroy_all
Photo.destroy_all
PhotoAlbum.destroy_all
User.destroy_all

user1 = User.create(username: 'guestuser1', email: 'guestuser1@hotmail.com', password: '1234567890')
user2 = User.create(username: 'guestuser2', email: 'guestuser2@hotmail.com', password: '1234567890')
user3 = User.create(username: 'guestuser3', email: 'guestuser3@hotmail.com', password: '1234567890')
user4 = User.create(username: 'guestuser4', email: 'guestuser4@hotmail.com', password: '1234567890')
user5 = User.create(username: 'guestuser5', email: 'guestuser5@hotmail.com', password: '1234567890')

photo = Photo.create(title: 'photo1', description: 'photo1', user_id: user2.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-1477430.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-1477430.jpeg')

photo = Photo.create(title: 'photo2', description: 'photo2', user_id: user3.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-237018.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-237018.jpeg')

photo = Photo.create(title: 'photo3', description: 'photo3', user_id: user4.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-371589.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-371589.jpeg')

photo = Photo.create(title: 'photo4', description: 'photo4', user_id: user5.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/flower-purple-lical-blosso.jpg')
photo.image.attach(io: file, filename: 'flower-purple-lical-blosso.jpg')

photo = Photo.create(title: 'photo5', description: 'photo5', user_id: user1.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/amazing-animal-beautiful-beautifull.jpg')
photo.image.attach(io: file, filename: 'amazing-animal-beautiful-beautifull.jpg')

photo = Photo.create(title: 'photo6', description: 'photo6', user_id: user2.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-273680.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-273680.jpeg')

photo = Photo.create(title: 'photo7', description: 'photo7', user_id: user3.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-2217365.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-2217365.jpeg')

photo = Photo.create(title: 'photo8', description: 'photo8', user_id: user4.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/free-video-1093662.jpg')
photo.image.attach(io: file, filename: 'free-video-1093662.jpg')

photo = Photo.create(title: 'photo9', description: 'photo9', user_id: user5.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-92933.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-92933.jpeg')

photo = Photo.create(title: 'photo10', description: 'photo10', user_id: user1.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-2832041.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-2832041.jpeg')

photo = Photo.create(title: 'photo11', description: 'photo11', user_id: user2.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-2033997.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-2033997.jpeg')

photo = Photo.create(title: 'photo12', description: 'photo12', user_id: user3.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-1496373.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-1496373.jpeg')

photo = Photo.create(title: 'photo13', description: 'photo13', user_id: user4.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-91147.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-91147.jpeg')

photo = Photo.create(title: 'photo14', description: 'photo14', user_id: user5.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-210186.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-210186.jpeg')

photo = Photo.create(title: 'photo15', description: 'photo15', user_id: user1.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-994605.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-994605.jpeg')

photo = Photo.create(title: 'photo16', description: 'photo16', user_id: user2.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-304875.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-304875.jpeg')

photo = Photo.create(title: 'photo17', description: 'photo17', user_id: user3.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/forest-sunbeams-trees-sunlight-70365.jpeg')
photo.image.attach(io: file, filename: 'forest-sunbeams-trees-sunlight-70365.jpeg')

photo = Photo.create(title: 'photo18', description: 'photo18', user_id: user4.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-234510.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-234510.jpeg')

photo = Photo.create(title: 'photo19', description: 'photo19', user_id: user5.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-2526028.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-2526028.jpeg')

photo = Photo.create(title: 'photo20', description: 'photo20', user_id: user1.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-931007.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-931007.jpeg')

photo = Photo.create(title: 'photo21', description: 'photo21', user_id: user2.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/free-video-1510090.jpg')
photo.image.attach(io: file, filename: 'free-video-1510090.jpg')

photo = Photo.create(title: 'photo22', description: 'photo22', user_id: user3.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-414171.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-414171.jpeg')

photo = Photo.create(title: 'photo23', description: 'photo23', user_id: user4.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-257360.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-257360.jpeg')

photo = Photo.create(title: 'photo24', description: 'photo24', user_id: user5.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-268261.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-268261.jpeg')

photo = Photo.create(title: 'photo25', description: 'photo25', user_id: user1.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-775201.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-775201.jpeg')

photo = Photo.create(title: 'photo26', description: 'photo26', user_id: user2.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-3082313.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-3082313.jpeg')

photo = Photo.create(title: 'photo27', description: 'photo27', user_id: user3.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/nature-forest-trees-fog.jpeg')
photo.image.attach(io: file, filename: 'nature-forest-trees-fog.jpeg')

photo = Photo.create(title: 'photo28', description: 'photo28', user_id: user4.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/free-video-1580455.jpg')
photo.image.attach(io: file, filename: 'free-video-1580455.jpg')

photo = Photo.create(title: 'photo29', description: 'photo29', user_id: user5.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-392586.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-392586.jpeg')

photo = Photo.create(title: 'photo30', description: 'photo30', user_id: user1.id)
file = open('https://pictr-seeds.s3-us-west-1.amazonaws.com/seed_images/pexels-photo-1658967.jpeg')
photo.image.attach(io: file, filename: 'pexels-photo-1658967.jpeg')

