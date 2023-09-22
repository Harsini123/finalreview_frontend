import React, { useState } from 'react';
import HomePage from './Component/HomePage';
import SignupPage from './Component/SignupPage';
import LoginPage from './Component/LoginPage';
import ContactPage from './Component/ContactPage';
import ToyManager from './Component/ToyManager';
import ToyOrderingPage from './Component/ToyOrderingPage';
function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Define your routes as an array of objects
  const routes = [
    { name: 'Home', component: <HomePage /> },
    { name: 'Signup', component: <SignupPage /> },
    { name: 'Login', component: <LoginPage /> },
    { name: 'Toy Ordering', component: <ToyOrderingPage /> },
    { name: 'Contact', component: <ContactPage /> },
    { name: 'Toy Manager', component: <ToyManager /> },
  ];

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    const route = routes.find((r) => r.name.toLowerCase() === currentPage.toLowerCase());
    return route ? route.component : <HomePage />;
  };

  return (
    <div id="">
      <header>
      <nav>
  {routes.map((route) => (
    <button
      key={route.name}
      onClick={() => navigateTo(route.name)}
      className="nav-button"
    >
      {route.name}
    </button>
  ))}
</nav>

      </header>
      {renderPage()}
    </div>
  );
}

export default App;
