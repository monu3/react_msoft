import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Loader2, Save } from "lucide-react";
import { mockApi } from "./utils/mockApi";
import { FEATURE_TIERS, type Feature } from "./utils/fakeData";

export default function FeatureModelForm() {
  const [formData, setFormData] = useState<Omit<Feature, "id">>({
    name: "",
    description: "",
    isEnabled: false,
    icon: "",
    priority: 1,
    featureTier: FEATURE_TIERS.FREE,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await mockApi.postFeature(formData);
      setMessage("Feature added successfully!");
      setFormData({
        name: "",
        description: "",
        isEnabled: false,
        icon: "",
        priority: 1,
        featureTier: FEATURE_TIERS.FREE,
      });
    } catch (error) {
      setMessage("Failed to add feature.");
    }

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 sm:p-6">
      <div className="space-y-2">
        <Label htmlFor="name">Feature Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter feature name"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Describe the feature"
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="tier">Feature Tier</Label>
          <Select
            value={formData.featureTier}
            onValueChange={(value) =>
              setFormData({
                ...formData,
                featureTier: value as keyof typeof FEATURE_TIERS,
              })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select tier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={FEATURE_TIERS.FREE}>Free</SelectItem>
              <SelectItem value={FEATURE_TIERS.BASIC}>Basic</SelectItem>
              <SelectItem value={FEATURE_TIERS.PREMIUM}>Premium</SelectItem>
              <SelectItem value={FEATURE_TIERS.SPECIAL_REQUEST}>
                Special Request
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="priority">Priority</Label>
          <Input
            id="priority"
            type="number"
            value={formData.priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: Number(e.target.value) })
            }
            min="1"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="icon">Icon URL</Label>
        <Input
          id="icon"
          type="url"
          value={formData.icon}
          onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
          placeholder="Paste icon image URL"
        />
      </div>

      <div className="flex items-center gap-3 bg-muted p-3 rounded-md">
        <Switch
          id="enable-feature"
          checked={formData.isEnabled}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, isEnabled: checked })
          }
        />
        <Label htmlFor="enable-feature">Enable Feature</Label>
      </div>

      {message && <p className="text-sm text-green-500">{message}</p>}

      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={isSubmitting} className="gap-2">
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Saving...
            </>
          ) : (
            <>
              <Save className="h-4 w-4" />
              Save Feature
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
