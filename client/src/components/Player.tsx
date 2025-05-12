import { Avatar, Badge, Box, Button, Card, CardActionArea, CardContent, Divider, Typography } from "@mui/material"
import svg from "../assets/react.svg"
import crownSvg from "../assets/crown.svg"
import { useState } from "react"
import { Bid } from "../App"

export interface PlayerProps {
    name: string
    id: number
    startingWillpower: number
    bid: Bid | null
}

export function Player(props: PlayerProps) {

    let [willpower, setWillpower] = useState(props.startingWillpower)
    let [bidAmount, setBidAmount] = useState(0)

    function handlePlus(bidAmount: number) {
        if (bidAmount < willpower) {
            setBidAmount(bidAmount + 1)
        }
    }

    function handleMinus(bidAmount: number) {
        if (bidAmount > 0) {
            setBidAmount(bidAmount - 1)
        }

    }

    function handleSubmitBid(bidAmount: number) {
        // if bidAmount > willpower, cannot submit bid
        // what show when can't submit bid.
    }

    /** 
     * Card action area can put a specific players sheet into focus for the GM
     * Bid stuff could display above if needed
     * 
     * Avatar size dependent on breakpoints
     */

    return (
        <Card>
            {/* if there is an open bid for control, display the bid action section */}
            {props.bid ? <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 1 }}>
                <Button size="large">Bid</Button>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <Button onClick={() => { handleMinus(bidAmount) }}>-</Button>
                    <Typography sx={{ mx: 2 }} variant="h3">{bidAmount}</Typography>
                    <Button onClick={() => { handlePlus(bidAmount) }}>+</Button>
                </Box>
                <Divider orientation="horizontal" flexItem></Divider>
            </Box> : <></>}


            <CardActionArea>
                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Badge badgeContent={<img src={crownSvg} width={48} height={48}></img>}>
                        <Avatar sx={{ width: "128px", height: "128px", border: "5px dotted" }} src={svg}>
                        </Avatar>
                    </Badge>
                    <Typography variant="subtitle1">#Name</Typography>
                    <Typography>{`Willpower: ${willpower}`}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>

    )
}