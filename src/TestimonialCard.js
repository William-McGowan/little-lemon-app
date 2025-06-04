export default function TestimonialCard (props) {
    return (
        <div id="testimonial">
            <span id="stars">
                <img id="star" src="star.png" width="10" alt="star" />
                <img id="star" src="star.png" width="10" alt="star" />
                <img id="star" src="star.png" width="10" alt="star" />
                <img id="star" src="star.png" width="10" alt="star" />
                <img id="star" src="star.png" width="10" alt="star" />
            </span>
            <img id="userPhoto" src={"Customer" + props.cardNumber + ".jpg"} width="50" alt="Restaurant Customer" />
            <h3 id="name">{props.customerName}</h3>
            <p id="review">{props.review}</p>
        </div>
    )
}