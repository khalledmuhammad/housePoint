import React from 'react';
import { useRouter } from 'next/router'


const WhatsAppButton = () => {
    const router = useRouter()
    const currentUrl = `https://house-point.vercel.app${router.asPath}`;
        const phoneNumber = '+201115331035';
    const message = `Hello, I found this link on your website ${currentUrl}`;

    return (
        <a href={`https://wa.me/${phoneNumber}?text=${message}`} className="whatsapp-button">
            <img src='/assets/images/whatsapp.png'  alt='Share on WhatsApp' />
        </a>
    );
};

export default WhatsAppButton;