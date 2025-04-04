import { Box, Card, Container, Divider, List, ListItem, Paper, Typography } from "@mui/material";
import { Roll } from "./Roll";
import theme from "../style/theme"


export function GameLog() {
    return (
        <Box sx={{ flex: 2, mr: 2}}>
            <Card>
                <Paper elevation={3}>
                    <Typography variant="h5" sx={{ ml: 1 }}>Game Log</Typography>
                </Paper>
                <List title="GameLog" sx={[{
                    overflowY: "scroll",
                    minHeight: "200px",
                    maxHeight: "200px",
                    mt: .25
                }]}>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                    <ListItem>{"John Rolled a 1"}</ListItem>
                </List>

                <Divider sx={{ borderColor: theme.palette.primary.light }}></Divider>
                <Roll></Roll>
            </Card>
        </Box>

    )
}