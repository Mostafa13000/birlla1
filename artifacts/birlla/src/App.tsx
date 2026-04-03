import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Inquiry about BIRLLA.COM domain");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:mosho400@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div style={{ fontFamily: "'Georgia', serif", margin: 0, padding: 0, background: "#fff" }}>

      {/* For Sale Banner */}
      <div style={{
        background: "#1a1a1a",
        color: "#d4a574",
        textAlign: "center",
        padding: "12px 20px",
        fontSize: "13px",
        letterSpacing: "1px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
      }}>
        <span>
          <strong style={{ color: "#fff" }}>BIRLLA.COM</strong>
          {"  ·  "}
          This premium beauty domain is available for sale.
        </span>
        <a
          href="#contact"
          style={{
            border: "1px solid #d4a574",
            color: "#d4a574",
            padding: "6px 18px",
            textDecoration: "none",
            fontSize: "11px",
            letterSpacing: "2px",
            fontFamily: "sans-serif",
          }}
        >
          CONTACT TO BUY
        </a>
      </div>

      {/* Hero Section */}
      <div style={{ position: "relative", height: "calc(100vh - 45px)", overflow: "hidden" }}>
        <img
          src="/images/hero.png"
          alt="Birlla Beauty"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
        />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.4) 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
          padding: "20px",
        }}>
          <p style={{ letterSpacing: "4px", fontSize: "13px", marginBottom: "16px", fontFamily: "sans-serif", fontWeight: 300 }}>
            THE NEW ERA OF LUXURY
          </p>
          <h1 style={{ fontSize: "clamp(64px, 10vw, 120px)", margin: "0 0 8px", fontWeight: 400, lineHeight: 1.1 }}>
            Birlla
          </h1>
          <p style={{ fontSize: "clamp(13px, 1.5vw, 16px)", letterSpacing: "3px", marginBottom: "48px", fontFamily: "sans-serif", fontWeight: 300, color: "#e8c99a" }}>
            BIRLLA.COM — PREMIUM DOMAIN FOR SALE
          </p>
          <a
            href="#contact"
            style={{
              background: "#fff",
              color: "#1a1a1a",
              padding: "16px 48px",
              textDecoration: "none",
              fontSize: "12px",
              letterSpacing: "3px",
              fontFamily: "sans-serif",
              fontWeight: 700,
            }}
          >
            CONTACT TO BUY
          </a>
        </div>
      </div>

      {/* Why This Domain */}
      <div style={{ background: "#fdf9f5", padding: "80px 20px", textAlign: "center" }}>
        <p style={{ color: "#d4a574", letterSpacing: "3px", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "16px" }}>
          PREMIUM DOMAIN
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 400, color: "#1a1a1a", marginBottom: "20px" }}>
          Why BIRLLA.COM?
        </h2>
        <p style={{ color: "#666", maxWidth: "560px", margin: "0 auto 60px", lineHeight: 1.8, fontFamily: "sans-serif", fontSize: "16px" }}>
          A short, elegant, and memorable name — perfect for a luxury beauty, cosmetics, skincare, or lifestyle brand.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", maxWidth: "800px", margin: "0 auto" }}>
          {[
            { icon: "✦", title: "Short & Unique", desc: "Only 6 letters — easy to remember and spell" },
            { icon: "✦", title: "Beauty Ready", desc: "Perfect fit for cosmetics, skincare & wellness brands" },
            { icon: "✦", title: "Global Appeal", desc: "Works in any language and market worldwide" },
          ].map((item) => (
            <div key={item.title} style={{ flex: "1", minWidth: "200px", maxWidth: "220px" }}>
              <div style={{ color: "#d4a574", fontSize: "24px", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1a1a1a", marginBottom: "8px", fontFamily: "sans-serif" }}>
                {item.title}
              </h3>
              <p style={{ color: "#888", fontSize: "14px", lineHeight: 1.6, fontFamily: "sans-serif" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" style={{ background: "#1a1a1a", padding: "80px 20px", textAlign: "center" }}>
        <p style={{ color: "#d4a574", letterSpacing: "3px", fontSize: "12px", fontFamily: "sans-serif", marginBottom: "16px" }}>
          GET IN TOUCH
        </p>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", fontWeight: 400, color: "#fff", marginBottom: "12px" }}>
          Interested in BIRLLA.COM?
        </h2>
        <p style={{ color: "#999", marginBottom: "50px", fontFamily: "sans-serif", fontSize: "15px" }}>
          Send us a message and we'll get back to you shortly.
        </p>

        {sent ? (
          <div style={{ color: "#d4a574", fontSize: "18px", fontFamily: "sans-serif" }}>
            ✓ Your email client has opened. We'll be in touch soon!
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
            <textarea
              placeholder="Your Message or Offer"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button
              type="submit"
              style={{
                background: "#d4a574",
                color: "#1a1a1a",
                border: "none",
                padding: "16px",
                fontSize: "13px",
                letterSpacing: "2px",
                fontFamily: "sans-serif",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        )}

        <p style={{ color: "#555", marginTop: "40px", fontSize: "13px", fontFamily: "sans-serif" }}>
          Or email directly:{" "}
          <a href="mailto:mosho400@gmail.com" style={{ color: "#d4a574", textDecoration: "none" }}>
            mosho400@gmail.com
          </a>
        </p>
      </div>

      {/* Footer */}
      <div style={{ background: "#111", color: "#555", textAlign: "center", padding: "24px", fontSize: "12px", fontFamily: "sans-serif", letterSpacing: "1px" }}>
        © 2025 BIRLLA.COM — Premium Domain For Sale
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  background: "#2a2a2a",
  border: "1px solid #333",
  color: "#fff",
  padding: "14px 16px",
  fontSize: "14px",
  fontFamily: "sans-serif",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
};
