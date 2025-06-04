import TestimonialCard from './TestimonialCard.js';

export default function Testimonials () {
    return (
        <section id="testimonials">
            <h2>Testimonials</h2>
            <TestimonialCard cardNumber="1" customerName="Lance" review="Loved it!" />
            <TestimonialCard cardNumber="2" customerName="Tonya" review="Best mediterranean cafe in Chicago!" />
            <TestimonialCard cardNumber="3" customerName="Mark" review="Great food, great service, great ambiance." />
        </section>
    )
}