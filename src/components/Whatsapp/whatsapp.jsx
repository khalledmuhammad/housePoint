import React from 'react';
import { useRouter } from 'next/router'


const WhatsAppButton = () => {
    const router = useRouter()
    const currentUrl = `https://house-point.vercel.app${router.asPath}`;
        const phoneNumber = '+201221409530';
    const message = `Hi, I Found this property  on House Point Egypt  Please contact me. Thank you. 
    ${currentUrl}`;

    

    return (
        <a href={`https://wa.me/${phoneNumber}?text=${message}`} className="d-flex gap-2 justify-content-center align-items-center btn ActionButton">
<i class="fa fa-whatsapp" aria-hidden="true"></i>
WhatsApp

        </a>
    );
};

export default WhatsAppButton;