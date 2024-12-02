import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0d1321", color: "#fff", padding: "40px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          {/* Logo Section */}
          <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Ebra Holidays</h2>
            <p>
            Ebra Holidays offers curated travel experiences, providing exceptional holiday packages tailored to your needs. Explore the world with us and create unforgettable memories
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  backgroundColor: "#ff5722",
                  color: "#fff",
                  borderRadius: "50%",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                }}
              >
                <i className="fas fa-map-marker-alt"></i>
              </span>
               Kottayam
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px",marginLeft:"80px",fontWeight:"bolder" }}>Quick Links</h3>
            <ul style={{ listStyle: "none", padding: 0,marginLeft:"80px" }}>
              <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
              <li><a href="/packages" style={{ color: "#fff", textDecoration: "none" }}>Packages</a></li>
              <li><a href="/blog" style={{ color: "#fff", textDecoration: "none" }}>Blog</a></li>
              <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About Us</a></li>
              <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a></li>

            </ul>
          </div>

          {/* Other Pages */}
          <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
            <h3 style={{ fontSize: "18px", marginBottom: "10px",fontWeight:"bolder" }}>Other Links</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><a href="#tour-by-theme-section" style={{ color: "#fff", textDecoration: "none" }}>Tour by Theme</a></li>
              <li><a href="#Top-picks" style={{ color: "#fff", textDecoration: "none" }}>Top Picks</a></li>
              <li><a href="#Travel-offers" style={{ color: "#fff", textDecoration: "none" }}>Travel Offers</a></li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "#444", margin: "20px 0" }} />

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
          {/* Contact Info */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%", maxWidth: "600px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Phone Section */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  <i className="fas fa-phone-alt"></i>
                </span>
                <div>
                  <h4 style={{ margin: 0, fontSize: "16px" }}>Book Your Holiday</h4>
                  <p style={{ margin: 0 }}>012-345-6789</p>
                </div>
              </div>

              {/* Email Section */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    backgroundColor: "#ff5722",
                    color: "#fff",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "10px",
                  }}
                >
                  <i className="fas fa-envelope"></i>
                </span>
                <div>
                  <h4 style={{ margin: 0, fontSize: "16px" }}>Email Us</h4>
                  <p style={{ margin: 0 }}>info@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p>Follow us:</p>
            <a
              href="https://facebook.com"
              target="_blank"
              style={{ color: "#fff", marginRight: "15px", fontSize: "20px" }}
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              style={{ color: "#fff", marginRight: "15px", fontSize: "20px" }}
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              style={{ color: "#fff", marginRight: "15px", fontSize: "20px" }}
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              style={{ color: "#fff", fontSize: "20px" }}
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;