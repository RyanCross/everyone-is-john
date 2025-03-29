import { Box, Container, Grid2, Typography } from "@mui/material";
import { Player, PlayerProps } from "./Player";

/**
 * The Voices represent the players of the game. This component displays
 *  status information for all players
 */

export function Voices() {

    let dummyPlayer = {
        name: "Jimbo",
        id: 1,
        startingWillpower: 7,
        bid: {
            bidId: 1,
            submittedPlayers: [0, 2, 3]
        }
    }

    return (
        <Container>
            <Typography variant="h4">The Voices</Typography>

            {/* if we want 3 players per row */}
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                <Grid2 size={3}>
                    <Player
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </Player>
                </Grid2>
                <Grid2 size={3}>
                    <Player
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </Player>
                </Grid2>
                <Grid2 size={3}>
                    <Player
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </Player>
                </Grid2>
                <Grid2 size={3}>
                    <Player
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </Player>
                </Grid2>
            </Grid2>
        </Container>
    )


}