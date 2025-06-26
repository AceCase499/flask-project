"use client"
import React, { useState, useEffect } from 'react'

const FeTest = () => {
  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  useEffect(() => {
    fetch("http://127.0.0.1:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const handleSubmit = () => {
    fetch("http://127.0.0.1:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, age })
    })
    .then(res => res.json())
    .then(data => {
      setUsers(data)
      setName("")
      setAge("")
    })
    .catch(err => console.error("Submission error:", err))
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button onClick={handleSubmit}>Submit</button>

      <h3>Current Users</h3>
      <ul>
        {users.map((u, index) => (
          <li key={index}>{u.name} ({u.age})</li>
        ))}
      </ul>
    </div>
  )
}

export default FeTest
