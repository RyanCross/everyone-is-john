import { Container, Typography } from "@mui/material"
import { GmActionBar } from "./GmActionBar"

interface GameMasterSectionProps {
    gm: string
}

export function GameMasterSection(props: GameMasterSectionProps) {
    return (
        <Container component="section">
            <Typography variant="h1">Everyone Else: {props.gm}</Typography>
            <GmActionBar />
        </Container>
    )


}