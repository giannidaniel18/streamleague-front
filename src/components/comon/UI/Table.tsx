import React from "react";

const headers = [
  { key: "pos", label: "Pos" },
  { key: "equipo", label: "Equipo" },
  { key: "pj", label: "PJ" },
  { key: "pg", label: "PG" },
  { key: "pe", label: "PE" },
  { key: "gol", label: "GOL" },
  { key: "diff", label: "+/-" },
];

const mockData = [
  { pos: 1, equipo: "Vorterix", pj: 5, pg: 4, pe: 1, gol: 10, diff: 9 },
  { pos: 2, equipo: "Olga", pj: 5, pg: 3, pe: 2, gol: 8, diff: 5 },
  { pos: 3, equipo: "Luzu", pj: 5, pg: 3, pe: 1, gol: 7, diff: 4 },
  { pos: 4, equipo: "Team A", pj: 5, pg: 2, pe: 3, gol: 6, diff: 3 },
  { pos: 5, equipo: "Team B", pj: 5, pg: 2, pe: 2, gol: 5, diff: 2 },
  { pos: 6, equipo: "Team C", pj: 5, pg: 2, pe: 1, gol: 4, diff: 1 },
  { pos: 7, equipo: "Team D", pj: 5, pg: 1, pe: 3, gol: 3, diff: 0 },
  { pos: 8, equipo: "Team E", pj: 5, pg: 1, pe: 2, gol: 2, diff: 1 },
  { pos: 9, equipo: "Team F", pj: 5, pg: 1, pe: 1, gol: 1, diff: 2 },
  { pos: 10, equipo: "Team G", pj: 5, pg: 0, pe: 4, gol: 0, diff: 3 },
  { pos: 11, equipo: "Team H", pj: 5, pg: 0, pe: 3, gol: 0, diff: 4 },
  { pos: 12, equipo: "Team I", pj: 5, pg: 0, pe: 2, gol: 0, diff: 5 },
  { pos: 13, equipo: "Team J", pj: 5, pg: 0, pe: 1, gol: 0, diff: 6 },
  { pos: 14, equipo: "Team K", pj: 5, pg: 0, pe: 0, gol: 0, diff: 7 },
  { pos: 15, equipo: "Team L", pj: 5, pg: 0, pe: 0, gol: 0, diff: 8 },
];

const Table = () => {
  return (
    <div className="relative w-[700px] overflow-x-auto shadow-md sm:rounded-lg border">
      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs uppercase  ">
          <tr className="border-b ">
            {headers.map((header) => (
              <th key={header.key} className="px-6 py-3">
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mockData.map((item) => (
            <tr key={item.pos} className=" border-b ">
              <td className="px-6 py-4">{item.pos}</td>
              <td className="px-6 py-4">{item.equipo}</td>
              <td className="px-6 py-4">{item.pj}</td>
              <td className="px-6 py-4">{item.pg}</td>
              <td className="px-6 py-4">{item.pe}</td>
              <td className="px-6 py-4">{item.gol}</td>
              <td className="px-6 py-4">{item.diff}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
