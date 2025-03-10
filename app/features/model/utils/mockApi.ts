import { fakeFeatures, type Feature } from "./fakeData";

const LOCAL_STORAGE_KEY = "features";

let features: Feature[] = [...fakeFeatures];
export const mockApi = {
  getFeatures: (): Promise<Feature[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Fetch features from localStorage if available
        const storedFeatures: Feature[] = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
        );
        // Merge fakeFeatures with any features stored in localStorage
        resolve([...features, ...storedFeatures]); // Return merged list (fake data + stored data)
      }, 500);
    });
  },

  postFeature: (feature: Omit<Feature, "id">): Promise<Feature> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const storedFeatures: Feature[] = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
        );

        const newFeature: Feature = { id: Date.now(), ...feature };
        storedFeatures.push(newFeature);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(storedFeatures));

        console.log("Added Feature:", newFeature);
        resolve(newFeature);
      }, 500);
    });
  },

  deleteFeature: (id: number): Promise<{ success: boolean }> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let features: Feature[] = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
        );

        features = features.filter((feature) => feature.id !== id);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(features));

        console.log(`Deleted Feature ID: ${id}`);
        resolve({ success: true });
      }, 500);
    });
  },
};
