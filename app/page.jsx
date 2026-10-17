import Image from "next/image";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import RecipeSection from "./components/RecipeSection";
import FaqSection from "./components/FaqSection";
import TrustBanner from "./components/TrustBanner";

const promises = [
  ["01", "Pure & Natural", "No unnecessary additives, salt, or preservatives."],
  ["02", "Authentic Nendram", "Made from carefully selected raw Kerala Nendram bananas."],
  ["03", "Rich in Goodness", "Traditional gentle source of energy, potassium & dietary fiber."],
  ["04", "Hygienically Packed", "Carefully prepared and hermetically packed for freshness."],
];

const process = [
  ["01", "Handpicked", "Selected raw green Nendram bananas"],
  ["02", "Washed & Peeled", "Cleaned in pure water and peeled"],
  ["03", "Naturally Dried", "Sun and air dried hygienically"],
  ["04", "Finely Milled", "Processed into an ultra-fine digestible powder"],
  ["05", "Sealed Fresh", "Hermetically packed in food-grade pouches"],
];

const benefits = [
  ["🍌", "Traditional Kerala Bananas", "Sourced from authentic raw Nendran banana farms."],
  ["☀️", "Sun & Air Dried", "Naturally processed to retain essential dietary nutrients."],
  ["🌾", "Gentle on Digestion", "Easily digestible, making it a beloved first solid food."],
  ["🥣", "Versatile Daily Nutrition", "Effortlessly mixes into warm porridges, shakes & bakes."],
];

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="hero section">
        <div className="heroCopy">
          <span className="eyebrow">100% Raw & Natural</span>
          <h1>
            Nendram
            <br />
            <em>Banana Powder</em>
          </h1>
          <p>
            Made from authentic raw Nendram bananas, sun-dried and finely milled
            for nourishing everyday meals. Zero preservatives, zero added sugar.
          </p>
          <div className="chips">
            <span>✓ 100% Raw Nendran</span>
            <span>✓ No Preservatives</span>
            <span>✓ Zero Added Sugar</span>
            <span>✓ Gluten Free</span>
          </div>
          <div className="actions">
            <a className="button primary" href="#products">
              Order Online →
            </a>
            <a className="button ghost" href="#about">
              Learn More →
            </a>
          </div>
        </div>
        <div className="heroVisual">
          <div className="heroPouchFrame">
            <Image
              src="/products/nendram-banana-pouch-front.png"
              alt="SrisVee Nendram Banana Powder 100g original front standing pouch"
              width={590}
              height={965}
              className="heroPouchImage"
              priority
              sizes="(max-width: 900px) 88vw, 48vw"
            />
          </div>
        </div>
      </section>

      {/* Trust Credentials Banner */}
      <TrustBanner />

      {/* Our Promise Section */}
      <section className="promise section">
        <div className="sectionLabel">
          Our
          <br />
          <strong>Promise</strong>
        </div>
        <div className="promiseGrid">
          {promises.map(([n, title, text]) => (
            <article key={n} className="promiseCard">
              <span className="icon">✦</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="split section">
        <div className="photoCard">
          <Image
            src="/products/nendram-banana-pouch-front.png"
            alt="SrisVee Foods Nendram Banana Powder 100g standing pouch front"
            width={590}
            height={965}
            className="aboutProductImage"
            sizes="(max-width: 900px) 90vw, 45vw"
          />
          <div className="photoCaption">SrisVee Foods • Nendram Banana Powder</div>
        </div>

        <div className="content">
          <span className="eyebrow">About SrisVee Foods</span>
          <h2>
            Traditional Goodness,
            <br />
            <em>Made Simple</em>
          </h2>

          <p>
            At SrisVee Foods, we believe good food starts with honest ingredients
            and thoughtful preparation. Our flagship Nendram Banana Powder is made
            exclusively from mature raw green Nendram bananas — celebrated across
            South India for generations as a nourishing first food for babies and
            wholesome breakfast staple.
          </p>

          <p>
            We bring this cherished tradition to modern kitchens. From careful
            farm selection and thorough washing to sun-drying, fine powdering, and
            hygienic pouch packaging, we keep the process pure and transparent.
          </p>

          <div className="miniList">
            <span>🍌 100% Pure Banana</span>
            <span>🌿 Zero Additives</span>
            <span>📦 Hygienically Sealed</span>
          </div>

          <a className="button primary" href="#products">
            Order Your Pack →
          </a>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section cream">
        <div className="centerHeading">
          <span className="eyebrow">Why Choose Us</span>
          <h2>
            Goodness in Every <em>Scoop</em>
          </h2>
          <p>Single natural ingredient. Thoughtful preparation. Everyday vitality.</p>
        </div>
        <div className="benefitGrid">
          {benefits.map(([icon, title, text]) => (
            <article className="benefitCard" key={title}>
              <div className="benefitIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section">
        <div className="centerHeading">
          <span className="eyebrow">Quality Assurance</span>
          <h2>
            How It&apos;s <em>Made</em>
          </h2>
          <p>From carefully selected raw bananas to an ultra-fine wholesome powder.</p>
        </div>
        <div className="processGrid">
          {process.map(([n, title, text]) => (
            <article className="processCard" key={n}>
              <span className="step">{n}</span>
              <div className="processIcon">
                {["🍌", "💧", "☀️", "🌾", "📦"][Number(n) - 1]}
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Interactive Products Section */}
      <section id="products" className="section products">
        <div className="centerHeading">
          <span className="eyebrow">Our Product</span>
          <h2>
            Nendram Banana <em>Powder</em>
          </h2>
          <p>
            A 100g sealed pack made from handpicked Nendram bananas. Order
            conveniently with direct home delivery.
          </p>
        </div>

        <ProductCard />
      </section>

      {/* Interactive Recipe Section with Modals */}
      <RecipeSection />

      {/* FAQ Accordion Section */}
      <FaqSection />

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div>
          <span className="eyebrow">Get in Touch</span>
          <h2>
            Bring the goodness of
            <br />
            <em>Nendram</em> home.
          </h2>
          <p>
            Have a question about our banana powder, custom quantity orders, or
            shipping details? Message us on WhatsApp or give us a call.
          </p>
        </div>
        <div className="contactCard">
          <p>
            📱 <strong>+91 9790491850</strong>
          </p>
          <p>
            ✉️ <strong>srisveefoods@gmail.com</strong>
          </p>
          <p>
            📍 <strong>Tamil Nadu, India</strong>
          </p>
          <a
            className="button primary full"
            href="https://wa.me/919790491850?text=Hello%20SrisVee%20Foods%2C%20I%20have%20an%20inquiry%20regarding%20Nendram%20Banana%20Powder."
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerBrand">
          <Image
            src="/srisvee-logo-transparent.png"
            alt="SrisVee Foods"
            width={180}
            height={76}
            className="footerLogo"
          />
          <p>Pure • Homemade • Natural Goodness</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <a href="#about">About Us</a>
          <a href="#products">Our Products</a>
          <a href="#benefits">Benefits</a>
          <a href="#recipes">Recipes</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h4>Products</h4>
          <a href="#products">100g Pack (₹150)</a>
          <a href="#products">Bundle of 3 (₹420)</a>
        </div>
        <div>
          <h4>Contact Us</h4>
          <a href="tel:+919790491850">+91 9790491850</a>
          <a href="mailto:srisveefoods@gmail.com">srisveefoods@gmail.com</a>
          <span>Tamil Nadu, India</span>
        </div>
        <div className="copyright">
          © {new Date().getFullYear()} SrisVee Foods. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
