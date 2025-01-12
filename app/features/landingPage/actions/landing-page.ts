'use server'

// This is a mock database - replace with your actual database
let db = {
  homeSection: {} as any,
  features: [] as any[],
  screenshots: [] as any[],
  faqs: [] as any[],
  testimonials: [] as any[],
  pricingPlans: [] as any[]
}

export async function updateHomeSection(formData: FormData) {
  const data = {
    offerText: formData.get('offerText'),
    heading: formData.get('heading'),
    description: formData.get('description'),
    trustedBy: formData.get('trustedBy'),
    liveDemoLink: formData.get('liveDemoLink'),
    buyNowLink: formData.get('buyNowLink'),
    bannerImage: formData.get('bannerImage')
  }
  
  db.homeSection = data
  return { success: true, data }
}

export async function addFeature(formData: FormData) {
  const data = {
    id: Date.now(),
    name: formData.get('name'),
    description: formData.get('description')
  }
  
  db.features.push(data)
  return { success: true, data }
}

export async function addScreenshot(formData: FormData) {
  const data = {
    id: Date.now(),
    name: formData.get('name'),
    image: formData.get('image')
  }
  
  db.screenshots.push(data)
  return { success: true, data }
}

export async function addFAQ(formData: FormData) {
  const data = {
    id: Date.now(),
    question: formData.get('question'),
    answer: formData.get('answer')
  }
  
  db.faqs.push(data)
  return { success: true, data }
}

export async function addTestimonial(formData: FormData) {
  const data = {
    id: Date.now(),
    clientName: formData.get('clientName'),
    position: formData.get('position'),
    content: formData.get('content')
  }
  
  db.testimonials.push(data)
  return { success: true, data }
}

export async function addPricingPlan(formData: FormData) {
  const data = {
    id: Date.now(),
    name: formData.get('name'),
    price: Number(formData.get('price')),
    description: formData.get('description'),
    features: (formData.get('features') as string).split('\n')
  }
  
  db.pricingPlans.push(data)
  return { success: true, data }
}

