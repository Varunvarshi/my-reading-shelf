import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookCard from "./components/BookCard";
import Profile from "./components/Profile";

// ✅ Home Page
function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Welcome to My Reading Shelf</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          overflowX: "auto",
          paddingBottom: "1rem",
        }}
      >
        <BookCard
          title="To Kill a Mockingbird"
          author="Harper Lee"
          image="https://m.media-amazon.com/images/I/81gepf1eMqL.jpg"
        />
        <BookCard
          title="The Great Gatsby"
          author="F. Scott Fitzgerald"
          image="https://m.media-amazon.com/images/I/71FTb9X6wsL.jpg"
        />
        <BookCard
          title="Pride and Prejudice"
          author="Jane Austen"
          image="https://m.media-amazon.com/images/I/91HHxxtA1wL.jpg"
        />
      </div>
    </div>
  );
}

// ✅ Library Page
function Library() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Library</h1>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginTop: "1rem",
          overflowX: "auto",
          paddingBottom: "1rem",
        }}
      >
        <BookCard
          title="The Catcher in the Rye"
          author="J.D. Salinger"
          image="https://m.media-amazon.com/images/I/81OthjkJBuL.jpg"
        />
        <BookCard
          title="Brave New World"
          author="Aldous Huxley"
          image="https://m.media-amazon.com/images/I/81d4JXyL2BL.jpg"
        />
        <BookCard
          title="The Lord of the Rings"
          author="J.R.R. Tolkien"
          image="https://m.media-amazon.com/images/I/91SZSW8qSsL.jpg"
        />
      </div>
    </div>
  );
}

// ✅ Contact Page
function Contact() {
  return (
    <div style={{ padding: "1rem" }}>
      <h1>Contact Us</h1>
      <p>Email: support@myreadingshelf.com</p>
      <p>Phone: +123-456-7890</p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/library" element={<Library />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        {/* ❌ Removed Login & Signup routes */}
      </Routes>
    </>
  );
}
