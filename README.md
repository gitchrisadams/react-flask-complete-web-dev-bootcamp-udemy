Tutorial from Udemy. A tutorial on using many web dev technologies. These include React, Flask/Python, Api's, and other web technologies.

# Basic App info

Environment variables are placed in .env and .env.loal files. There is also a provided .env.template and .env.local.template files without the keys in the file and checked in to version managment. Use these files as a template to create the actual env file with your secrets entered into the file.

# Frontend app

<img width="1296" height="882" alt="image" src="https://github.com/user-attachments/assets/6de10b8c-be5d-464f-b902-3c3760f0f2e9" />

## Frontend React App

## Installing dependencies

`npm install`

## Building the app

`npm run build`

## Setting up Env variables

Create a file called .env.local and use the file .env.local.template as a guideline for adding in Env variables such as, `REACT_APP_UNSPLASH_KEY=`

## Unsplash api

In order to use this repo, you need to enter your unsplash api key into the `REACT_APP_UNSPLASH_KEY=`
in a file .env.local. YOu need to login in to https://unsplash.com and go to the api documentation.

# Backend Flask App

### Creating and activating a Python virtual env (venv) on Windows

1. Create Virtual env `python -m venv .venv`
1. Activate virtual env: `.venv\Scripts\activate` in CMD (Not powershell)
1. Activate in bash shell option: `source .venv/Scripts/activate`

## Installing requiremnts

1. Enter virutal env (see above)
2. Install requirements with `pip install -r requirements.txt` while inside the activated virtual env

### Flask

### Starting the app

`python main.py`

## Docker

### Building the docker file.

From the /api directory run
`docker build .`

### Running the docker image

from the /api directory run
`docker images`
to see the proper image to run
Tag image if desired such as:
`docker tag imageIDHERE image-gallery:version1.0`
replacing imageIDHERE with your actual image id

### Run the image

`docker run -p 5050:5050 imageIDHERE`
You can also use the image tag name instead of image id
