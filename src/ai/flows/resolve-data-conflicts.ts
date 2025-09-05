// src/ai/flows/resolve-data-conflicts.ts
'use server';

/**
 * @fileOverview Identifies and resolves data conflicts between Takealot and Xero.
 *
 * - resolveDataConflicts - A function that handles the data conflict resolution process.
 * - ResolveDataConflictsInput - The input type for the resolveDataConflicts function.
 * - ResolveDataConflictsOutput - The return type for the resolveDataConflicts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ResolveDataConflictsInputSchema = z.object({
  takealotData: z.string().describe('The data from Takealot in JSON format.'),
  xeroData: z.string().describe('The data from Xero in JSON format.'),
});
export type ResolveDataConflictsInput = z.infer<typeof ResolveDataConflictsInputSchema>;

const ResolveDataConflictsOutputSchema = z.object({
  resolvedData: z.string().describe('The resolved data in JSON format.'),
  resolutionReport: z.string().describe('A report of the conflicts and resolutions.'),
});
export type ResolveDataConflictsOutput = z.infer<typeof ResolveDataConflictsOutputSchema>;

export async function resolveDataConflicts(input: ResolveDataConflictsInput): Promise<ResolveDataConflictsOutput> {
  return resolveDataConflictsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'resolveDataConflictsPrompt',
  input: {schema: ResolveDataConflictsInputSchema},
  output: {schema: ResolveDataConflictsOutputSchema},
  prompt: `You are an expert in resolving data conflicts between Takealot and Xero.

You will be given data from both systems in JSON format. Identify any potential conflicts and suggest resolutions.

Takealot Data: {{{takealotData}}}
Xero Data: {{{xeroData}}}

Return the resolved data in JSON format and a report of the conflicts and resolutions.  The report should describe the action taken, and the reasoning for taking that action.  Be as concise as possible.
`,
});

const resolveDataConflictsFlow = ai.defineFlow(
  {
    name: 'resolveDataConflictsFlow',
    inputSchema: ResolveDataConflictsInputSchema,
    outputSchema: ResolveDataConflictsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
