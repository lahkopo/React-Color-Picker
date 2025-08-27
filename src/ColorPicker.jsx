import React, { useState } from "react";
import palettes from "nice-color-palettes";

function ColorPicker() {
  const [color, setColor] = useState("#FF5733");
  const [favorites, setFavorites] = useState([]);

  const [palette, setPalette] = useState(
    palettes[Math.floor(Math.random() * palettes.length)]
  );

  function handleColorChange(event) {
    const newColor = event.target.value;
    setColor(newColor);

    let closestPalette = palettes[0];
    let minDistance = Infinity;
    for (let p of palettes) {
      for (let c of p) {
        const dist = colorDistance(newColor, c);
        if (dist < minDistance) {
          minDistance = dist;
          closestPalette = p;
        }
      }
    }
    setPalette(closestPalette);
  }

  function colorDistance(c1, c2) {
    const r1 = parseInt(c1.slice(1, 3), 16);
    const g1 = parseInt(c1.slice(3, 5), 16);
    const b1 = parseInt(c1.slice(5, 7), 16);
    const r2 = parseInt(c2.slice(1, 3), 16);
    const g2 = parseInt(c2.slice(3, 5), 16);
    const b2 = parseInt(c2.slice(5, 7), 16);
    return Math.sqrt((r1 - r2) ** 2 + (g1 - g2) ** 2 + (b1 - b2) ** 2);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard!`);
  }

  function addFavorite() {
    if (!favorites.includes(color)) setFavorites([...favorites, color]);
  }

  function getLuminance(hex) {
    const rgb = [0, 2, 4].map(i => parseInt(hex.slice(1 + i, 3 + i), 16) / 255);
    const a = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2];
  }

  return (
    <div className="color-picker-container">
      <h1>Color Picker</h1>

      <div
        className="color-display"
        style={{
          backgroundColor: color,
          color: getLuminance(color) > 0.5 ? "#000" : "#FFF"
        }}
      >
        <p>{color}</p>
        <button onClick={copyToClipboard}>Copy</button>
        <button onClick={addFavorite}>Save Favorite</button>
      </div>

      <label>Select a Color:</label><br />
      <input type="color" value={color} onChange={handleColorChange} />

      <h3>Generated Palette</h3>
      <div className="palette">
        {palette.map((shade, idx) => (
          <div
            key={idx}
            title={shade}
            onClick={() => setColor(shade)}
            style={{ backgroundColor: shade }}
          ></div>
        ))}
      </div>

      <h3>Favorites</h3>
      <div className="favorites">
        {favorites.map((fav, idx) => (
          <div
            key={idx}
            title={fav}
            onClick={() => setColor(fav)}
            style={{ backgroundColor: fav }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ColorPicker;
