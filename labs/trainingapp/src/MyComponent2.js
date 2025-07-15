import React from "react";

export class StudentName extends React.Component {
  render() {
    return (
      <div>
        <h1>Daftar Siswa</h1>
      </div>
    );
  }
}

export function StudentList({ data }) {
  return (
    <ul>
      <li>{data.name}</li>
    </ul>
  );
}
