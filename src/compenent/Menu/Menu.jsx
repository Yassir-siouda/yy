import React, { useState } from 'react';
import './Menu.css';
import logo from '../images/InvoicePro.png'

import {
  FaRegChartBar,
  FaUser,
  FaBars // Assuming you have this icon for the hamburger menu
} from 'react-icons/fa';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      {/* Hamburger menu button */}
      
      <button className="hamburger-menu" onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" /> 
        </div>
        <nav className="navigation">
          <ul className="nav-links">
            <li><a href="/facture" className="nav-link active"><FaRegChartBar /> Facture</a></li>
            <li><a href="/facture-affichage" className="nav-link"><FaRegChartBar /> Affichage Facture</a></li>
            <li><a href="/devis" className="nav-link"><FaRegChartBar /> Devis</a></li>
            <li><a href="/devis-affichage" className="nav-link"><FaRegChartBar /> Affichage Devis</a></li>
            <li><a href="/clients" className="nav-link"><FaRegChartBar /> Clients</a></li>
           
          </ul>
        </nav>
        <div className="sidebar-footer">
          <a href="/profile/:userId" className="footer-link"><FaUser /> Profile</a>
       
        </div>
      </aside>
    
      {/* Main content */}
      <div className="content">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default App;
