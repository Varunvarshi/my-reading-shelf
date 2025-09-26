import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserRegister from "./UserRegister";
import UserLogin from "./UserLogin";

export default function Navbar() {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user?.email === "admin@example.com";

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for: " + searchQuery); // Replace with API call later
  };

  return (
    <>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          background: "#222",
          color: "white",
        }}
      >
        {/* Hamburger button (LEFT) */}
        <button
          onClick={() => setMenuOpen(true)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginRight: "15px",
          }}
        >
          ☰
        </button>

        {/* Logo */}
        <h1 style={{ flex: 1 }}>📚 My Reading Shelf</h1>

        {/* Search Bar */}
        <form onSubmit={handleSearch} style={{ flex: 2, margin: "0 20px" }}>
          <input
            type="text"
            placeholder="Search books..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "none",
            }}
          />
        </form>

        {/* Auth buttons (RIGHT) */}
        <div>
          {user ? (
            <>
              <span style={{ marginRight: "10px" }}>Hi, {user.username}</span>
              {isAdmin && (
                <Link
                  to="/admin"
                  style={{
                    color: "yellow",
                    marginRight: "10px",
                    textDecoration: "none",
                  }}
                >
                  Admin Panel
                </Link>
              )}
              <button
                onClick={handleLogout}
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "none",
                  background: "red",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowRegister(true)}
                style={{
                  marginRight: "10px",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "none",
                  background: "green",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
              <button
                onClick={() => setShowLogin(true)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "5px",
                  border: "none",
                  background: "blue",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>

      {/* Left Sidebar Drawer */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: menuOpen ? "0" : "-260px", // Slide effect
          width: "250px",
          height: "100%",
          background: "#2c2c2c",
          color: "white",
          padding: "20px",
          zIndex: 1000,
          overflowY: "auto",
          transition: "left 0.3s ease-in-out", // Smooth slide
        }}
      >
        {/* Close Button */}
        <button
          onClick={() => setMenuOpen(false)}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "1.5rem",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          ✖
        </button>

        {/* Menu Links */}
        {[
          { to: "/updated", label: "Updated" },
          { to: "/added", label: "Added" },
          { to: "/popular", label: "Popular" },
          { to: "/upcoming", label: "Upcoming" },
          { to: "/ongoing", label: "Ongoing" },
          { to: "/completed", label: "Completed" },
          { to: "/library", label: "Library" },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={() => setMenuOpen(false)}
            style={{
              display: "block",
              padding: "10px",
              borderRadius: "5px",
              margin: "5px 0",
              textDecoration: "none",
              background:
                location.pathname === item.to ? "#444" : "transparent",
              color: "white",
              transition: "0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#444")}
            onMouseLeave={(e) =>
              (e.target.style.background =
                location.pathname === item.to ? "#444" : "transparent")
            }
          >
            {item.label}
          </Link>
        ))}

        {/* Genre dropdown */}
        <div>
          <button
            onClick={() => setGenreOpen(!genreOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              cursor: "pointer",
              fontSize: "1rem",
              margin: "10px 0",
            }}
          >
            Genre {genreOpen ? "▲" : "▼"}
          </button>

          {genreOpen && (
            <div style={{ marginLeft: "15px" }}>
              {["Action", "Romance", "Fantasy", "Sci-Fi", "Comedy"].map(
                (genre) => (
                  <Link
                    key={genre}
                    to={`/genre/${genre.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: "block",
                      padding: "8px",
                      borderRadius: "5px",
                      margin: "3px 0",
                      textDecoration: "none",
                      background:
                        location.pathname === `/genre/${genre.toLowerCase()}`
                          ? "#444"
                          : "transparent",
                      color: "white",
                      transition: "0.2s",
                    }}
                    onMouseEnter={(e) => (e.target.style.background = "#444")}
                    onMouseLeave={(e) =>
                      (e.target.style.background =
                        location.pathname ===
                        `/genre/${genre.toLowerCase()}`
                          ? "#444"
                          : "transparent")
                    }
                  >
                    {genre}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>

      {/* Auth Modals */}
      {showRegister && <UserRegister onClose={() => setShowRegister(false)} />}
      {showLogin && <UserLogin onClose={() => setShowLogin(false)} />}
    </>
  );
}
