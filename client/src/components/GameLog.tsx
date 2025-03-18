import { List, ListItem, Paper } from "@mui/material";


export function GameLog() {
    return (
        // find the appropriate element to contain text, lets say unordered list
        <div>
            <div>{"Game Log"}</div>
            <Paper elevation={0}>
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
            </Paper>
        </div>
    )
}