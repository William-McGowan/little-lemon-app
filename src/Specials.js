import SpecialsItem from './SpecialsItem.js';

export default function Specials () {
    return (
        <>
            <h3 id="Menu">Specials</h3>
            <button id="view-menu">Online menu</button>
            <SpecialsItem id="special-one" props="Greek-salad" />
            <SpecialsItem id="special-two" props="Bruschetta" />
            <SpecialsItem id="special-three" props="Lemon-dessert"/>
        </>
    )
}