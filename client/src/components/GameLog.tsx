import { Box, Container, List, ListItem, Paper } from "@mui/material";


export function GameLog() {
    return (
        // find the appropriate element to contain text, lets say unordered list

        <Container>
            <Box>{"Game Log"}</Box>
            <List title="GameLog" sx={[{
                overflowY: "scroll",
                maxHeight: "200px",
                minWidth: "400px"
            }]}>
                <ListItem>{"John Rolled a 1"}</ListItem>
                <ListItem>{"John Rolled a 1"}</ListItem>
                <ListItem>{"John Rolled a 1"}</ListItem>
                <ListItem>{"John Rolled a 1"}</ListItem>
                <ListItem>{"John Rolled a 1"}</ListItem>
                <ListItem>{"John Rolled a 1"}</ListItem>
                <ListItem>{"John Rolled a 1"}</ListItem>
            </List>

        </Container>

    )
}