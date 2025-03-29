import { Box, Card, Container, Divider, List, ListItem, Paper, Typography } from "@mui/material";
import { Roll } from "./Roll";
import theme from "../style/theme"


export function GameLog() {
    return (
        <Container>
            <Card>
                <Paper elevation={3}>
                    <Typography variant="h5" sx={{ml: 1}}>Game Log</Typography>
                </Paper>
                <List title="GameLog" sx={[{
                    overflowY: "scroll",
                    maxHeight: "200px",
                    minWidth: "400px",
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

        </Container>

    )
}