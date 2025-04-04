import { Box, List, ListItem, ListSubheader, Typography } from "@mui/material"

export function PlayerSheet() {
    return (
        <Box sx={{flex: 1}}>
            <Typography variant="h6">#Player</Typography>
            <List>
                <ListSubheader>Skills</ListSubheader>
                <ListItem>Flying planes</ListItem>
                <ListItem>Running Fast</ListItem>
            </List>
            <List>
                <ListSubheader>Obsessions</ListSubheader>
                <ListItem> Minecraft a billionaire </ListItem>
            </List>
        </Box>
    )

}