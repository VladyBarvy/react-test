// src/EmailForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            to_email: email,
            message: message,
        };

        emailjs.send('service_wtcexvc', 'template_0e241mg', templateParams, 'dZZBVSTD8eb-CMWJU')
            .then((response) => {
                console.log('Успех!', response.status, response.text);
                setSuccess(true);
                setError('');
                setEmail('');
                setMessage('');
            }, (err) => {
                console.error('Ошибка...', err);
                setError('Не удалось отправить сообщение.');
                setSuccess(false);
            });
    };

    return (
        <div>
            <h1>Отправить сообщение</h1>
            <form onSubmit={sendEmail}>
                <input
                    type="email"
                    placeholder="Ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Сообщение"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
                <button type="submit">Отправить</button>
            </form>
            {success && <p>Сообщение отправлено успешно!</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default EmailForm;
