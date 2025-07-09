# Discord Bot for Pella.app Hosting

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Create a `.env` file:**
   - Add your Discord bot token:
     ```
     BOT_TOKEN=your-bot-token-here
     ```

## Local Development

- Start the bot locally:
  ```sh
  npm start
  ```
- The bot will log in and respond to `!ping` in any server it is invited to.

## Deployment on Pella.app

1. **Push your code to GitHub** (recommended) or prepare a ZIP (excluding `node_modules`).
2. **On Pella.app:**
   - Create a new Discord bot project.
   - Set the `BOT_TOKEN` environment variable in the dashboard.
   - Deploy your code via GitHub or file upload.
   - Start your bot from the Pella.app control panel.
   - Monitor logs for output and errors.

## Notes
- Never commit your `.env` file or bot token to version control.
- For more commands and features, split code into separate files as your bot grows. 