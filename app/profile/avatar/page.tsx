"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Camera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AvatarPage() {
  const [preview, setPreview] = useState("/images/hairstyle/jessica-felicio.jpg");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSave = () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }
    // TODO: upload file to backend or cloud storage
    alert("Profile picture updated!");
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 min-h-screen">
      {/* Mobile Frame */}
      <div className="w-full md:w-[390px] h-[844px] bg-white md:rounded-[2.5rem] md:shadow-2xl md:overflow-hidden relative">
        {/* Content */}
        <div className="px-4 pt-6 pb-20 overflow-y-auto h-full">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-6">
            <Link href="/profile" className="p-2 rounded-full bg-white shadow">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-xl font-bold text-gray-800">Update Photo</h1>
          </div>

          {/* Avatar Preview */}
          <div className="flex flex-col items-center mt-10">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
              <Image
                src={preview}
                alt="Profile"
                fill
                className="object-cover"
              />
              <label
                htmlFor="avatar-upload"
                className="absolute bottom-2 right-2 bg-yellow-400 p-2 rounded-full shadow cursor-pointer"
              >
                <Camera className="w-5 h-5 text-white" />
              </label>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </div>

            <p className="mt-4 text-gray-600 text-sm">JPG or PNG, max 5MB</p>
          </div>

          {/* Save Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleSave}
            className="mt-10 w-full bg-yellow-400 text-white font-medium py-3 rounded-xl shadow"
          >
            Save Changes
          </motion.button>
        </div>
      </div>
    </div>
  );
}
