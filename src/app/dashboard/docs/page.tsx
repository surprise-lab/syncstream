
'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

const userManagementEndpoints = [
  {
    id: 'get-users',
    method: 'GET',
    path: '/users',
    description: 'Retrieve a list of all users.',
    code: {
      python: `import requests
url = "https://api.syncstream.com/v1/users"
headers = {"Authorization": "Bearer YOUR_API_KEY"}
response = requests.get(url, headers=headers)
print(response.json())`,
      javascript: `fetch('https://api.syncstream.com/v1/users', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`,
      ruby: `require 'net/http'
require 'uri'
require 'json'
uri = URI.parse("https://api.syncstream.com/v1/users")
request = Net::HTTP::Get.new(uri)
request["Authorization"] = "Bearer YOUR_API_KEY"
req_options = { use_ssl: uri.scheme == "https" }
response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(request)
end
puts JSON.parse(response.body)`,
    },
  },
  {
    id: 'post-users',
    method: 'POST',
    path: '/users',
    description: 'Create a new user.',
  },
  {
    id: 'get-user-id',
    method: 'GET',
    path: '/users/{id}',
    description: 'Retrieve a specific user by ID.',
  },
  {
    id: 'put-user-id',
    method: 'PUT',
    path: '/users/{id}',
    description: 'Update an existing user.',
  },
  {
    id: 'delete-user-id',
    method: 'DELETE',
    path: '/users/{id}',
    description: 'Delete a user.',
  },
];

const projectManagementEndpoints = [
    {
        id: 'get-projects',
        method: 'GET',
        path: '/projects',
        description: 'Retrieve a list of all projects.',
    },
    {
        id: 'post-projects',
        method: 'POST',
        path: '/projects',
        description: 'Create a new project.',
    },
    {
        id: 'get-project-id',
        method: 'GET',
        path: '/projects/{id}',
        description: 'Retrieve a specific project by ID.',
    },
    {
        id: 'put-project-id',
        method: 'PUT',
        path: '/projects/{id}',
        description: 'Update an existing project.',
    },
    {
        id: 'delete-project-id',
        method: 'DELETE',
        path: '/projects/{id}',
        description: 'Delete a project.',
    },
];

const taskManagementEndpoints = [
    {
        id: 'get-tasks',
        method: 'GET',
        path: '/tasks',
        description: 'Retrieve a list of all tasks.',
    },
    {
        id: 'post-tasks',
        method: 'POST',
        path: '/tasks',
        description: 'Create a new task.',
    },
    {
        id: 'get-task-id',
        method: 'GET',
        path: '/tasks/{id}',
        description: 'Retrieve a specific task by ID.',
    },
    {
        id: 'put-task-id',
        method: 'PUT',
        path: '/tasks/{id}',
        description: 'Update an existing task.',
    },
    {
        id: 'delete-task-id',
        method: 'DELETE',
        path: '/tasks/{id}',
        description: 'Delete a task.',
    },
];


const Endpoint = ({ endpoint, openEndpoint, setOpenEndpoint }) => {
  const [lang, setLang] = React.useState('python');
  const isExpanded = openEndpoint === endpoint.id;

  const getMethodClass = (method) => {
    switch (method) {
      case 'GET': return 'method-get';
      case 'POST': return 'method-post';
      case 'PUT': return 'method-put';
      case 'DELETE': return 'method-delete';
      default: return '';
    }
  };

  return (
    <div className="rounded-md bg-[#18232f] overflow-hidden">
      <div onClick={() => setOpenEndpoint(isExpanded ? null : endpoint.id)} className="flex items-center justify-between p-4 hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
        <div className="flex items-center gap-4">
          <span className={cn("text-xs font-bold py-1 px-3 rounded-full uppercase text-white", getMethodClass(endpoint.method))}>{endpoint.method}</span>
          <p className="text-sm font-mono text-[#e0e0e0]">{endpoint.path}</p>
        </div>
        <p className="text-sm text-[#b0c7e2]">{endpoint.description}</p>
        <span className={cn("material-symbols-outlined text-[#92adc9] transition-transform", { 'rotate-180': isExpanded })}>expand_more</span>
      </div>
      {isExpanded && endpoint.code && (
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4 border-b border-[#324d67]">
            <button
              className={cn("px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200", { 'bg-[#233648] text-white': lang === 'python', 'text-[#92adc9] hover:bg-[#233648] hover:text-white': lang !== 'python' })}
              onClick={() => setLang('python')}
            >
              Python
            </button>
            <button
              className={cn("px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200", { 'bg-[#233648] text-white': lang === 'javascript', 'text-[#92adc9] hover:bg-[#233648] hover:text-white': lang !== 'javascript' })}
              onClick={() => setLang('javascript')}
            >
              JavaScript
            </button>
            <button
              className={cn("px-4 py-2 text-sm font-medium rounded-t-md transition-colors duration-200", { 'bg-[#233648] text-white': lang === 'ruby', 'text-[#92adc9] hover:bg-[#233648] hover:text-white': lang !== 'ruby' })}
              onClick={() => setLang('ruby')}
            >
              Ruby
            </button>
          </div>
          <div className="bg-[#0d1117] rounded-md p-4">
            <pre className="text-sm text-[#e0e0e0]"><code className="language-python">{endpoint.code[lang]}</code></pre>
          </div>
        </div>
      )}
    </div>
  );
};


const DocsPage = () => {
  const [openEndpoint, setOpenEndpoint] = React.useState('get-users');

  return (
    <div className="flex flex-1">
      <main className="flex-1 px-10 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-10">
            <h1 className="text-white text-4xl font-bold tracking-tight mb-2">
              Endpoints
            </h1>
            <p className="text-[#92adc9] text-lg">
              This section provides detailed information about all available API
              endpoints.
            </p>
          </header>
          <section className="space-y-12">
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight mb-6 border-b border-b-[#324d67] pb-3">
                User Management
              </h2>
              <div className="space-y-4">
                {userManagementEndpoints.map(endpoint => (
                  <Endpoint key={endpoint.id} endpoint={endpoint} openEndpoint={openEndpoint} setOpenEndpoint={setOpenEndpoint} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight mb-6 border-b border-b-[#324d67] pb-3">
                Project Management
              </h2>
              <div className="space-y-4">
                {projectManagementEndpoints.map(endpoint => (
                  <Endpoint key={endpoint.id} endpoint={endpoint} openEndpoint={openEndpoint} setOpenEndpoint={setOpenEndpoint} />
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight mb-6 border-b border-b-[#324d67] pb-3">
                Task Management
              </h2>
              <div className="space-y-4">
                {taskManagementEndpoints.map(endpoint => (
                  <Endpoint key={endpoint.id} endpoint={endpoint} openEndpoint={openEndpoint} setOpenEndpoint={setOpenEndpoint} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;
