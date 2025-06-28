# Firebase Cloud Functions

This directory contains the source code and configuration for Firebase Cloud Functions using TypeScript and the modular SDK.

## Setup Instructions

1. **Install Dependencies**: Navigate to the `functions` directory and run the following command to install the necessary dependencies:

   ```
   npm install
   ```

2. **Build the Functions**: To compile the TypeScript code into JavaScript, run:

   ```
   npm run build
   ```

3. **Deploy the Functions**: Once the functions are built, you can deploy them to Firebase using:

   ```
   firebase deploy --only functions
   ```

## Usage Examples

- After deploying, you can trigger your functions via HTTP requests or Firebase events as defined in your `index.ts` file.

## Additional Information

For more details on Firebase Cloud Functions, refer to the [Firebase documentation](https://firebase.google.com/docs/functions).