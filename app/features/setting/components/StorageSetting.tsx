import { Button } from '@/components/ui/button';
import React, { useState } from "react";
import {
  FormLayout,
  FormContainer,
  FormGrid,
  FormField,
} from "~/common/components/FormLayout"; // Replace with actual path

const StorageSettings: React.FC = () => {
  const [selectedStorage, setSelectedStorage] = useState<string>("local");
  const [allowedFileTypes, setAllowedFileTypes] = useState<string[]>([
    "csv",
    "jpeg",
    "jpg",
    "pdf",
    "png",
    "xls",
    "xlsx",
  ]);
  const [maxUploadSize, setMaxUploadSize] = useState<number>(2048000);

  const handleStorageChange = (storage: string) => {
    setSelectedStorage(storage);
  };

  const handleFileTypeRemove = (fileType: string) => {
    setAllowedFileTypes((prev) => prev.filter((type) => type !== fileType));
  };

  const handleAddFileType = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const value = event.currentTarget.value.trim();
      if (value && !allowedFileTypes.includes(value)) {
        setAllowedFileTypes((prev) => [...prev, value]);
        event.currentTarget.value = "";
      }
    }
  };

  const handleSaveChanges = () => {
    alert("Settings Saved!");
  };

  return (
    <FormLayout>
      <FormContainer
        description="Configure your file storage options and upload limits."
      >
        <FormGrid>
          {/* Storage Options */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Storage Type
            </label>
            <div className="flex space-x-2">
              {["local", "aws-s3", "wasabi"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleStorageChange(type)}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    selectedStorage === type
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </FormGrid>
        <FormGrid>
          {/* File Types */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Allowed File Types
            </label>
            <div className="flex flex-wrap items-center gap-2 bg-gray-50 p-2 rounded-lg border border-gray-300">
              {allowedFileTypes.map((type) => (
                <span
                  key={type}
                  className="flex items-center px-2 py-1 bg-purple-100 text-purple-700 rounded-full"
                >
                  {type}
                  <button
                    type="button"
                    className="ml-1 text-sm text-red-500"
                    onClick={() => handleFileTypeRemove(type)}
                  >
                    ✕
                  </button>
                </span>
              ))}
              <input
                type="text"
                placeholder="Add file type"
                className="flex-grow bg-transparent focus:outline-none"
                onKeyDown={handleAddFileType}
              />
            </div>
          </div>
          {/* Max Upload Size */}
          <div>
            <FormField
              label="Max Upload Size (In KB)"
              id="maxUploadSize"
              type="number"
              placeholder="Enter max upload size"
              defaultValue={maxUploadSize.toString()}
              name=""
              required
            />
          </div>
        </FormGrid>

        <div className="mt-6">
          <Button  onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </div>
      </FormContainer>
    </FormLayout>
  );
};

export default StorageSettings;
