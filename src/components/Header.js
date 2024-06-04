import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import Order from './Order';

const Header = (props) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [totalSum, setTotalSum] = useState(0);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        setIsNavOpen(!isMobile);
    }, []);

    useEffect(() => {
        const sum = props.orders.reduce((total, order) => {
            return total + parseFloat(order.price) * order.quantity;
        }, 0);
        setTotalSum(sum);
    }, [props.orders]);

    return (
        <header>
            <div className="header-content">
                <img className='new-logo' src="./img/PROSWISSCAR_logo-red-h.png" />
                <ul className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
                    {isNavOpen && (
                        <>
                            <li><a href="#about-section">Про нас</a></li>
                            <li><a href="#about-section">Наші дані</a></li>
                            <li><a href="#contact-section">Контакти</a></li>
                        </>
                    )}
                </ul>
                {isNavOpen ? (
                    <FaTimes onClick={toggleNav} className='burger-icon close-icon' />
                ) : (
                    <FaBars onClick={toggleNav} className='burger-icon' />
                )}
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (
                    <div className='shop-cart'>
                        {props.orders.length > 0 ? (
                            <>
                                {props.orders.map(order => (
                                    <Order key={order.id} item={order} onDelete={props.onDelete} />
                                ))}
                                <p className='summa'>Сума: {new Intl.NumberFormat().format(totalSum)}₴ <span className='summa-span' >(для замовлення товару залиште форму знизу)</span></p>
                            </>
                        ) : (
                            <div className='empty'>
                                <h2>У кошику порожньо!</h2>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}

export default Header;

