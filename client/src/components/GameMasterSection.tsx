import { Container, Typography } from "@mui/material"
import { GmActionBar } from "./GmActionBar"

interface GameMasterSectionProps {
    gmId: string
    gmName: string
}

export function GameMasterSection(props: GameMasterSectionProps) {
    return (
        <Container component="section">
            <Typography variant="h4">Everyone Else: {props.gmName}</Typography>
            <GmActionBar />
        </Container>
    )
}