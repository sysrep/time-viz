# Install UI Development Environment 
* install node.js <https://nodejs.org/en/>
* isntall reactjs app creater `npm install -g create-react-app`
* `cd` to your project folder
* `create-react-app .`

# Configure DiMe for Development
* `cd ~./dime`
* `mkdir config`
* `touch application-local.properties`
* `open application-local.properties` and add a line `dime.corsAllowOrigin=http://localhost:3000,chrome-extension://[your-chrome-id]` (find your chrome extension id in <chrome://extensions/>. There should be a ID for a dime-webextension

[take a break for 10 mins]

# Start!
* I prefer the Atom editor <https://atom.io/>
* cd to your project folder
* `yarnpkg start`
* open <http://localhost:3000> in Chrome. You should see a "Welcome to React" screen.
* open your project folder in Atom
* try edit `src/App.js` (e.g. replace the string "welcome to react" to something else) to see the changes
* try & read error message
