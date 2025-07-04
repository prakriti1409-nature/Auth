import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async suggestCelebrities(prompt: string): Promise<string[]> {
    const completion = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are a celebrity discovery engine. Return only names.',
        },
        {
          role: 'user',
          content: `List 3 famous personalities matching: ${prompt}`,
        },
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0].message?.content || '';

    return content
      .split('\n')
      .map((line) => line.replace(/^\d+\.\s*/, '').trim())
      .filter(Boolean);
  }

  async getChatCompletion(prompt: string): Promise<string> {
    const chat = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    return chat.choices[0]?.message?.content || 'No response';
  }

  async getCelebrityDetails(name: string) {
    const prompt = `Give detailed public profile info for "${name}" in JSON format with fields:
- name
- profession
- country
- genre
- socials (Instagram, YouTube, Spotify links)
- fanbase (followers approx)
- sampleSetlist or keynoteTopics`;

    const chat = await this.openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const content = chat.choices[0]?.message?.content || '{}';

    try {
      return JSON.parse(content);
    } catch (err) {
      console.error('Failed to parse AI JSON:', err);
      return null;
    }
  }
}
