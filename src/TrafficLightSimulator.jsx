const css = `
.tl-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #111;
  gap: 1rem;
  font-family: sans-serif;
  color: white;
}
.tl-casing {
  background: #1a1a1a;
  border-radius: 20px;
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border: 3px solid #333;
}
.tl-light {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid #000;
}
.tl-red    { background: #e53e3e; }
.tl-yellow { background: #d69e2e; }
.tl-green  { background: #38a169; }
.tl-post { width: 12px; height: 60px; background: #333; margin: 0 auto; }
.tl-base { width: 80px; height: 14px; background: #333; border-radius: 4px; margin: 0 auto; }
`;

const LIGHTS = ["red", "yellow", "green"];

export default function TrafficLightSimulator() {
  const current = 0; // hardcoded for now, logic comes next

  return (
    <>
      <style>{css}</style>
      <div className="tl-wrap">
        <h2>Traffic Light Simulator</h2>
        <div className="tl-casing">
          {LIGHTS.map((color, index) => (
            <div
              key={color}
              className={`tl-light tl-${color} ${index === current ? "active" : ""}`}
            />
          ))}
        </div>
        <div className="tl-post" />
        <div className="tl-base" />
      </div>
    </>
  );
}