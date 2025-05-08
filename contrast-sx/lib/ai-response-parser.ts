import type { ProductSuggestion } from "@/types/ai-suggestions"

interface AIDocument {
  id: string
  metadata: {
    id: number
    name: string
    price: string
    image: string
    url: string
    store: string
  }
  page_content: string
}

interface AIResponse {
  input: string
  context: AIDocument[]
  answer: string
}

/**
 * Parses the AI response and extracts product suggestions
 * @param responseData - The raw AI response data
 * @returns An array of product suggestions
 */
export function parseAIResponseToSuggestions(responseData: any): ProductSuggestion[] {
  try {
    if (!responseData || typeof responseData !== 'object') {
      console.error('Invalid AI response format:', responseData)
      return []
    }

    // Try to parse the response as a QA Chain Response
    const qaResponse = responseData as AIResponse
    
    if (!qaResponse.context || !Array.isArray(qaResponse.context)) {
      console.error('AI response missing context array:', responseData)
      return []
    }
    
    // Extract product suggestions from the context
    const suggestions = qaResponse.context.map(doc => {
      if (!doc.metadata) {
        console.warn('Document missing metadata:', doc)
        return null
      }
      
      return {
        id: doc.metadata.id,
        name: doc.metadata.name,
        price: doc.metadata.price,
        image: doc.metadata.image,
        url: doc.metadata.url,
        store: doc.metadata.store
      }
    }).filter(Boolean) as ProductSuggestion[]
    
    return suggestions
  } catch (error) {
    console.error('Error parsing AI response:', error)
    return []
  }
} 