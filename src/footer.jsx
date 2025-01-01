import "./css/footer.css";

function Footer() {
  return (
    <>
      <div className="footerwrapper">
        <div className="footer-Container">
          <div className="footerLine">
            <h1>Company</h1>
            <p>About</p>
            <p>Jobs</p>
            <p>For the Record</p>
          </div>
          <div className="footerLine">
            <h1>Communities</h1>
            <p>For Artists</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
          </div>
          <div className="footerLine">
            <h1>Useful links</h1>
            <p>Support</p>
            <p>Free Mobile App</p>
          </div>
          <div className="footerLine">
            <h1>Spotify Plans</h1>
            <p>Premium Individual</p>
            <p>Premium Duo</p>
            <p>Premium Family</p>
            <p>Spotify Free</p>
          </div>

          <div className="footerSocial">
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
          </div>
        </div>
        <hr className="footerBottom"></hr>
      </div>
    </>
  );
}

export default Footer;
