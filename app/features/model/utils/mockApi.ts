import { fakeFeatures, type Feature } from "./fakeData";

const LOCAL_STORAGE_KEY = "features";

export const mockApi = {
  getFeatures: (): Promise<Feature[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {

        if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(fakeFeatures));
        }
        const features: Feature[] = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY) || "[]"
        );
        resolve(features);
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
