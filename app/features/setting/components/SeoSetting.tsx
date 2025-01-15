import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const SeoSetting = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Ensure we only set string values
        if (typeof reader.result === 'string') {
          setImagePreview(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <form
        action=""
        id="seo-setting"
      >
        <div className="grid gap-10 lg:grid-cols-2 sm:grid-cols-1">
        <div className="flex flex-col gap-4">
          <div>
          <label htmlFor="meta-keyword">Meta Keywords</label>
          <Input name="meta-keyword" id="meta-keyword" />
          </div>
          <div>
          <label htmlFor="meta-description">Meta Description</label>
          <Textarea name="meta-description" id="meta-description" />
          </div>
        </div>
        <div>
          <label htmlFor="meta-image">Meta Image</label>
          {imagePreview && (
            <div className="mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-w-full rounded-lg"
              />
            </div>
          )}
          <Input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange}
            id="meta-image"
          />
        </div>
        </div>
        <Button className="mt-2">Save Changes</Button>
      </form>
    </div>
  );
};

export default SeoSetting;