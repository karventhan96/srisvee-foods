"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductCard() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("front"); // "front" or "back"

  const pricePerUnit = 150;
  // Apply a discount if buying 3 or more (₹140/pack instead of ₹150)
  const isBundleDiscount = quantity >= 3;
  const effectivePricePerUnit = isBundleDiscount ? 140 : pricePerUnit;
  const totalPrice = quantity * effectivePricePerUnit;
  const savings = isBundleDiscount ? quantity * (pricePerUnit - effectivePricePerUnit) : 0;

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SrisVee Foods, I would like to order ${quantity} pack(s) of Nendram Banana Powder (100g) for ₹${totalPrice}.${
      savings > 0 ? ` (with bundle discount of ₹${savings})` : ""
    } Please share payment details and delivery process.`
  );

  return (
    <article className="featuredProduct">
      <div className="productSingleImage">
        <div className="productImageCard">
          {activeImage === "front" ? (
            <Image
              src="/products/nendram-banana-pouch-front.png"
              alt="SrisVee Foods Nendram Banana Powder 100g standing pouch front view"
              width={590}
              height={965}
              className="productStandingPouch"
              sizes="(max-width: 900px) 90vw, 380px"
              priority
            />
          ) : (
            <Image
              src="/products/nendram-banana-powder-back.jpeg"
              alt="SrisVee Foods Nendram Banana Powder 100g back package with nutrition and instructions"
              width={590}
              height={965}
              className="productStandingPouch"
              sizes="(max-width: 900px) 90vw, 380px"
            />
          )}

          {/* Front / Back Toggle Buttons */}
          <div className="imageToggleButtons">
            <button
              type="button"
              className={`toggleBtn ${activeImage === "front" ? "active" : ""}`}
              onClick={() => setActiveImage("front")}
              aria-label="View front of pack"
            >
              Front View
            </button>
            <button
              type="button"
              className={`toggleBtn ${activeImage === "back" ? "active" : ""}`}
              onClick={() => setActiveImage("back")}
              aria-label="View back of pack nutrition"
            >
              Back (Nutrition & Info)
            </button>
          </div>
        </div>
      </div>

      <div className="productInfo">
        <div className="badgeRow">
          <span className="productBadge">100g Pack</span>
          <span className="ageBadge">Suitable for 6+ Months & Family</span>
        </div>

        <h3>SrisVee Nendram Banana Powder</h3>

        <p className="productIntro">
          Made from premium raw Nendram bananas, naturally processed, sun-dried,
          and finely milled with no preservatives or added sugar.
        </p>

        <div className="productFacts">
          <div>
            <strong>Net Weight</strong>
            <span>100g</span>
          </div>
          <div>
            <strong>Standard M.R.P.</strong>
            <span>₹150/-</span>
          </div>
          <div>
            <strong>Shelf Life</strong>
            <span>6 Months</span>
          </div>
        </div>

        <div className="productHighlights">
          <span>✓ 100% Raw Nendran</span>
          <span>✓ Zero Added Sugar</span>
          <span>✓ Preservative Free</span>
          <span>✓ Gluten Free</span>
        </div>

        {/* Quantity & Pricing Box */}
        <div className="orderBox">
          <div className="quantitySelector">
            <span className="qtyLabel">Select Quantity:</span>
            <div className="qtyControls">
              <button
                type="button"
                className="qtyBtn"
                onClick={handleDecrease}
                aria-label="Decrease quantity"
                disabled={quantity <= 1}
              >
                −
              </button>
              <span className="qtyValue" aria-live="polite">
                {quantity}
              </span>
              <button
                type="button"
                className="qtyBtn"
                onClick={handleIncrease}
                aria-label="Increase quantity"
                disabled={quantity >= 20}
              >
                +
              </button>
            </div>
          </div>

          <div className="pricingSummary">
            <div className="priceLine">
              <span className="priceTotal">₹{totalPrice}</span>
              <span className="packNote">
                ({quantity} × ₹{effectivePricePerUnit})
              </span>
            </div>
            {savings > 0 ? (
              <span className="discountTag">🎉 Bundle savings: You save ₹{savings}!</span>
            ) : (
              <span className="bundleHint">Tip: Order 3 or more for ₹140/pack!</span>
            )}
          </div>

          <div className="orderActions">
            <a
              className="button primary full whatsappOrderBtn"
              href={`https://wa.me/919790491850?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order via WhatsApp (₹{totalPrice}) →
            </a>
            <a className="button ghost full callOrderBtn" href="tel:+919790491850">
              📞 Call to Order: +91 9790491850
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

