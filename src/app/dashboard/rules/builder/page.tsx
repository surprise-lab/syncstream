
import { Button } from '@/components/ui/button';

export default function RuleBuilderPage() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-white text-3xl font-bold">
            Visual Rule Builder
          </h2>
          <p className="text-gray-400 mt-1">
            Drag and drop to create and modify data transformation rules.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-md h-10 px-4 bg-gray-700 hover:bg-gray-600 text-white text-sm font-bold leading-normal tracking-wide transition-colors"
          >
            <span className="material-symbols-outlined">list</span>
            <span className="truncate">View Rules List</span>
          </Button>
          <Button className="flex items-center gap-2 min-w-[84px] cursor-pointer justify-center rounded-md h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold leading-normal tracking-wide transition-colors">
            <span className="material-symbols-outlined">save</span>
            <span className="truncate">Save Rule</span>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3">
          <div className="bg-[#18232F] rounded-lg p-4 h-full border border-gray-700">
            <h3 className="text-white font-semibold mb-4">Source Fields</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">first_name</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">last_name</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">email_address</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">phone</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#233648] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">creation_date</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="bg-[#18232F] rounded-lg p-6 border border-gray-700 h-full">
            <h3 className="text-white font-semibold mb-2">
              Rule: Concatenate Names
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              Combine first and last name fields into a single "Full Name"
              field.
            </p>
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 w-full">
                <div className="flex-1 flex items-center justify-center p-4 h-16 bg-[#233648] border-2 border-dashed border-gray-600 rounded-md text-gray-400">
                  <span>first_name</span>
                </div>
                <span className="material-symbols-outlined text-white text-2xl">
                  add
                </span>
                <div className="flex-1 flex items-center justify-center p-4 h-16 bg-[#233648] border-2 border-dashed border-gray-600 rounded-md text-gray-400">
                  <span>last_name</span>
                </div>
              </div>
              <span className="material-symbols-outlined text-white text-3xl transform rotate-90">
                arrow_right_alt
              </span>
              <div className="w-full">
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
              <span className="material-symbols-outlined text-white text-3xl transform rotate-90">
                arrow_right_alt
              </span>
              <div className="w-full flex items-center justify-center p-4 h-16 bg-[#233648] border-2 border-dashed border-gray-600 rounded-md text-gray-400">
                <span>Drop target field here</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <div className="bg-[#18232F] rounded-lg p-4 h-full border border-gray-700">
            <h3 className="text-white font-semibold mb-4">Transformations</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-[#2a4157] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">Concatenate</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#2a4157] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">To Lowercase</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#2a4157] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">Format Phone</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#2a4157] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">Standardize Date</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
              <div className="flex items-center justify-between bg-[#2a4157] p-3 rounded-md cursor-grab active:cursor-grabbing">
                <span className="text-white text-sm">Split Text</span>
                <span className="material-symbols-outlined text-gray-400">
                  drag_indicator
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="text-white font-semibold mb-4">Preview</h3>
              <div className="bg-[#0e141a] p-4 rounded-md">
                <div className="flex justify-between text-gray-400 text-xs mb-2">
                  <span>INPUT</span>
                  <span>OUTPUT</span>
                </div>
                <div className="flex justify-between items-center">
                  <code className="text-sm text-gray-300">
                    "John", "Doe"
                  </code>
                  <span className="material-symbols-outlined text-gray-500">
                    arrow_forward
                  </span>
                  <code className="text-sm text-green-400">"John Doe"</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
