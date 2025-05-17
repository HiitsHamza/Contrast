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

    console.log("Parsing response data:", JSON.stringify(responseData, null, 2))
    
    // Check different possible formats
    let contextArray = null
    
    // Format 1: Standard format with context array at top level
    if (responseData.context && Array.isArray(responseData.context)) {
      contextArray = responseData.context
      console.log("Found context array at top level with", contextArray.length, "items")
    } 
    // Format 2: QA Chain Response where context might be nested
    else if (responseData.response && responseData.response.context && Array.isArray(responseData.response.context)) {
      contextArray = responseData.response.context
      console.log("Found context array in response.context with", contextArray.length, "items")
    }
    // Format 3: Full raw backend log format (extracting from your example)
    else if (responseData.QA_Chain_Response && typeof responseData.QA_Chain_Response === 'string') {
      try {
        // Try to parse the string as JSON
        const parsedChain = JSON.parse(responseData.QA_Chain_Response.replace(/'/g, '"'))
        if (parsedChain.context && Array.isArray(parsedChain.context)) {
          contextArray = parsedChain.context
          console.log("Extracted context array from QA_Chain_Response string with", contextArray.length, "items")
        }
      } catch (e) {
        console.error("Failed to parse QA_Chain_Response string:", e)
      }
    }
    // Format 4: Special format with string-based backend log containing 'QA Chain Response:' 
    else if (responseData.answer && typeof responseData.answer === 'string') {
      console.log("Trying to extract context from answer text")
      try {
        // Look for any JSON-like structure in the answer
        const jsonMatch = responseData.answer.match(/\{.*"context":\s*\[.*\].*\}/s)
        if (jsonMatch) {
          const jsonStr = jsonMatch[0].replace(/'/g, '"').replace(/(\w+):/g, '"$1":')
          const parsedJson = JSON.parse(jsonStr)
          if (parsedJson.context && Array.isArray(parsedJson.context)) {
            contextArray = parsedJson.context
            console.log("Extracted context array from answer JSON with", contextArray.length, "items")
          }
        }
      } catch (e) {
        console.error("Failed to extract context from answer:", e)
      }
    }
    // Format 5: Search for context in any string field as a last resort
    else {
      console.log("Searching for context in any available string field")
      // Iterate through all string properties
      for (const key in responseData) {
        if (typeof responseData[key] === 'string' && responseData[key].includes('context')) {
          try {
            // Try to extract a JSON object with a context array
            const matches = responseData[key].match(/\{.*"context":\s*\[.*\].*\}/s)
            if (matches) {
              // Replace single quotes with double quotes and fix unquoted keys
              const jsonStr = matches[0].replace(/'/g, '"').replace(/(\w+):/g, '"$1":')
              const parsed = JSON.parse(jsonStr)
              if (parsed.context && Array.isArray(parsed.context)) {
                contextArray = parsed.context
                console.log(`Found context array in ${key} with ${contextArray.length} items`)
                break
              }
            }
          } catch (e) {
            console.error(`Failed to parse context from ${key}:`, e)
          }
        }
      }
    }
    
    if (!contextArray) {
      console.error('Could not find context array in any expected location:', responseData)
      return []
    }
    
    // Extract all product suggestions from the context, even if price is 0
    return contextArray.map(doc => {
      if (!doc.metadata) {
        console.warn('Document missing metadata:', doc)
        return null
      }
      
      // Log each extracted product
      const product = {
        id: doc.metadata.id,
        name: doc.metadata.name,
        price: doc.metadata.price,
        image: doc.metadata.image,
        url: doc.metadata.url,
        store: doc.metadata.store
      }
      
      console.log("Extracted product:", product)
      return product
    }).filter((p): p is ProductSuggestion => !!p)
  } catch (error) {
    console.error('Error parsing AI response:', error)
    return []
  }
} 