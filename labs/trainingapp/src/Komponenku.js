import React from "react";
export class Pertama extends React.Component {
  render() {
    return (
      <div>
        <h1>Component Pertama</h1>
      </div>
    );
  }
}

//membuat componen dengan function
//membuat set default function, satu file hanya boleh ada satu export default
export default function Kedua() {
  return (
    <div>
      <h2>Component Kedua</h2>
    </div>
  );
}
// membuat componen dengan arrow function
export const Ketiga = () => {
  return (
    <div>
      <h3>Component Ketiga</h3>
    </div>
  );
};
