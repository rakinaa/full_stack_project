# Pictr
[Pictr live](https://pictrapp.herokuapp.com/#/)

Pictr is a full-stack web app that allows you to share photos with others. This app is made in the image of Flickr. It is built with Rails and PostreSQL backend, with AWS s3 storing the image files. The Frontend is built with React, Redux, and SASS

![intro-png](app/assets/images/intro.png)

## Features

### Photos Index Page
The photos index page features a flexible layout that dynamically resizes images to fit within its container.

![show-png](app/assets/images/show_page.png)

### Posting Images
Pictr allows you to upload multiple photos at a time, making it easy for users to add as many photos as they want without any hassle
The images are stored on an AWS S3 bucket. 


### Albums

Users can create albums of photos that they own. They are able to interface with a ui that allows them to click on a photo to toggle its presence in the album, they included photos display a checkmark when clicked.

### Comments

Users are allowed to comment on photos, the comment they make will appear on that photo's show page, it features a link to their profile along with their profile picture, and comment body.

### Wiki
To view the schema documentation, frontend state layout, and general planning
go to the [wiki](https://github.com/rakinaa/full_stack_project/wiki).

### Features to implement in the future
+ Tags to label pictures with relevant information not present in the title
+ Seach functionality to allow users to search for key words and filter photos on the index page
+ Favoriting photos, allowing the user create a list of photos that they like
+ Groups letting users with common interests to post pictures and see the pictures of others in the group
