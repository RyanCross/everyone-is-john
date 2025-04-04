import { Container } from "@mui/material";
import { GameLog } from "./GameLog";
import { PlayerSheet } from "./PlayerSheet";

export function PlayInformationArea() {
    return (
        <Container sx={{display: "flex"}}>
            <GameLog></GameLog>
            <PlayerSheet></PlayerSheet>
        </Container>
    )
}