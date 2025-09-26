import { useState } from "react";

export default function BookCard({ title, author, image }) {
  const [liked, setLiked] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        textAlign: "center",
        background: "#f9f9f9",
        minWidth: "200px",
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{ width: "100px", height: "150px", objectFit: "cover", marginBottom: "1rem" }}
        />
      )}
      <h3>{title}</h3>
      <p>{author}</p>
      <button
        onClick={() => setLiked(!liked)}
        style={{
          padding: "6px 12px",
          border: "none",
          borderRadius: "5px",
          background: liked ? "red" : "green",
          color: "white",
          cursor: "pointer",
        }}
      >
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}
