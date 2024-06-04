import React, { useState, useEffect } from 'react';

const ContactForm = ({ orders }) => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
    orderDetails: '',
    totalSum: '0.00',
  });

  useEffect(() => {
    const orderDetails = orders.map(order => `${order.title} - ${order.price} UAH (x${order.quantity})`).join('\n');
    const totalSum = orders.reduce((sum, order) => sum + parseFloat(order.price) * order.quantity, 0).toFixed(2);
    setFormData(prevFormData => ({ ...prevFormData, orderDetails, totalSum }));
  }, [orders]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://proswisscar-0bc72b04bfe9.herokuapp.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Повідомлення успішно відправлено');
        alert('Повідомлення успішно відправлено');
      } else {
        console.error('Помилка при відправці повідомлення');
        alert('Помилка при відправці повідомлення');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Помилка при відправці повідомлення');
    }
  };

  return (
    <section className="contact-section" id="contact-section">
      <h2>Форма для замовлення</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ім'я *:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="number">Телефон *:</label>
          <input
            type="tel"
            id="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Коментар:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="orderDetails">Замовлені товари:</label>
          <textarea
            id="orderDetails"
            name="orderDetails"
            value={formData.orderDetails}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="totalSum">Загальна сума:</label>
          <input
            type="text"
            id="totalSum"
            name="totalSum"
            value={`${formData.totalSum} UAH`}
            readOnly
          />
        </div>
        <div className="button-container">
          <button type="submit">Відправити</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;

