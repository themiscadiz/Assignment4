<!-- Every README should start with an H1 -->
# API_Assignment4 - Creating My Own API 
<!-- A one sentence description of the project or assignment -->
This is a project is the process to understant how to create my own API for a simple voting system. The person would click over their favorite animal, and after clicked over the image, the website would show how many clicks that animal recieve before. 

In this website, I am only putting only one option of voting for a specific cat. The idea is to have a voting system were the person choose an animal and then were tell them how many votes has each animal.

![img1](https://github.com/themiscadiz/Assignment4/blob/master/Images/16.png)

<!-- It is good practice to add an about or summary -->

<!-- It is essential to describe how to set up your project -->
## Setup
To setup the project you need access to a computer and the internet. 
To be able to see the website you can go to [Glitch Website](https://glitch.com/edit/#!/themiscadiz-assignment4?path=app.js:12:0)

<!-- Any knowledge or tools you will need before hand -->
## Prerequisites

The following prerequisites are necessary:

A text editor - like VS Code
Terminal or Command line.

<!-- any installation needs should be defined -->
## Installation
You need the express, path, fs library  from npm

<!-- Notes about the deployment -->
## Deployment

To locally host your website (in case of Mac):

1. Download the Code to your computer.
2. Open the Terminal
3. Type cd (don’t forget the space)
4. In Finder, navigate to the folder and Drag and drop into the Terminal.
5. Type <pre><code>npm start</code>
6. Server should launch, and you should see the correct ip address to navigate to. Something like this: **localhost:3000**  

**Notes:** There a other ways to open a localhost. This is just my prefered method, because it automatically refreshes the website.

## Built with
* [Nodejs](https://nodejs.org/en/)
* [VS Code](https://code.visualstudio.com/)
* [Github](https://github.com)
* [Glitch](https://glitch.com/)

***
***
***

<!-- For your assignments you might consider  -->
# Notes & Process
For this assigment I start watching a lot of videos and reading the class material to trying to understant what are the concepts that we were trying to understant and use for this week. Although that I was able to in a very basic way create an API and save the information into a json file, just to make it works was really challenging. This assignment had a lot of new concepts of programming for the web, a lot new use in the terminal, what create a confusing path around the assignment.

The original goal was to create a voting system, where a person can vote for its favorite animal. After vote the person can see what are the votes that each animal has.

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/10.png?raw=true)

While I was undestanding and struggle through the process, I simplified the concept into just to vote for one animal (in this case the cat) and see how many vote has the cat accumulate.

In this way I was apble to concentrate into achieve to request the data from the JSON file, update the JSON File and update the information in the website.

### Understanding Node.js
I started this assignment following the Fondations Guide from the class. I was able to  understant how to interact with node through the terminal.

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/1.png?raw=true)

In my first attempt on this last week I was planning and starting to use the Horoscope.js npm. But while I was diving into the material, I noticed that i wasn't going to be able to explore the fundamentals concepts of this assignment. 

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/2.png?raw=true)

However when I tried to started the assignment I needed help understanding how we interact with node js, it is not the typical way as js.... for me I get it more like a invisible, backend and that was I was only able to see it running in the terminal. Not as a console log on the browser.

### Designing the website
After I finally get the concept of the assignment. I started to design my website and decided to started form the frontend to the backend. In this process I sketched the design. Just at the end of the process I eliminate dthe other animal to vote to have a more design that complemet what I was able to make ot work.

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/1.gif?raw=true)

### Creating an API
For creating the API was the most consumming part of the assignment.Even having the class material, I was hard to me to understand how to applyed it into my own goal. The challenges starting for even understanding were node runs and what libraries I needed to get the data.
![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/4.png?raw=true)

Another challenge was to access the frontend files. I tried to use <code> const indexLocation = path.join(__dirname + "/frontend/")</code> but didn't work as espected. I had to put the css and js code inside the html file to be readable.

From the beggining I was confused how to get the path to read the api numbers that I was putting from the server. For this I follow a Express website example using .Router()

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/6.png?raw=true)

However afeterr a lot of attempls a was able to listenen and see through the terminal the increasing value from the api/cat.

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/9.png?raw=true)


### Accesing the API

After I was able to see the information updating in the server from the app.js, I started to tried to acces this information from the API (as last week assignment). Although I had difficulties I felt more conftoble for the similarities from last week assignment. 

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/14.png?raw=true)

I was able to see the information updating in the website even when I refresh the site. However, when I close the server, the counter of votes started from 0, because I was not storing the information anywhere. Is becaues of this the importance of having a json database, to be able to store the information. 

### JSON database

I created the json file (votes.json) to put the votes information and I prepopulated with a json object.In app.js I created a function with fs.library to acces the json file. In that way I was able to read the json file and write to it using those functions.
in the funtion getVotes() I read the json file and return the votes value.

In function updateVotes() I updated the cat variable, I created a new json object with the updated cat variable. And then I over write the object in the json file.

To updated the cat variable with the last value of votes from the json file.
<code> let cat = getVotes();</code>

**In this gif I recorded when the json file is been updated by the backend when I clicked the image. Even if I refresh the website and the server, the counter of votes is going to show the quantity of vote accumulated.** Simple but super PROUD if this.

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/4.gif?raw=true)

To see in more resolution heres is a [link to a video](https://github.com/themiscadiz/Assignment4/blob/master/Images/4.mov) 


### Deploying to Glitch
I wasn't able to deploy the assigment through Glitch. I tried change the http to https (and vice versa) and make sure that I was using <code> start: node app.js</code>, but didn't work. However when when I still have the server on, I see changes in the json file when I pressed through the Glitch site. I open the terminal on Glitch, but wasnt able to understand the errors that I recieved.

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/15.png?raw=true)

![img](https://github.com/themiscadiz/Assignment4/blob/master/Images/12.png?raw=true)




## Challenges, Struggles & Questions
1. Understanding the nature of backend, node, and how to work with it.
2. How to request the information of different votes from different animals? Do I have to used and asynf function in the <script> for each animal?
3. Deployment of website in Glitch
 

<!-- References for resources and inspiration -->
## References
[Express](https://expressjs.com/)

[Express - Router](https://expressjs.com/en/4x/api.html#router)

[NPM](https://www.npmjs.com/)

Cat picture from [Unspash](https://unsplash.com/s/photos/cat)

Class Material

## Authors
* [Themis Garcia](https://github.com/themiscadiz) -- NYU ITP student

 
