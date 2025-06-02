import { useState } from "react";
import FilterPengaduan from "../molecules/FilterPengaduan";
import { useNavigate } from "react-router-dom";



const PengaduanList = ({report = []}) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const filtered = report?.filter((item) => {
    const matchTitle = item.title.toLowerCase().includes(search.toLowerCase());
    const matchStatus = status === "" || item.report_status === status;
    return matchTitle && matchStatus;
  });

  return (
    <div>
      <FilterPengaduan
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">Judul</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered?.map((item) => (
              <tr key={item.id} className="border-t" onClick={() => navigate(`/admin/${item.id}`, { state: item })}>
                <td className="px-4 py-2">{item.title}</td>
                <td className="px-4 py-2 capitalize">{item.report_status}</td>
              </tr>
            ))}
            {filtered?.length === 0 && (
              <tr>
                <td colSpan={2} className="text-center py-4 text-gray-400">
                  Tidak ada data ditemukan.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PengaduanList;
