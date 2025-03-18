import Dice from 'react-dice-roll'

export function Roll() {
    return (
        <>
            <Dice onRoll={(value : number) => console.log(value)} />
        </>

    )

}