# DevFest 2024
Standard Web App for DevFest's Events. <br>
Show some ❤️ and star the repo to support the project

![asd](/public/thumbnail.png)

## Getting Started
1. Fork the repo
1. Setup Environment
    - Install [Node.js (v20 or above)](https://nodejs.org/en/download/)
1. Install project dependencies: `npm install` 
1. Compiles and hot-reloads for development use `npm run dev`
1. Update JSON files from `/data` and `/public/` directory
1. Upload all the images related to Speakers, Team and Sponsors in `/public/speakers/` | `/public/team/` with their respective directory and try to upload the images in 1:1 aspect ratio
1. For the production: `npm run generate` and then one dir will be created for static hosting

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Deployment on Firebase
1. Install required tools for performing Firebase deployment
    - Install Firebase CLI: `npm i -g firebase-tools`
1. Login into Firebase CLI using the following command -  `firebase login`
1. Now type `firebase login` command in your Terminal/CMD/Powershell
1. Update the `Firebase Project ID` in `.firebasesrc` file. This value should match the project ID in your Project Settings of the Firebase project you created in the previous section.
1. Go to the Firebase Console Dashboard and Click on Hosting in the left navigation.
1. Click on Get Started
1. Click through all steps till you’re taken to the Hosting page in the console.
1. You’ll be provided with a ready domain with your project ID. It should look like - `<project-id>.web.app or <project-id>.firebaseapp.com`
1. Copy the sub-domain name of the URL provided. In this case, it will be the project ID. However, to be precise, you have to copy the part before .web.aap or .firebaseapp.com. This is your Site ID
1. Update `Firebase.json` file, set the site key to Site ID
    ```js
        {
            "hosting": {
                "site":"Your_Firebase_Hosting_id",
                "public": ".output/public",
                "rewrites": [ {
                    "source": "**",
                    "destination": "/index.html"
                } ],
                "ignore": [
                    "firebase.json",
                    "**/.*",
                    "**/node_modules/**"
                ]
            }
        }
    ```
1. In your terminal at the root directory of the project,  build and deploy using the following command     
    - `firebase deploy`

## Developed by
1. [Vrijraj Singh](https://vrijraj.xyz/)
2. [Shivam Singh](https://shivam.live/)
3. [Sandali Singh](https://sandali.xyz/)

## Technology Stack

* [VueJS](https://vuejs.org/)
* [Nuxt](https://nuxt.com/)
* [Firebase](https://firebase.google.com/)

## Contributing
Awesome! We would greatly appreciate it if you could contribute to all kinds. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

## LICENSE
Check out the developer [LICENSE](https://github.com/oss-labs/devfest-2024/blob/main/LICENSE)

## Facing Any Problem or need any Help?
Write us in the [issues](https://github.com/oss-labs/devfest-2024/issues) section. Our team will try to solve your issue within 10-12 hours.<be>
