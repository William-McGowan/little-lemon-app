export default function SpecialsItem (props) {
    return (
        <article className="specialsCard">
            <img id="special_photo" width="265" src={props.itemName + " small.jpg"} alt={props.itemName} />
            <h2 id="special-name">{props.itemName}</h2>
            <h3 id="special-price">{props.itemPrice}</h3>
            <p id="special-description">{props.itemDescr}</p>
            <h4 id="order">Order Online</h4>
            <img id="delivery-icon" width="17" src="Delivery-icon.jpg" alt="Bike icon" />
        </article>
    )
}