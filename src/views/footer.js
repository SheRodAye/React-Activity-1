import "../index"
import "./footer.css";

function Footer() {
    return (
      <div className="footer pt-4 mt-3">
        <div className="row">
          <div className="col">
            <div className="footerCopywrite">
            <strong>Copyright &copy;</strong> 
            </div>
          </div>
          <div className="col d-flex justify-content-end">
            <div className="footerName">
            WD42P ROD STEPHINE D. SARSABA
            </div>
          </div>
        </div>
    </div>
    );
  }
  
  export default Footer;