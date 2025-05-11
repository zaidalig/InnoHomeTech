(function () {
    const style = document.createElement('style');
    style.innerHTML = `
      .whatsapp-button {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #25D366;
        color: white;
        padding: 10px 14px;
        border-radius: 40px;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-family: Arial, sans-serif;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 9999;
        transition: background-color 0.3s;
      }
  
      .whatsapp-button:hover {
        background-color: #128C7E;
      }
  
      .whatsapp-button img {
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    `;
    document.head.appendChild(style);

    const anchor = document.createElement('a');
    anchor.href = 'https://wa.me/923086288157?text=Hello%20InnoHomeTech%2C%20I%20need%20some%20help';
    anchor.className = 'whatsapp-button';
    anchor.target = '_blank';
    anchor.title = 'Chat on WhatsApp';

    const icon = document.createElement('img');
    icon.src = 'https://cdn-icons-png.flaticon.com/512/220/220236.png';
    icon.alt = 'WhatsApp';

    const text = document.createElement('span');
    text.textContent = 'How can I help?';

    anchor.appendChild(icon);
    anchor.appendChild(text);
    document.body.appendChild(anchor);
})();
  