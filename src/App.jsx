import { useState } from "react";
import Teddy from "./Teddy";
import { QRCodeCanvas } from "qrcode.react";

export default function App() {
  const herName = "Angel"; // 💖 CHANGE NAME HERE

  const [started, setStarted] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [yesClicked, setYesClicked] = useState(false);

  const getMood = () => {
    if (yesClicked) return "love";
    if (noCount >= 4) return "verySad";
    if (noCount >= 1) return "sad";
    return "happy";
  };

  /* 🌅 START SCREEN */
  if (!started) {
  return (
    <div className="container intro-screen">
      <div className="bg-hearts">
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💘</span>
        <span>❤️</span>
        <span>💞</span>
        <span>💖</span>
        <span>💕</span>
        <span>💗</span>
        <span>💘</span>
        <span>❤️</span>
        <span>💞</span>
      </div>

      <h1 className="intro">Good Morning my girl 💕</h1>
      <p className="subtitle">
        This morning something is waiting just for you…
      </p>

      <button className="yes-btn" onClick={() => setStarted(true)}>
        Continue 💖
      </button>
    </div>
  );
}

  /* 💖 FINAL LOVE SCREEN */
  if (yesClicked) {
    const whatsappLink = `https://wa.me/?text=Hey%20${encodeURIComponent(
      herName
    )}%20❤️%0A%0AYou%20clicked%20YES%20🥹💘%0A%0ANow%20you%E2%80%99re%20officially%20my%20Valentine%20forever%20🧸💕%0A%0ATanu%2C%20I%20just%20want%20you%20to%20know%20how%20grateful%20I%20am%20to%20have%20a%20girl%20like%20you%20in%20my%20life%20❤️%0AYou%20make%20everything%20feel%20warmer%2C%20happier%2C%20and%20more%20beautiful%20just%20by%20being%20you%20🥰%0A%0AThank%20you%20for%20your%20love%2C%20your%20smile%2C%20and%20for%20choosing%20me%20every%20day%20💖%0A%0AI%20promise%20to%20stand%20by%20you%2C%20care%20for%20you%2C%20and%20love%20you%20a%20little%20more%20every%20single%20day%20🌹%0A%0AHappy%20Valentine%E2%80%99s%20Day%2C%20my%20love%20❤️%0A%0AI%20love%20youuuuu%20forever%20💞`;

    return (
      <div className="container love">
        <Teddy mood="love" />
        <h1>I love you, {herName} ❤️</h1>
        <p>You’re my favorite person forever 💕</p>

        <div className="floating-hearts">💖 💕 💘 💞 💗</div>

        <div className="qr-section">
         <p className="qr-text">
  <span>Scan this and send this message to You…</span>
  <span>I made something special for you 💝</span>
</p>
           <QRCodeCanvas
    value={whatsappLink}
    size={180}
    fgColor="#ff5c8d"
    bgColor="#ffffff"
    level="H"
  />
        </div>
      </div>
    );
  }

  /* 💌 QUESTION SCREEN */
  return (
    <div className="container">
      <Teddy mood={getMood()} />

      <h1 className="question">
        {herName}, will you be my Valentine? 💌
      </h1>

      <div className="buttons-wrapper">
      <div className="buttons">
        <button
          className="yes-btn"
          style={{ transform: `scale(${1 + noCount * 0.25})` }}
          onClick={() => setYesClicked(true)}
        >
          Yes 💖
        </button>

        {noCount < 5 && (
          <button className="no-btn" onClick={() => setNoCount(noCount + 1)}>
            No 😶
          </button>
        )}
      </div>
      </div>
    </div>
  );
}
