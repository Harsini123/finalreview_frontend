import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
    
      <header>
        <h1 id='name'>TOY</h1>
        <h2>THE ONLINE TOY STORE</h2>
      </header>
      
      <section className="banner">
        
        <h2>Discover Your Next Adventure</h2>
      </section>

      <section className="featured-books">
        <h2>Featured Books</h2>
        <div className="book-list">
         
          <div className="book-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBZAePzbOCRLfTKAq535fYYFCu4ftl0_lNA&usqp=CAU" alt="Book 2" />
            <h3>MAKERS AND TAKERS</h3>
            <p>Description of the book goes here.</p>
          </div>

          <div className="book-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ck7pNo4zIapbALsDt6zUCW0ZyVXjgYNINw&usqp=CAU" alt="Book 2" />
            <h3>ZERO TO ONE</h3>
            <p>Description of the book goes here.</p>
          </div>
          <div className="book-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIlrOsRQ9R_FioJC--ucnnsuXAnixSp7enNg&usqp=CAU" alt="Book 2" />
          <h3>THE RISE OF MAGICKS</h3>
          <p>Description of the book goes here.</p>
        </div>
        <div className="book-card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz47zT3sn94JW4l4lO_8gQDhZxcuz5pPwzdeym5OWXZIkTt_McMImL8tGGubl3ACstovk&usqp=CAU" alt="Book 2" />
        <h3>HOW TO BE SINGLE AND HAPPY</h3>
        <p>Description of the book goes here.</p>
      </div>
      <div className="book-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH6-wFq-kyhbccHbQyyL2RtGkJqmYNO4k3ahzCE746fd2Aw-B8bODJFlKWgVt6le9YEt8&usqp=CAU" alt="Book 2" />
      <h3>THE LAST ONE</h3>
      <p>Description of the book goes here.</p>
    </div>
    <div className="book-card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPWyt58i1BrVXS_h7T6Um_AuLw26TGeo10bg&usqp=CAU" alt="Book 2" />
    <h3>IN THE NIGHT OF MEMORY</h3>
    <p>Description of the book goes here.</p>
  </div>
  <div className="book-card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKMYtL9_AeBMGQgHpMYZjtPRHdImnk6Gb4FFtXPgcqtbv4v-chBKhK1h5U2HKw_IHdpK4&usqp=CAU" alt="Book 2" />
  <h3>THE LUCKY ONE</h3>
  <p>Description of the book goes here.</p>
  
</div>
<div className="book-card">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYrJLGAfZdcvDWYYdz6hxa-SLvGNFBQ4Fd9Q&usqp=CAU" alt="Book 2" />
  <h3>ONE BY ONE</h3>
  <p>Description of the book goes here.</p>
  
</div>

        </div>
      </section>

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
          <p>"Great selection of TOYS! I love this store."</p>
          <p className="customer-name">John Doe</p>
        </div>
        
        <div className="testimonial">
          <p>"Fantastic service and fast shipping!"</p>
          <p className="customer-name">Jane Smith</p>
        </div>
      </section>

      <section className="latest-news">
        <h2>Latest News</h2>
        <div className="news-article">
          <h3>WORLD WITH NEW ASPECTS</h3>
          <p>Summary of the toys goes here.</p>
          <a href="/article1">Read more</a>
        </div>

        <div className="news-article">
          <h3>EVERYTHING GOES WRONG WHEN YOU ARE RIGHT</h3>
          <p>Summary of the article goes here.</p>
          <a href="/article2"></a>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to Explore?</h2>
        <p>Sign up today and start your book journey with us.</p>
       
      </section>
    </div>
  );
}

export default HomePage;
