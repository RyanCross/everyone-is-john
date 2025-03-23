import { Box, Grid2 } from "@mui/material";
import { PlayerColumn, PlayerColumnProps } from "./PlayerColumn";

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
        <Box component="div">
            <h1>The <i>Voices</i> </h1>
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid2 size={6}>
                    <PlayerColumn
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </PlayerColumn>
                </Grid2>
                <Grid2 size={6}>
                <PlayerColumn
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </PlayerColumn>
                </Grid2>
                <Grid2 size={6}>
                <PlayerColumn
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </PlayerColumn>
                </Grid2>
                <Grid2 size={6}>
                <PlayerColumn
                        name={dummyPlayer.name}
                        id={dummyPlayer.id}
                        startingWillpower={dummyPlayer.startingWillpower}
                        bid={dummyPlayer.bid}>
                    </PlayerColumn>
                </Grid2>
            </Grid2>
        </Box>
    )


}