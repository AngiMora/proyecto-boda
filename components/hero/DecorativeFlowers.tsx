export default function DecorativeFlowers() {
  return (
    <>
      {/* Superior izquierda */}
      <div className="absolute top-0 left-0 opacity-20 pointer-events-none">
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 190C80 150 70 80 140 30"
            stroke="#B79B6C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M90 110C80 100 70 90 60 80"
            stroke="#B79B6C"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M110 80C120 70 130 60 140 50"
            stroke="#B79B6C"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Inferior derecha */}
      <div className="absolute bottom-0 right-0 rotate-180 opacity-20 pointer-events-none">
        <svg
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 190C80 150 70 80 140 30"
            stroke="#B79B6C"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M90 110C80 100 70 90 60 80"
            stroke="#B79B6C"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M110 80C120 70 130 60 140 50"
            stroke="#B79B6C"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </>
  );
}