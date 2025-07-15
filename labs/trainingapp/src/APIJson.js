//Demo memanggil API JSON dari url luar
import React, { useState, useEffect } from "react";

export function APIJson() {
  const [data, setData] = useState(null); //State definition untuk menyimpan data

  useEffect(() => {
    fetch("https://belajaroracle.com/api/hrapi/employees/read.php")
      .then((respons) => respons.json())
      .then((json) => setData(json));
  }, []);

  if (!data) {
    return <p>Dalam proses pengembilan data</p>;
  }

  return (
    <div>
      <h2>Data dari API JSON</h2>
      <ul>
        {data.map((item) => (
          <li key={item.EMPLOYEE_ID}>
            {item.FIRST_NAME} {item.LAST_NAME}
          </li>
        ))}
      </ul>
    </div>
  );
}
