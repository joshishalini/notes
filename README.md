# README

This is a Notes application which you can use to write, store and view your notes.

Requirements:

* Ruby version: 2.6.3	

* System dependencies:
	- MySQL
	- WebPacker
	- node.JS
	- Yarn

* Database creation and initialisation

`rake db:create`

`rake db:migrate`

* How to run the application

1. Clone this repository to your local machine: 
`git clone https://github.com/joshishalini/notes.git`
2. Install Ruby Gems:
`bundle install`
3. Install React Webpacker: 
`rails webpacker:install:react`
4. Start Rails server: 
`rails s`

* Future Plans
	- Ability to create user profiles and save private notes
	- Edit and delete functionality
	- Ability to share notes
	- Export all notes for safe-keeping
