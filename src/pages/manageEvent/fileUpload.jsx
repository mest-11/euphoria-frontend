import React, { useState } from 'react';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (selectedFile) {
            // Handle file upload logic here
            console.log('File uploaded:', selectedFile);
        } else {
            console.log('No file selected');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="fileInput">
                        Upload a file:
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border rounded shadow appearance-none"
                    />
                </div>
                <button
                    type="submit"
                    className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                >
                    Upload
                </button>
            </form>
        </div>
    );
};


export default FileUpload;
