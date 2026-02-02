export default function Teddy({ mood }) {
  return (
    <svg
      className={`teddy ${mood}`}
      viewBox="0 0 200 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="22" fill="#c68642" />
      <circle cx="150" cy="50" r="22" fill="#c68642" />
      <circle cx="100" cy="80" r="48" fill="#c68642" />

      <circle cx="85" cy="75" r="5" fill="#000" />
      <circle cx="115" cy="75" r="5" fill="#000" />

      <ellipse cx="100" cy="90" rx="6" ry="4" fill="#000" />

      {mood === "sad" || mood === "verySad" ? (
        <path d="M85 105 Q100 95 115 105" stroke="#000" strokeWidth="3" fill="none" />
      ) : (
        <path d="M85 100 Q100 115 115 100" stroke="#000" strokeWidth="3" fill="none" />
      )}

      <ellipse cx="100" cy="165" rx="42" ry="50" fill="#c68642" />
      <circle cx="55" cy="155" r="14" fill="#c68642" />
      <circle cx="145" cy="155" r="14" fill="#c68642" />

      {mood === "love" && (
        <text x="100" y="165" fontSize="28" textAnchor="middle">❤️</text>
      )}
    </svg>
  );
}
