import React from 'react';
import Testomonials from './Testomonials';

const infoData = [
    {
        name: "Jhankar Mahbub",
        review: "Excellent work",
        Image: "https://web.programming-hero.com/public/1604764974390.png"
    },
    {
        name: "Elon Mask",
        review: "Great job",
        Image: "https://static.dezeen.com/uploads/2021/06/elon-musk-architect_dezeen_1704_col_0.jpg"
    },
    {
        name: "Bill Gates",
        review: "Best site",
        Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-2Z51nBn8jrE56Q0AoCCEUnnqVySJWCBVoA&usqp=CAU"
    }
]
const Testomonial = () => {
    return (
        <section className="justify-content-center" >
            <div className="section-header center">
                <h2 className="text-primary">Testimonial</h2>
                <h3>What Our Patients Says </h3>
            </div>
            <div className="w-75 row" style={{ "margin-left": "160px" }}>
                {
                    infoData.map(info => <Testomonials info={info}></Testomonials>)
                }
            </div>
        </section>
    );
};

export default Testomonial;