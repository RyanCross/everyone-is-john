# Everyone Is John

A web app to play Everyone is John by Michael Sullivan with your friends.

## Local Development
* Start up client server: `cd client && npm run dev`
* Start up reverse proxy to serve frontend - `cloudflared tunnel --url http://localhost:5173`
* Copy the tunnel url. e.g. `https://suited-slip-orange-garlic.trycloudflare.com`  
* Add the tunnel url as your root mapping in the discord activity portal
* Ensure the allowedHosts property in client/vite.config.js contains the tunnel url
* Launch Activity through discord.


## Middleware
* `morgan` - for http request/response logging
* `express-validator` - to sanitize input, prevent XSS