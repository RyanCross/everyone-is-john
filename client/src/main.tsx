import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import { DiscordSDK, Events, Types } from '@discord/embedded-app-sdk'

// Will eventually store the authenticated user's access_token
let authenticatedUser: { access_token: string; user: { username: string; discriminator: string; id: string; public_flags: number; avatar?: string | null | undefined; global_name?: string | null | undefined }; scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "guilds.channels.read" | "gdm.join" | "bot" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.permissions.update" | "applications.commands.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "relationships.write" | "voice" | "dm_channels.read" | "role_connections.write" | "presences.read" | "presences.write" | "openid" | "dm_channels.messages.read" | "dm_channels.messages.write" | "gateway.connect" | "account.global_name.update" | "payment_sources.country_code" | "sdk.social_layer")[]; expires: string; application: { id: string; description: string; name: string; icon?: string | null | undefined; rpc_origins?: string[] | undefined } } | null;

const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
const instanceId = discordSdk.instanceId

async function setupDiscordSdk() {
  await discordSdk.ready();
  console.log("Discord SDK is ready");

  // Authorize with Discord Client
  const { code } = await discordSdk.commands.authorize({
    client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
    response_type: "code",
    state: "",
    prompt: "none",
    scope: [
      "identify",
      "guilds",
      "applications.commands"
    ],
  });

  // Retrieve an access_token from your activity's server
  // Note: We need to prefix our backend `/api/token` route with `/.proxy` to stay compliant with the CSP.
  // Read more about constructing a full URL and using external resources at
  // https://discord.com/developers/docs/activities/development-guides#construct-a-full-url
  const response = await fetch("/.proxy/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code,
    }),
  });
  const { access_token } = await response.json();

  // Authenticate with Discord client (using the access_token)
  authenticatedUser = await discordSdk.commands.authenticate({
    access_token,
  });

  if (authenticatedUser == null) {
    throw new Error("Authenticate command failed");
  }
}

setupDiscordSdk().then(() => {
  console.log("Discord SDK is authenticated");
  // We can now make API calls within the scopes we requested in setupDiscordSDK()
  // Note: the access_token returned is a sensitive secret and should be treated as such
});
// Subscribe
function updateParticipants(participants: Types.GetActivityInstanceConnectedParticipantsResponse) {
  // get the game state again
}
discordSdk.subscribe(Events.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE, updateParticipants);

//whats next, we've got our user

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </StrictMode>,
)
