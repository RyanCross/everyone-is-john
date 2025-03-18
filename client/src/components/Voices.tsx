import { Box, Grid2 } from "@mui/material";

/**
 * The Voices represent the players of the game. This component displays
 *  status information for all players
 */
export function Voices() {
    return (
        <Box component="div">
            <h1>The <i>Voices</i> </h1>
            <Grid2 container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid2 size={6}>
                    <div>1</div>
                </Grid2>
                <Grid2 size={6}>
                    <div>2</div>
                </Grid2>
                <Grid2 size={6}>
                    <div>3</div>
                </Grid2>
                <Grid2 size={6}>
                    <div>4</div>
                </Grid2>
            </Grid2>
        </Box>
    )


}