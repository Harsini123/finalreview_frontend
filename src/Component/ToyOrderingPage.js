import React, { useState } from 'react';
import './ToyOrderingPage.css';

function ToyOrderingPage() {
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [orderPlaced, setOrderPlaced] = useState(false); 

  const handleBookSelection = (bookId) => {
    if (selectedBooks.includes(bookId)) {
      setSelectedBooks(selectedBooks.filter((id) => id !== bookId));
    } else {
      setSelectedBooks([...selectedBooks, bookId]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({
      ...shippingInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    console.log('Selected Books:', selectedBooks);
    console.log('Shipping Info:', shippingInfo);
    setOrderPlaced(true); 
  };

  return (
    <div className="book-ordering-page">
      <h2>Book Ordering</h2>

    
      <div className="book-selection">
        
        <div>
          <input
            type="checkbox"
            id="book1"
            name="MAKERS AND TAKERS"
            checked={selectedBooks.includes('book1')}
            onChange={() => handleBookSelection('MAKERS AND TAKERS')}
          />
          <label htmlFor="book1">MAKERS AND TAKERS</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book2')}
            onChange={() => handleBookSelection('book2')}
          />
          <label htmlFor="book2">ZERO TO ONE</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book3')}
            onChange={() => handleBookSelection('book3')}
          />
          <label htmlFor="book2">THE RISE OF MAGICKS</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book4')}
            onChange={() => handleBookSelection('book4')}
          />
          <label htmlFor="book2">HOW TO BE SINGLE AND HAPPY</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book5')}
            onChange={() => handleBookSelection('book5')}
          />
          <label htmlFor="book2">THE LAST ONE</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book6')}
            onChange={() => handleBookSelection('book6')}
          />
          <label htmlFor="book2"> IN THE NIGHT OF MEMORY</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book7')}
            onChange={() => handleBookSelection('book7')}
          />
          <label htmlFor="book2">THE LUCKY ONE</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="book2"
            name="book2"
            checked={selectedBooks.includes('book8')}
            onChange={() => handleBookSelection('book8')}
          />
          <label htmlFor="book2">ONE BY ONE</label>
        </div>
       
      </div>

      <div className="shipping-info">
        <h3>Shipping Information</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={shippingInfo.address}
              onChange={handleInputChange}
              required
            />
          </div>


          <button type="submit">Place Order</button>
        </form>
      </div>

      {orderPlaced && (
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p>Selected Books: {selectedBooks.join(', ')}</p>
          <p>Shipping Information:</p>
          <p>Full Name: {shippingInfo.fullName}</p>
          <p>Address: {shippingInfo.address}</p>
        
        </div>
      )}
    </div>
  );
}

export default ToyOrderingPage;
