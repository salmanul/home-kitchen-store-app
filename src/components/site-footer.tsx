import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerCol">
          <div className="footerBrand">
            Home<span>Kitchen</span>
          </div>
          <p>
            685 Market Street, San Francisco,
            <br />
            CA 94105, United States.
          </p>
          <p>
            <Link href="tel:+1234567890">(+1) 234-567-890</Link>
          </p>
          <p>
            <Link href="mailto:support@homekitchen.com">support@homekitchen.com</Link>
          </p>
          <div className="footerSocials">
            <a aria-label="Facebook" href="#">f</a>
            <a aria-label="Twitter" href="#">𝕏</a>
            <a aria-label="Instagram" href="#">in</a>
            <a aria-label="LinkedIn" href="#">li</a>
          </div>
        </div>

        <div className="footerCol">
          <h4>Account</h4>
          <Link href="/collections">Shop</Link>
          <Link href="/collections">Wishlist</Link>
          <Link href="/collections">Cart</Link>
          <Link href="/collections">Collections</Link>
        </div>

        <div className="footerCol">
          <h4>Quick Link</h4>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Refund Policy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">FAQ&apos;s</Link>
          <Link href="#">Contact</Link>
        </div>

        <div className="footerCol">
          <h4>Download App</h4>
          <p>Save $3 With App &amp; New User only</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 8,
                background: "rgba(255,255,255,0.1)",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              App Store
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                borderRadius: 8,
                background: "rgba(255,255,255,0.1)",
                fontSize: "0.82rem",
                fontWeight: 600,
              }}
            >
              Google Play
            </span>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="footerBottomInner">
          <span>&copy; {new Date().getFullYear()} HomeKitchen. All rights reserved.</span>
          <div className="paymentMethods">
            <span>We Accept:</span>
            <span className="paymentBadge">Visa</span>
            <span className="paymentBadge">PayPal</span>
            <span className="paymentBadge">Mastercard</span>
            <span className="paymentBadge">Apple Pay</span>
            <span className="paymentBadge">GPay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
