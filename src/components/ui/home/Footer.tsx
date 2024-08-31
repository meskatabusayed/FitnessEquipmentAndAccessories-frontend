const Footer = () => {
    return (
      <footer className="footer bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title">contact</h6>
        <p className="link link-hover">Level-4, 34, Awal Centre, Banani, Dhaka</p>
        
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
      
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">social</h6>
        <a href="https://www.facebook.com/programmingHero" className="link link-hover">Fecebook</a>
        <a className="link link-hover">Linkedin</a>
        <a className="link link-hover">YouTube</a>
      </nav>
    </footer>
    );
  };
  
  export default Footer;