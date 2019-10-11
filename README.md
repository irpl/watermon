# WaterMonitor Listener

## Setup

1. Set server timezone to operate in Jamaica time
   Ubuntu/Debian:

   ```bash
   sudo dpkg-reconfigure tzdata
   # Select America
   # Select Jamaica
   ```

# WaterMonitor Alert Bot

## What it do

<!-- TODO Finish writing this -->

## Initialisation

The application requires that two environment variables be set. They are `WATERMON_BOT_ADMIN_CHAT_ID` and `WATERMON_BOT_TOKEN`.

1. The bot's API token can be retrieved from the bot's owner. This should be set as the `WATERMON_BOT_TOKEN` environment variable.

2. Use the `/admin` command to send the Telegram chatID to the application, it should be used to get the value for `WATERMON_BOT_ADMIN_CHAT_ID`. The chatID will be printed in the application's stdout stream.

   This chatID is to be set as the `WATERMON_BOT_ADMIN_CHAT_ID` environment variable.

   The application's designated admin will receive notifications, via Telegram, of the chatIDs of groups that should receive alerts from Grafana.

   Grafana alerts are configured at `http://<grafana_url>/alerting/notifications`.

## Usage

Once this application is deployed, it may be accessed by interacting with the bot, on telegram, found at http://t.me/watermon_alert_bot.
