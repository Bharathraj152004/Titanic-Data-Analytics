import { useState, useEffect } from "react";
import { loadCSV } from "../utils/titanicUtils";

export default function DataTab() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 50;

  /* ======================= */
  /* LOAD CSV */
  /* ======================= */

  useEffect(() => {

    loadCSV((rows) => {

      setData(rows);

    });

  }, []);

  /* ======================= */
  /* FILTER */
  /* ======================= */

  const filtered = data.filter(d =>

    d.Name?.toLowerCase()
      .includes(
        search.toLowerCase()
      )

  );

  /* ======================= */
  /* PAGINATION */
  /* ======================= */

  const start =
    (page - 1) * rowsPerPage;

  const paginated =
    filtered.slice(
      start,
      start + rowsPerPage
    );

  const totalPages =
    Math.ceil(
      filtered.length /
      rowsPerPage
    );

  /* ======================= */
  /* UI */
  /* ======================= */

  return (

    <div>

      <h2>Dataset Explorer</h2>

      {/* SEARCH */}

      <input

        placeholder="Search passenger..."

        value={search}

        onChange={e => {

          setSearch(e.target.value);
          setPage(1);

        }}

      />

      <p>

        Showing {filtered.length}
        passengers

      </p>

      {/* TABLE */}

      <div className="table-wrapper">

        <table>

          <thead>

            <tr>

              <th>Name</th>
              <th>Sex</th>
              <th>Age</th>
              <th>Fare</th>

            </tr>

          </thead>

          <tbody>

            {paginated.map((row, i) => (

              <tr key={i}>

                <td>{row.Name}</td>
                <td>{row.Sex}</td>
                <td>{row.Age}</td>
                <td>{row.Fare}</td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* PAGINATION */}

      <div className="pagination">

        <button

          disabled={page === 1}

          onClick={() =>
            setPage(page - 1)
          }

        >
          Prev
        </button>

        <span>

          Page {page} of {totalPages}

        </span>

        <button

          disabled={
            page === totalPages
          }

          onClick={() =>
            setPage(page + 1)
          }

        >
          Next
        </button>

      </div>

    </div>

  );

}