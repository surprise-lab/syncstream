
'use client';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import * as React from 'react';

const codeExamples = {
  node: `const sdk = require('syncstream-sdk');

const connector = new sdk.Connector({
  name: 'My Custom Connector',
  version: '1.0.0',
});

connector.on('fetch', async (credentials) => {
  // Fetch data from your API
  const data = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': \`Bearer \${credentials.apiKey}\`
    }
  });
  return data.json();
});

connector.on('write', async (data, credentials) => {
  // Write data to your API
  await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${credentials.apiKey}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return { success: true };
});

sdk.register(connector);`,
  python: `import syncstream_sdk

class MyConnector(syncstream_sdk.Connector):
    def __init__(self):
        super().__init__(name='My Custom Connector', version='1.0.0')

    def fetch(self, credentials):
        # Fetch data from your API
        response = requests.get(
            'https://api.example.com/data',
            headers={'Authorization': f'Bearer {credentials.api_key}'}
        )
        return response.json()

    def write(self, data, credentials):
        # Write data to your API
        response = requests.post(
            'https://api.example.com/data',
            headers={'Authorization': f'Bearer {credentials.api_key}'},
            json=data
        )
        return {'success': True}

syncstream_sdk.register(MyConnector())`,
};

const CodeSnippet = ({ lang }) => {
  return (
    <pre className="bg-[#0e141a] rounded-lg p-4 text-sm text-gray-300 overflow-x-auto">
      <code>{codeExamples[lang]}</code>
    </pre>
  );
};

export default function SdkPage() {
  const [lang, setLang] = React.useState('node');

  return (
    <main className="flex-1 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Connector Development Kit
          </h1>
          <p className="mt-4 text-xl text-gray-400">
            Build, test, and publish your own connectors on the SyncStream
            Marketplace.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Getting Started
              </h2>
              <div className="space-y-6 text-gray-300 prose prose-invert max-w-none">
                <p>
                  The SyncStream SDK provides everything you need to create
                  robust, production-ready connectors. Follow these steps to
                  get started.
                </p>
                <ol className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-white">
                      1. Install the SDK
                    </h4>
                    <p>
                      Install the SDK package using your preferred package
                      manager.
                    </p>
                    <pre className="bg-[#0e141a] rounded-lg p-4 text-sm">
                      npm install syncstream-sdk
                    </pre>
                  </li>
                  <li>
                    <h4 className="font-semibold text-white">
                      2. Initialize Your Connector
                    </h4>
                    <p>
                      Create a new file and initialize your connector. You'll
                      define metadata and implement the core `fetch` and
                      `write` methods.
                    </p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-white">
                      3. Test Locally
                    </h4>
                    <p>
                      Use our CLI tool to test your connector's functionality
                      locally before submitting it to the marketplace.
                    </p>
                    <pre className="bg-[#0e141a] rounded-lg p-4 text-sm">
                      syncstream-cli test ./your-connector.js
                    </pre>
                  </li>
                </ol>
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Code Examples
              </h2>
              <div>
                <div className="flex border-b border-gray-700 mb-4">
                  <button
                    onClick={() => setLang('node')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-md ${
                      lang === 'node'
                        ? 'text-white bg-[#18232f] border-x border-t border-gray-700'
                        : 'text-gray-400 hover:bg-[#18232f]'
                    }`}
                  >
                    Node.js
                  </button>
                  <button
                    onClick={() => setLang('python')}
                    className={`px-4 py-2 text-sm font-medium rounded-t-md ${
                      lang === 'python'
                        ? 'text-white bg-[#18232f] border-x border-t border-gray-700'
                        : 'text-gray-400 hover:bg-[#18232f]'
                    }`}
                  >
                    Python
                  </button>
                </div>
                <CodeSnippet lang={lang} />
              </div>
            </section>
            <section>
              <h2 className="text-3xl font-bold tracking-tight text-white mb-6">
                Submission Process
              </h2>
              <div className="prose prose-invert max-w-none text-gray-300">
                <p>
                  Once your connector is ready, submit it for review. Our
                  team will validate its functionality, security, and performance.
                  Approved connectors will be published to the SyncStream Marketplace.
                </p>
                <Button>Submit Your Connector</Button>
              </div>
            </section>
          </div>
          <aside className="space-y-8">
            <div className="bg-[#18232f] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="flex items-center gap-3 text-primary-400 hover:text-primary-300">
                    <span className="material-symbols-outlined">
                      description
                    </span>
                    <span>Full API Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-primary-400 hover:text-primary-300">
                    <span className="material-symbols-outlined">
                      forum
                    </span>
                    <span>Developer Community Forum</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 text-primary-400 hover:text-primary-300">
                    <span className="material-symbols-outlined">
                      support
                    </span>
                    <span>Contact Developer Support</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-[#18232f] p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">
                Test Your Endpoint
              </h3>
              <div className="space-y-4">
                <div>
                  <label htmlFor="test-payload" className="text-sm font-medium text-gray-300 block mb-2">
                    Sample Payload (JSON)
                  </label>
                  <Textarea
                    id="test-payload"
                    rows={5}
                    className="bg-[#0e141a] border-gray-700 text-gray-300 font-mono text-xs"
                    defaultValue='{ "id": "123", "value": "test" }'
                  />
                </div>
                <Button className="w-full flex items-center gap-2">
                  <span className="material-symbols-outlined">send</span>
                  Send Test Request
                </Button>
                <div>
                  <label className="text-sm font-medium text-gray-300 block mb-2">
                    Response
                  </label>
                  <pre className="bg-[#0e141a] rounded-lg p-3 text-xs text-green-400 border border-gray-700 min-h-[6rem]">
                    {`{ "success": true }`}
                  </pre>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
