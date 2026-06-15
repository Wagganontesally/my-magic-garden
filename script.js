onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

.message-box {
    position: fixed;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    text-align: center;
}

.message-box a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    font-weight: bold;
    background: rgba(0,0,0,0.4);
    padding: 15px 25px;
    border-radius: 10px;
}

.message-box a:hover {
    text-decoration: underline;
}
