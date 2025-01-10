'use client'

import { useState, useEffect } from "react"

// Define the Feature type
type Feature = {
  title: string
  description: string
}

// Local storage key
const LOCAL_STORAGE_KEY = "features_data"

// Function to get features from local storage
export function getFeatures(): Feature[] {
  if (typeof window !== "undefined") {
    const storedFeatures = localStorage.getItem(LOCAL_STORAGE_KEY)
    return storedFeatures ? JSON.parse(storedFeatures) : []
  }
  return []
}

// Function to add a new feature to local storage
export function addFeature(feature: Feature) {
  const currentFeatures = getFeatures()
  const updatedFeatures = [...currentFeatures, feature]
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedFeatures))
}

// Hook to manage features
export function useFeatures(): [Feature[], React.Dispatch<React.SetStateAction<Feature[]>>] {
  const [features, setFeatures] = useState<Feature[]>(getFeatures())

  useEffect(() => {
    const storedFeatures = getFeatures()
    setFeatures(storedFeatures)
  }, [])

  return [features, setFeatures]
}
