# Welcome to StockTrack

## Introduction:

        Casual stock trading has seen an increase in recent years as the means to do so becomes more and more 
    easily accessible through mobile app’s like Robinhood or Webull. This growth has exploded in recent months 
    in the American markets due to the stimulus check received during the COVID-19 crisis. Many young 
    entrepreneurs invested part of or the entirety of their check into the stock market in hopes of growing 
    their “free” money into even more liquid capital. 
  
        However these new traders are very frivolous with their money and trading strategies, especially when it 
    comes to stock options as they have a higher potential profit overall but come with greater risk, in most 
    cases, and as such are appealing to the “high risk, high reward” mentality of many new traders. In order to 
    better facilitate both these traders potential for profit as well as their knowledge on said profit, my 
    mobile application aims to be a reliable calculator meant to show their expected profit and risk based on 
    certain formulas and statistics and also notify the users of their personally-chosen stock’s whenever a 
    shift in price occurs or are notified upon the stock reaching a certain price they set. 


## Functional Requirments:			
![Image 1 of Functional Requirments](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/functional%202.PNG?raw=true "Functional Requirments 1")

![Image 2 of Functional Requirments](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/functional%203.PNG?raw=true "Functional Requirments 2")

## Non-Functional Requirments:			
![Image of NonFunctional Requirments](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/nonfunctional%201.PNG?raw=true "Non-Functional Requirments")


## Technologies Used:	
        
        Finnhub API     1.12.3  An API used in this project to pull relevant data from a 3rd party upon User’s request
        Android Studio  4.1     Android Mobile App Development Environment for testing purposes
        React Native    0.64    Open-source mobile application framework used for designing and building the app’s pages. 
        Babel           7.11.0  Open-source JavaScript transcompiler; mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript for older versions.
        Expo SDK        40      A command line app used as a testing interface between developer and Expo tools used for deployment and test case execution.
        
### DevOps Principles Implemented:
        End-to-End Responsibility
        Majority of Processes are Fully Automated
        Past Failures have been logged and categorized for future troubleshooting and solution development. 

### Explanation of New Technologies:
        React Native - chosen for it's felxibility in being able to deploy to both Android and iOS with minimal effort as well as having many community-developed API's and microservices that have been leveraged for greater effiency and a better user experience.
        Android Studio - used for its built-in Android Emulator for testing purposes.
        Finnhub API - chosen over it's simillarly-skilled competitors for it's free-to-use policy as well as it's remarkable accuracy, uptime, and the large amount of calls it allows it's users to make within a minute. 
        
        
## Technical Design: 
        The basic design of the application is meant to be simple, sleek, and easy to use for both new and 
    experienced stock and options traders. With this in mind the below UI designs were drawn up within the first 
    few weeks of planning and have been fully implemented since then. The original idea was to use a database 
    cluster in MongoDB to keep track of user records, but complications arose when attempting to store and 
    retrieve the proper data, so it was scrapped in favor of a client-side storage system using Redux and 
    asyncronous calls that save the user's information within a local SHA-256-encrypted file. The app was 
    designed however in such a way that any user information stolen from a user's device is essentially worthless 
    due to the free price tag of the app and no communicaiton from the app itself to any third-party other then 
    then FinnHub API, making it remarkable secure. 
    
### Sitemap: 
    A Sitemap showing the simplicity of the applications design:

![Image of Sitemap](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/sitemap.PNG?raw=true "Sitemap")

### Flowchart:
        The flow of possible events, as shown below, is smooth and simplistic for a better user experience: 

![Image of Flowchart](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/flowchart.PNG?raw=true "Flowchart")

### Code for "Custom Alert Component":
        This "Custom Alert Component" was a specific design choice that allowed the user to enter in a stock's 
        information from a pop-up alert; something the defauly packages of React Native does not contain. This 
        code is for the unique and self-built component used throughout the application: 

![Image of CustomALertComponent Code](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/customalert%20code.PNG?raw=true "CustomAlertComponent Code")
 
 ### Logical Solution Diagram
![Image of Logical Diagram](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/logical%20solution%20diagram.png?raw=true "Logical Diagram")

 ### Physical Solution Diagram
![Image of Physical Diagram](https://github.com/JonParrish/stockTrack-Capstone/blob/secondary/Images%20for%20GIT%20Pages/physical%20solution.png?raw=true Physical Diagram")
      
      
## Risks and Challenges:

### Risks:
1. Time constraints - limited amount of time to complete the application.
2. New Technologies - Utilizing unfamiliar technologies can lead to struggles in the development cycle and affect the ability to meet deadlines.
3. Unfamiliar Enviornment - This was the first time I'd made a mobile application,

### Risk Managment:
1. Proper planning of sprints and product backlogs according to Agile Scrum development plan developed during the planning stages.
2. Dedicated time's for documentation studying and usage of other peers who are more familiar with these newwer technologies. 
3. Multiple "test" applications were created as both proof-of-concepts and prototype's using different builds. 

### Challenges: 
        Upon switching from a Cloud-based database to a local and encrypted alternative, there was an unforseen 
        struggle of the main local file saving tool for React Native being unsupported in recent versions with 
        no viable alternatives. 
        This was solved however by using community-made API's to supplement the former 
        built-in one in addition to used Redux to open and save files. 
        
## Outstanding Issues/Bugs: 
        Currently there are no known issues or bugs that would require documentation or attention brought to 
        them, to the best of the developers knowledge. 

