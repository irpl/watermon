# WaterMonitor Listener

1. Set the server to operate in the appropriate timezone

   Ubuntu/Debian:

   ```bash
   $ sudo dpkg-reconfigure tzdata
   # Select America
   # Select Jamaica
   ```

2. Clone the repository and install the depnedencies win `npm`.

   ```bash
   $ git clone https://github.com/irpl/watermon.git
   $ cd watermon
   $ npm i
   $ node app.js
   ```

3. The module attached to the water quality sensor should be configured to send data to the public IP address of the server that WaterMon is installed and port 3020.

   The poer that WaterMon listens on can be changed by setting the `WATERMON_LISTENER_PORT` environment variable.

<!-- TODO -->
<!-- Talk about using telegram channels an alert channel -->
<!--
login under your account at web version of Telegram : https://web.telegram.org

Find your channel. See to your url, it should be like https://web.telegram.org/#/im?p=c1055587116_11052224402541910257

Grab "1055587116" from it, and add "-100" as a prefix.
So your channel id will be "-1001055587116".
 -->
