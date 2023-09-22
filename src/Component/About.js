import React from 'react'

export default function
() {
  return (
    <div>
  

    <section className="why-choose-us">
      <h2>Why Choose Us</h2>
      <ul>
        <li>A vast collection of books across genres.</li>
        <li>Competitive prices and regular discounts.</li>
        <li>Easy and secure online shopping experience.</li>
        <li>Convenient payment options.</li>
      </ul>
    </section>

    <section className="customer-testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <p>"Great selection of books! I love this store."</p>
        <p className="customer-name">John Doe</p>
      </div>
      
      <div className="testimonial">
        <p>"Fantastic service and fast shipping!"</p>
        <p className="customer-name">Jane Smith</p>
      </div>
    </section>

    <section className="latest-news">
      <h2>Latest News</h2>
      {/* Display the latest blog posts or news articles */}
      <div className="news-article">
        <h3>Article Title 1</h3>
        <p>Summary of the article goes here.</p>
        <a href="/article1">Read more</a>
      </div>

      <div className="news-article">
        <h3>Article Title 2</h3>
        <p>Summary of the article goes here.</p>
        <a href="/article2">Read more</a>
      </div>
    </section>

    <section className="cta">
      <h2>Ready to Explore?</h2>
      <p>Sign up today and start your book journey with us.</p>
     
    </section>
    </div>
  )
}
