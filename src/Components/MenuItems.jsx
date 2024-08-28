import React, { useState, useEffect, useRef } from "react";

const items = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

const MenuItems = ({ onMenuItemClick }) => {
  const [activeItem, setActiveItem] = useState(items[0]); // Set the first item as active by default
  const clickedRef = useRef(false); // Track if a nav item was clicked

  useEffect(() => {
    // Reset scroll position to top on load
    window.scrollTo(0, 0);

    const handleScroll = () => {
      if (clickedRef.current) return; // Skip scroll handling if a nav item was clicked

      let currentSection = '';
      items.forEach((item) => {
        const section = document.getElementById(item);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            currentSection = item;
          }
        }
      });

      if (currentSection) {
        setActiveItem(currentSection);
      } else {
        setActiveItem(items[0]); // Default to first item if no section matches
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener('scroll', debouncedHandleScroll);
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
    };
  }, []);

  const handleClick = (item) => {
    setActiveItem(item);
    clickedRef.current = true; // Mark that a nav item was clicked

    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });

      // Reset the clickedRef after scrolling to allow scroll handling again
      setTimeout(() => {
        clickedRef.current = false;
      }, 600); // Slightly longer timeout to ensure smooth scrolling completes
    }
    if (onMenuItemClick) {
      onMenuItemClick(); // Close the mobile navigation drawer
    }
  };

  // Debounce function to reduce the frequency of the scroll event handler
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  return (
    <>
      {items.map((item) => (
        <li
          className={`nav-item ${activeItem === item ? 'active' : ''}`}
          key={item}
        >
          <a
            className='nav-link'
            href={`#${item}`}
            style={{ color: 'var(--primary-light-color)' }}
            onClick={() => handleClick(item)}
          >
            {item}
          </a>
        </li>
      ))}
    </>
  );
};

export default MenuItems;
