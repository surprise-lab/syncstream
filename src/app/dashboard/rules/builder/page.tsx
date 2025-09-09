
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function RuleBuilderPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold">
            Data Transformation Rules
          </h2>
          <p className="text-gray-400 mt-1">
            Create, modify, and test your data transformation rules before
            deployment.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-md h-10 px-4 bg-gray-700 hover:bg-gray-600 text-white text-sm font-bold leading-normal tracking-wide transition-colors"
          >
            <span className="material-symbols-outlined">list</span>
            <span className="truncate">View Rules</span>
          </Button>
          <Button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-md h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold leading-normal tracking-wide transition-colors">
            <span className="material-symbols-outlined">save</span>
            <span className="truncate">Save Rule</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-8">
          <div className="bg-[#18232F] rounded-lg p-6 border border-gray-700 h-full">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Rule: Concatenate Names
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  Combine first and last name fields into a single "Full Name"
                  field.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Status:</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-900 text-yellow-300">
                  Draft
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="grid grid-cols-5 items-center gap-4 w-full">
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium">
                    Source Field 1
                  </label>
                  <div className="flex items-center justify-center p-4 h-16 bg-[#233648] border-2 border-dashed border-gray-600 rounded-md text-gray-400">
                    <span>first_name</span>
                  </div>
                </div>
                <div className="flex justify-center items-center h-full pt-6">
                  <span className="material-symbols-outlined text-white text-2xl">
                    add
                  </span>
                </div>
                <div className="col-span-2 flex flex-col gap-2">
                  <label className="text-gray-300 text-sm font-medium">
                    Source Field 2
                  </label>
                  <div className="flex items-center justify-center p-4 h-16 bg-[#233648] border-2 border-dashed border-gray-600 rounded-md text-gray-400">
                    <span>last_name</span>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-white text-3xl transform rotate-90 my-2">
                arrow_right_alt
              </span>
              <div className="w-full max-w-xs">
                <div className="flex flex-col items-center gap-2 bg-[#2a4157] p-4 rounded-lg">
                  <span className="text-sm font-medium text-blue-300">
                    TRANSFORMATION
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-white">
                      functions
                    </span>
                    <span className="text-white font-bold">Concatenate</span>
                  </div>
                </div>
              </div>
              <span className="material-symbols-outlined text-white text-3xl transform rotate-90 my-2">
                arrow_right_alt
              </span>
              <div className="w-full flex flex-col gap-2">
                <label className="text-gray-300 text-sm font-medium self-start">
                  Target Field
                </label>
                <div className="flex items-center justify-center p-4 h-16 bg-[#233648] border-2 border-dashed border-gray-600 rounded-md text-gray-400">
                  <span>full_name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-[#18232F] rounded-lg p-6 border border-gray-700 h-full">
            <h3 className="text-white font-semibold text-lg mb-4">
              Test Environment
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  className="text-white text-sm font-medium mb-2 block"
                  htmlFor="sample-data"
                >
                  Sample Input Data (JSON)
                </label>
                <Textarea
                  className="w-full bg-[#0e141a] text-gray-300 rounded-md p-3 text-sm border border-gray-700 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  id="sample-data"
                  rows={6}
                  defaultValue={`{
  "first_name": "John",
  "last_name": "Doe",
  "email_address": "john.doe@example.com",
  "phone": "123-456-7890",
  "creation_date": "2023-10-27T10:00:00Z"
}`}
                />
              </div>
              <Button className="w-full flex items-center justify-center gap-2 min-w-[84px] cursor-pointer rounded-md h-10 px-4 bg-green-600 hover:bg-green-700 text-white text-sm font-bold leading-normal tracking-wide transition-colors">
                <span className="material-symbols-outlined">play_arrow</span>
                <span>Run Test</span>
              </Button>
              <div>
                <label className="text-white text-sm font-medium mb-2 block">
                  Preview Output
                </label>
                <div className="bg-[#0e141a] p-4 rounded-md border border-gray-700 min-h-[150px]">
                  <div className="flex justify-between text-gray-400 text-xs mb-2">
                    <span>INPUT</span>
                    <span>OUTPUT</span>
                  </div>
                  <div className="flex justify-between items-start">
                    <code className="text-sm text-gray-300 whitespace-pre-wrap">
                      {`{ "first_name": "John", "last_name": "Doe" }`}
                    </code>
                    <span className="material-symbols-outlined text-gray-500 mx-4">
                      arrow_forward
                    </span>
                    <code className="text-sm text-green-400 whitespace-pre-wrap">
                      {`{ "full_name": "John Doe" }`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
