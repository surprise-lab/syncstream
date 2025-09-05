import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function DataFlow() {
  return (
    <div className="bg-gray-950 border border-gray-800 rounded-xl p-6 mb-6">
      <h3 className="text-lg font-semibold text-white mb-4">Data Flow Overview</h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-2">
          <Image
            alt="Takealot Logo"
            className="h-12 bg-white p-1 rounded-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcdCtmUL5T4l68MHLjdHUGolHGd5k15ys3TtZr0Nbnt7aeK4Bh3f6qjH6PBtGgAYgq8AKRf5jeRrWTIP8vNmh6CPtJK9GmthtlzUKhnFplwgj9NmWoWyKazqWhmiwqjMt8DJB7fO69RARD4dSEh9BSoL-PWIXJYfnJKWjB_CCiko6ogjW_lweJxhHiOQ5EUf2zggZp9Q_IplrC67G6zX194AEkslidMC5592zRl3NSciytCJMp8t5j3r3L-W4txcISSiAqLEmpo1A"
            width={48}
            height={48}
            data-ai-hint="logo"
          />
          <p className="text-gray-300 font-medium">Takealot</p>
        </div>
        <div className="flex-1 flex items-center mx-4">
          <div className="w-full h-px bg-gray-700 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 h-1 w-20 bg-primary-500 rounded-full -translate-y-1/2 animate-[flow_4s_linear_infinite]"></div>
            <div className="absolute top-1/2 left-0 h-1 w-20 bg-primary-500 rounded-full -translate-y-1/2 animate-[flow_4s_linear_infinite_2s]"></div>
          </div>
          <ArrowRight className="text-primary-400 text-4xl" />
          <div className="w-full h-px bg-gray-700"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            alt="Xero Logo"
            className="h-12"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhLUd2JD8T9z71yHQ6aRXSdsmB-qnZoi3Pdd1IOhcKTEjrzT7Y6iaFA2qocdKicr43tz7jnbimtWhWHdhoc1ZCVfrAjGKuOe1pO8UxYw5GPtaxF9td637obO7xaJQnkiKovBvclibebNlS5sRZ9SkBv8WjedOmQKfoi_YIMUhpHzbtHwjz_EzkcYcB5V0g1QQ0W3YQjifrACsYoj2UmfQJdyHtRjMUKxj0M_f4UrmeBjYDGq0e-DVMhQJARjCHyBCmPrnLzuIuBdg"
            width={48}
            height={48}
            data-ai-hint="logo"
          />
          <p className="text-gray-300 font-medium">Xero</p>
        </div>
      </div>
      <style jsx>{`
        @keyframes flow {
            from { transform: translateX(-100%) translateY(-50%); }
            to { transform: translateX(500%) translateY(-50%); }
        }
        .animate-\\[flow_4s_linear_infinite\\] { animation-delay: 0s; }
        .animate-\\[flow_4s_linear_infinite_2s\\] { animation-delay: 1.5s; }
      `}</style>
    </div>
  )
}
