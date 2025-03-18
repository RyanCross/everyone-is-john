import { Box } from "@mui/material"
import { GmActionBar } from "./GmActionBar"

interface GameMasterSectionProps {
    gm: string
}

export function GameMasterSection(props: GameMasterSectionProps) {
    return (
        <Box component="section">
            <h1>Everyone Else: {props.gm}</h1>
            <GmActionBar />
        </Box>
    )


}