Due to lack of time this application was not deployed.
But since expo was used it can still easily be tested using simulators as well as real device.

There are quite a few steps that need to be followed.

-> first install Node version 10.15.0 
-> Then run the command 'npm i ngrok -g'
-> After that run the command 'npm i --global expo-cli'
-> open the terminal and cd into the meal-doctor folder
-> Run the command 'npm start' (this will start the node server, keep it running)
-> Open a new tab in the terminal and run the command 'ngrok http 5000'
-> You will see a forwading link that ends in '...ngrok.io'. Copy the link (keep it running)
-> Now open the meal-doctor folder in any code editor, like VS code or Atom.
-> Open the file /client/src/constants/ServerURL.js
-> change devServer to the new forwading link.
-> Open a new terminal cd into the meal-doctor/client directory and run 'npm start' (you will be to see a QR code, keep it running as well)
-> Now to test the app in a real phone, download the expo client app from the App Store. -> Scan the QR code from the terminal.
-> The app should be loaded onto the phone and can be tested.
-> if you have Xcode installed, just pressing 'i' will open the IOS simulator.
-> pressing 'a' will open the Android Simulator, if Android Studio emulator is setup
