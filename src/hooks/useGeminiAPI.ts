import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
if (!API_KEY) {
  console.warn('VITE_GOOGLE_API_KEY is not set. AI features will be disabled.');
}
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function textToImage(prompt: string): Promise<string> {
  try {
    const seed = Math.floor(Math.random() * 1000000);
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=1024&height=1024&model=flux&nologo=true&seed=${seed}`;
  } catch (error) {
    console.error('Text to image error:', error);
    throw error;
  }
}

export async function editImage(imageUrl: string, instructions: string): Promise<string> {
  try {
    const editPrompt = `${instructions}, photorealistic, high quality, detailed`;
    const seed = Math.floor(Math.random() * 1000000);
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(editPrompt)}?width=1024&height=1024&model=flux&nologo=true&seed=${seed}`;
  } catch (error) {
    console.error('Edit image error:', error);
    throw error;
  }
}

export async function generateVideo(prompt: string): Promise<string> {
  try {
    const framePrompt = `${prompt}, cinematic movie still, dramatic lighting, high quality, 16:9 film frame`;
    const seed = Math.floor(Math.random() * 1000000);
    return `https://image.pollinations.ai/prompt/${encodeURIComponent(framePrompt)}?width=1280&height=720&model=flux&nologo=true&seed=${seed}`;
  } catch (error) {
    console.error('Generate video error:', error);
    throw error;
  }
}
