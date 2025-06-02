import { use, useState } from "react";
import { addReport } from "../../lib/function/report";
import { faker } from "@faker-js/faker";
import { useData } from "../../providers/DataProviders";
import { uploadFile } from "../../lib/function/uploadFile";

const ComplaintFormPage = () => {
  const { uid, nickname } = useData();
  const [imagePreview, setImagePreview] = useState(null);
  const [form, setForm] = useState({
    phone: "",
    category: "",
    title: "",
    content: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  let publicUrl = null;

  if (form.file) {
    publicUrl = await uploadFile(form.file);
    if (!publicUrl) {
      alert("Gagal mengunggah lampiran.");
      return;
    }
  }

  const dataToSend = {
    pengadu: nickname || "DefaultNickname",
    phone: form.phone,
    kategori: form.category,
    title: form.title,
    desc: form.content,
    user: uid,
    file_url: publicUrl,
  };

  const unit = "itc";

  const result = await addReport(dataToSend, unit);

  if (result.success) {
    alert(`Pengaduan berhasil dikirim oleh: ${dataToSend.pengadu}`);
    setForm({
      phone: "",
      category: "",
      title: "",
      content: "",
      file_url: null,
    });
    setImagePreview(null);
  } else {
    alert(`Gagal mengirim pengaduan: ${result.message}`);
  }
};

  const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (!file) return;

  setForm((prev) => ({ ...prev, file }));

  if (file.type.startsWith("image/")) {
    setImagePreview(URL.createObjectURL(file));
  } else {
    setImagePreview(null);
  }
};

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nomor Telepon
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border  focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              placeholder="08xxxxxxxxxx"
            />
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Judul Pengaduan
            </label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border  focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
              placeholder="Misalnya: AC Rusak di Lantai 3"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border  focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            >
              <option value="">Pilih kategori</option>
              <option value="layanan">Layanan</option>
              <option value="fasilitas">Fasilitas</option>
              <option value="kebersihan">Kebersihan</option>
            </select>
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Isi Pengaduan
            </label>
            <textarea
              name="content"
              rows={5}
              value={form.content}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white resize-none"
              placeholder="Ceritakan masalahmu di sini..."
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lampiran (opsional)
            </label>
            <input
              type="file"
              name="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              className="w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm bg-white"
            />
          </div>
          {imagePreview && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Pratinjau Gambar:</p>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full max-w-xs rounded-xl border border-gray-200"
              />
            </div>
          )}
        </form>
      </main>

      {/* Submit Button */}
      <footer className="bg-white px-4 py-4 shadow-inner sticky bottom-0">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition"
        >
          Kirim Pengaduan
        </button>
      </footer>
    </div>
  );
};

export default ComplaintFormPage;
