
'use client';

import * as React from 'react';

const DocsPage = () => {
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
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-get text-white">
                      GET
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">/users</p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Retrieve a list of all users.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-post text-white">
                      POST
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">/users</p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">Create a new user.</p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-get text-white">
                      GET
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /users/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Retrieve a specific user by ID.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-put text-white">
                      PUT
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /users/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Update an existing user.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-delete text-white">
                      DELETE
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /users/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">Delete a user.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight mb-6 border-b border-b-[#324d67] pb-3">
                Project Management
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-get text-white">
                      GET
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /projects
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Retrieve a list of all projects.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-post text-white">
                      POST
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /projects
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Create a new project.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-get text-white">
                      GET
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /projects/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Retrieve a specific project by ID.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-put text-white">
                      PUT
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /projects/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Update an existing project.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-delete text-white">
                      DELETE
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /projects/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">Delete a project.</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-white text-2xl font-bold tracking-tight mb-6 border-b border-b-[#324d67] pb-3">
                Task Management
              </h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-get text-white">
                      GET
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">/tasks</p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Retrieve a list of all tasks.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-post text-white">
                      POST
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">/tasks</p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">Create a new task.</p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-get text-white">
                      GET
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /tasks/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Retrieve a specific task by ID.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-put text-white">
                      PUT
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /tasks/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">
                    Update an existing task.
                  </p>
                </div>
                <div className="flex items-center justify-between p-4 rounded-md bg-[#18232f] hover:bg-[#233648] transition-colors duration-200 cursor-pointer">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold py-1 px-3 rounded-full uppercase method-delete text-white">
                      DELETE
                    </span>
                    <p className="text-sm font-mono text-[#e0e0e0]">
                      /tasks/{'{id}'}
                    </p>
                  </div>
                  <p className="text-sm text-[#b0c7e2]">Delete a task.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default DocsPage;
