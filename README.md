# AllergiX
## A helping hand to detect potential food allergens
### Made for HackKU24
---

AllergiX is an application that makes use of web-scraping and AI image recognition to detect possible allergens in food.
To use it, you can either search a food item by text through the search box, or upload an image for AI detection.
AllergiX will attempt to detect possible allergens in your food by web-scraping recipe websites for common allergens, and AI image recognition will guess what allergens are present simply by looking at your food.

Currently, AllergiX supports 3 of the most common allergens: 
1. Gluten
2. Dairy
3. Shellfish

[AllergiX is no longer hosted on HeroKu](https://allergix-107f0744c218.herokuapp.com/)

## Local Setup Instructions
**### 1. Clone the Repository**

Clone this git repository to your local file system from Github or download the zip of it and extract it 

**### 2. Install Node and NPM**

You need [NPM]([https://www.npmjs.com/](https://www.npmjs.com/)), a package manager for [Node]([https://nodejs.org/en](https://nodejs.org/en)), to install the necessary dependencies of the project.

See [NPM's official installation guide]([https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)) for everything needed.

Using a node version manager such as [NVM]([https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm)) (Included with linked guide) is strongly recommended. Use the latest version of node and npm for the best results.

**### 3. Install NPM Dependencies**

This project has several dependencies, such as [Vite]([https://vitejs.dev/](https://vitejs.dev/)) (build tool) and [React]([https://react.dev/](https://react.dev/)) (UI framework). Use the command `npm ci` to install the dependencies. We recommend running this command in the outermost directory **as well as** within the "client" and "server" subdirectories.

**### 4. Add API keys**

This project relies on two API's for it to function: Google Cloud API and HuggingFace API. You can get these keys by setting up a free account at each of their sites: 
- https://console.cloud.google.com/ > sign in > APIs & Services > Credentials > Create new API key. you can then click "show key" or "copy key".
- https://huggingface.co > sign in > profile settings > access tokens > click "New Token". once the token is created, you can view it or copy it.

Once you have these two API keys, put them in the "GoogleCloud_API_KEY.json" and "HuggingFace_API_KEY.json" files within the client folder (the huggingface file is currently in the outer directory so you'll want to move that to the client one and then put the key in it)

**### 5. Run Development Mode**

Once you have the repository cloned, and you have used the command `npm ci`, you are ready for development. From this point forward, you only need one command to launch the application and begin development each time you develop.

Within the "client" directory, use the command `npm run dev` to run the application in development mode.\

Open [[http://localhost:3000](http://localhost:3000)]([http://localhost:3000](http://localhost:3000)) to view the application in your web browser.\

The page will reload when you make changes.\

You may also see any errors in the console.
