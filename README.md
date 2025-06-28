# Firebase Cloud Functions App

This project is a Firebase Cloud Functions application built with Node.js and TypeScript, utilizing the modular SDK for Firebase. It serves as a backend solution for serverless functions that can be triggered by HTTP requests or Firebase events.

## Project Structure

```
firebase-functions-app
├── functions
│   ├── src
│   │   └── index.ts          # Main entry point for Firebase Cloud Functions
│   ├── package.json           # NPM configuration and dependencies
│   ├── tsconfig.json          # TypeScript configuration
│   └── README.md              # Documentation for Firebase functions
├── .firebaserc                # Firebase project configuration
├── firebase.json              # Firebase Hosting and Functions configuration
└── README.md                  # General project documentation
```

## Setup Instructions

1. **Install Firebase CLI**: Make sure you have the Firebase CLI installed. You can install it globally using npm:

   ```
   npm install -g firebase-tools
   ```

2. **Initialize Firebase Project**: Navigate to your project directory and run the following command to initialize your Firebase project:

   ```
   firebase init
   ```

   Select the features you want to set up (e.g., Functions, Hosting) and follow the prompts.

3. **Install Dependencies**: Navigate to the `functions` directory and install the required dependencies:

   ```
   cd functions
   npm install
   ```

4. **Build the Functions**: Compile the TypeScript code to JavaScript:

   ```
   npm run build
   ```

5. **Deploy the Functions**: Deploy your functions to Firebase:

   ```
   firebase deploy --only functions
   ```

## Usage Examples

- To trigger an HTTP function, you can use tools like Postman or curl to send requests to the deployed function's URL.
- For Firebase event triggers, ensure that the appropriate events are set up in your Firebase project.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.