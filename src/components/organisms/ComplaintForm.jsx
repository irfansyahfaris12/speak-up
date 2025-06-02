import { useState } from "react";
import { addReport } from "../../lib/function/report";
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
    file: null,
  });

  // State untuk menyimpan pesan error tiap field
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null }); // reset error saat user input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setForm((prev) => ({ ...prev, file }));
    setErrors({ ...errors, file: null });

    if (file.type.startsWith("image/")) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.phone.match(/^08\d{8,}$/)) {
      newErrors.phone = "Nomor telepon tidak valid. Gunakan format 08xxxxxxxxxx dengan minimal 10 digit.";
    }
    if (!form.title.trim()) {
      newErrors.title = "Judul pengaduan harus diisi.";
    }
    if (!form.category) {
      newErrors.category = "Kategori harus dipilih.";
    }
    if (!form.content.trim()) {
      newErrors.content = "Isi pengaduan harus diisi.";
    }
    if (form.file) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (!allowedTypes.includes(form.file.type)) {
        newErrors.file = "File harus berupa JPG, PNG, atau PDF.";
      }
      const maxSizeInBytes = 2 * 1024 * 1024; // 2MB
      if (form.file.size > maxSizeInBytes) {
        newErrors.file = "Ukuran file tidak boleh lebih dari 2MB.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true jika valid
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // jika error, jangan lanjut

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
        file: null,
      });
      setImagePreview(null);
      setErrors({});
    } else {
      alert(`Gagal mengirim pengaduan: ${result.message}`);
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
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm bg-white ${
                errors.phone ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="08xxxxxxxxxx"
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
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
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm bg-white ${
                errors.title ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Misalnya: AC Rusak di Lantai 3"
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
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
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm bg-white ${
                errors.category ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            >
              <option value="">Pilih kategori</option>
              <option value="layanan">Layanan</option>
              <option value="fasilitas">Fasilitas</option>
              <option value="kebersihan">Kebersihan</option>
            </select>
            {errors.category && (
              <p className="text-red-600 text-sm mt-1">{errors.category}</p>
            )}
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
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm bg-white resize-none ${
                errors.content ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
              placeholder="Ceritakan masalahmu di sini..."
            ></textarea>
            {errors.content && (
              <p className="text-red-600 text-sm mt-1">{errors.content}</p>
            )}
          </div>

          {/* File */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Lampiran (opsional)
            </label>
            <input
              type="file"
              name="file"
              accept=".jpg,.jpeg,.png,.pdf"
              onChange={handleFileChange}
              className={`w-full px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 text-sm bg-white ${
                errors.file ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.file && (
              <p className="text-red-600 text-sm mt-1">{errors.file}</p>
            )}
          </div>

          {/* Image Preview */}
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
