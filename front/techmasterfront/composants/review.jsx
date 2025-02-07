// front/techmasterfront/composants/Review.jsx
import React from 'react';
import { Carousel } from 'react-bootstrap';


function Review() {
  const reviews = [
    {
      name: "Anna Smith",
      role: "Product Manager",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam sapiente molestiae numquam quas, voluptates omnis nulla ea odio quia similique corrupti magnam."
    },
    {
      name: "Maria Smantha",
      role: "Web Developer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
    },
    {
      name: "Lisa Cudrow",
      role: "Graphic Designer",
      image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp",
      text: "At vero eos et accusamus et iusto odio dignissimos qui blanditiis praesentium voluptatum."
    }
  ];

  return (
    <section className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded" style={{
      backgroundImage: "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp)"
    }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <Carousel>
            {reviews.map((review, index) => (
              <Carousel.Item key={index}>
                <div className="card">
                  <div className="card-body m-3">
                    <div className="row">
                      <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                        <img src={review.image} className="rounded-circle img-fluid shadow-1" alt={`${review.name}'s avatar`} width="200" height="200" />
                      </div>
                      <div className="col-lg-8">
                        <p className="text-muted fw-light mb-4">{review.text}</p>
                        <p className="fw-bold lead mb-2"><strong>{review.name}</strong></p>
                        <p className="fw-bold text-muted mb-0">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Review;