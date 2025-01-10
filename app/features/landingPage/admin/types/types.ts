export interface HomeSection {
    offerText: string
    heading: string
    description: string
    trustedBy: string
    liveDemoLink: string
    buyNowLink: string
    bannerImage: string
  }
  
  export interface Feature {
    id: number
    name: string
    description: string
  }
  
  export interface Screenshot {
    id: number
    name: string
    image: string
  }
  
  export interface FAQ {
    id: number
    question: string
    answer: string
  }
  
  export interface Testimonial {
    id: number
    clientName: string
    position: string
    content: string
  }
  
  export interface PricingPlan {
    id: number
    name: string
    price: number
    description: string
    features: string[]
  }
  
  