import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Кирилл Нетёсов — Все права защищены</p>
      </div>
    </footer>
  );
};

export default Footer;
