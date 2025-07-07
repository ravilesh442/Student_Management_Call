import React, { useState, useEffect } from "react";
import CometChatApp from "./CometChat/CometChatApp";
import { CometChatUIKit } from "@cometchat/chat-uikit-react";
import "bootstrap/dist/css/bootstrap.min.css";

interface Student {
  id: number;
  name: string;
  marks: number;
  email: string;
}

interface StudentResponse {
  students: Student[];
  totalPages: number;
}

const App = () => {
  const [uid, setUid] = useState("SUPERHERO1");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [students, setStudents] = useState<Student[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [formData, setFormData] = useState({ name: "", email: "", marks: "" });
  const limit = 5;

  const handleCometChatLogin = async () => {
    try {
      await CometChatUIKit.login(uid);
      setIsChatOpen(true);
      alert(`Login Successful: ${uid} is now logged in`);
    } catch (error) {
      console.error("Login error:", error);
      alert("Login Failed: Please check UID or AuthKey");
    }
  };

  const fetchStudents = async () => {
    try {
      const res = await fetch(`http://localhost:3000/students/?page=${page}&limit=${limit}`);
      const data: StudentResponse = await res.json();
      setStudents(data.students);
      setTotalPages(data.totalPages);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          age: Number(formData.marks),
        }),
      });
      setFormData({ name: "", email: "", marks: "" });
      fetchStudents();
    } catch (err) {
      console.error("Failed to add student", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, [page]);

  return (
    <div className="container mt-4" style={{ backgroundColor: "#FFFFFF", minHeight: "100vh", fontFamily: "Inter, sans-serif" }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold p-2 rounded" style={{ color: "#989898" }}>Student Management System</h2>
        <div className="d-flex align-items-center gap-2">
          <input
            type="text"
            className="form-control"
            style={{ width: "180px" }}
            value={uid}
            placeholder="Enter CometChat UID"
            onChange={(e) => setUid(e.target.value)}
          />
          <button className="btn btn-primary" style={{ backgroundColor: "#989898", borderColor: "#989898" }} onClick={handleCometChatLogin}>
            Login to Chat
          </button>
        </div>
      </div>

      <form className="row g-3 mb-4" onSubmit={handleAddStudent}>
        <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Name" name="name" value={formData.name} onChange={handleInputChange} required />
        </div>
        <div className="col-md-4">
          <input type="email" className="form-control" placeholder="Email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="col-md-2">
          <input type="number" className="form-control" placeholder="Marks" name="marks" value={formData.marks} onChange={handleInputChange} required />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn w-100" style={{ backgroundColor: "#989898", color: "#fff" }}>
            Add Student
          </button>
        </div>
      </form>

      <div className="table-responsive">
        <table className="table table-bordered text-center">
          <thead style={{ backgroundColor: "#989898", color: "#FFFFFF" }}>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Marks</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {students.map((stu) => (
              <tr key={stu.id} style={{ backgroundColor: "#f9f9f9" }}>
                <td>{stu.id}</td>
                <td>{stu.name}</td>
                <td>{stu.age}</td>
                <td>{stu.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-2 mt-4">
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setPage(1)} disabled={page === 1}>First</button>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
        <span className="btn btn-sm" style={{ backgroundColor: "#989898", color: "#FFFFFF" }}>{page}</span>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        <button className="btn btn-outline-secondary btn-sm" onClick={() => setPage(totalPages)} disabled={page === totalPages}>Last</button>
      </div>

      {isChatOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "#FFFFFF",
            zIndex: 9999,
          }}
        >
          <CometChatApp />
        </div>
      )}
    </div>
  );
};

export default App;
