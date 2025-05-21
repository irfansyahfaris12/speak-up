import { addDoc } from "firebase/firestore";
import supabase from "../../config/supabase";
import { db } from "../firebase";

async function uploadFile(file) {
  const filePath = `files/${file.name}`;

  const { data, error } = await supabase.storage
    .from('speakup')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Upload error:', error.message);
    return null;
  }

  const { data: publicUrlData } = supabase.storage
    .from('speakup')
    .getPublicUrl(filePath);

  return publicUrlData.publicUrl;
}


export { uploadFile };