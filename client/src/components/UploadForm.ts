import React, { useState } from "react";
import axios from "axios";

function UploadForm() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post("http://localhost:3000/upload", formData);
      console.log(response);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError("Failed to upload file.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="file" accept=".mp4,.mov" onChange={handleFileInput} />
      </div>
      <div>
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {error && <div>{error}</div>}
    </form>
  );
}

export default UploadForm;
