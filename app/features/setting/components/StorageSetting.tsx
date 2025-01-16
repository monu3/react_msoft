import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const StorageSettings = () => {
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
    <div>
      <form>
        <div className="space-y-6">
          {/* Storage Options */}
          <div>
            <label className="block font-medium mb-2">
              Storage Type
            </label>
            <div className="flex gap-2">
              {["local", "aws-s3", "wasabi"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleStorageChange(type)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                    ${selectedStorage === type
                      ? "bg-orange-500 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                >
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* File Types */}
            <div>
              <label className="block font-medium mb-2">
                Allowed File Types
              </label>
              <div className="flex flex-wrap items-center gap-2 bg-gray-50 p-3 rounded-lg border border-gray-200 min-h-[120px]">
                {allowedFileTypes.map((type) => (
                  <span
                    key={type}
                    className="flex items-center px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                  >
                    {type}
                    <button
                      type="button"
                      className="ml-2 text-purple-500 hover:text-purple-700"
                      onClick={() => handleFileTypeRemove(type)}
                    >
                      ×
                    </button>
                  </span>
                ))}
                <Input
                  type="text"
                  placeholder="Add file type and press Enter"
                  className="flex-grow border-0 bg-transparent focus:ring-0 p-0 text-sm"
                  onKeyDown={handleAddFileType}
                />
              </div>
            </div>

            {/* Max Upload Size */}
            <div>
              <label htmlFor="maxUploadSize" className="block font-medium mb-2">
                Max Upload Size (In KB)
              </label>
              <Input
                type="number"
                id="maxUploadSize"
                name="maxUploadSize"
                placeholder="Enter max upload size"
                defaultValue={maxUploadSize.toString()}
                required
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  );
};

export default StorageSettings;