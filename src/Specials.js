import SpecialsItem from './SpecialsItem.js';

export default function Specials () {
    const greekSaladDescr = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ";
    const bruschettaDescr = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ";
    const lemonDessertDescr = "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.";
    
    return (
        <section id="specials">
            <h2 id="specials-title">Specials</h2>
            <button id="view-menu">Online menu</button>
            <SpecialsItem className="special" itemName="Greek salad" itemPrice="12.99" itemDescr={greekSaladDescr} />
            <SpecialsItem className="special" itemName="Bruschetta" itemPrice="5.99" itemDescr={bruschettaDescr} />
            <SpecialsItem className="special" itemName="Lemon dessert" itemPrice="5.00" itemDescr={lemonDessertDescr} />
        </section>
    )
}