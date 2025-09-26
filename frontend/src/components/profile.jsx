import { useState } from "react";
import API from "../api";  // ✅ this works only if api.js is inside src/


export default function Profile() {
  const [user, setUser] = useState(null);

  const fetchProfile = async () => {
    try {
      const res = await API.get("/auth/me"); // ✅ calls your backend /api/auth/me
      setUser(res.data);
    } catch (err) {
      alert("Not authorized");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={fetchProfile}
        className="bg-purple-500 text-white px-4 py-2 rounded mb-4"
      >
        Get My Profile
      </button>

      {user && (
        <div className="p-4 bg-gray-100 rounded shadow">
          <p>
            <b>ID:</b> {user._id}
          </p>
          <p>
            <b>Username:</b> {user.username}
          </p>
          <p>
            <b>Email:</b> {user.email}
          </p>
        </div>
      )}
    </div>
  );
}