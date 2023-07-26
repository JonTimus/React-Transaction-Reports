import React from "react";

export default function Table({ data, columns }) {
  const key = columns.find((col) => col.isKey).accessor;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.accessor}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row[key]}>
            {columns.map((col, index) => (
              <td key={index}>{row[col.accessor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
