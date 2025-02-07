import React from 'react';

function Footer() {
    return (
        <footer className="text-center bg-neutral text-white p-4">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
</footer>
    );
}

export default Footer;