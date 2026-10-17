export default function TrustBanner() {
  const trustPoints = [
    {
      icon: "🌱",
      title: "100% Raw Nendran",
      desc: "Traditional heritage bananas sourced directly",
    },
    {
      icon: "🛡️",
      title: "Zero Preservatives",
      desc: "No additives, artificial colors, or chemicals",
    },
    {
      icon: "🥣",
      title: "No Added Sugar or Salt",
      desc: "Pure single-ingredient natural powder",
    },
    {
      icon: "✨",
      title: "Hygienically Packed",
      desc: "Hermetically sealed food-grade packaging",
    },
  ];

  return (
    <div className="trustBanner">
      <div className="trustBannerInner">
        {trustPoints.map((item, i) => (
          <div className="trustItem" key={i}>
            <span className="trustIcon">{item.icon}</span>
            <div>
              <strong>{item.title}</strong>
              <small>{item.desc}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

