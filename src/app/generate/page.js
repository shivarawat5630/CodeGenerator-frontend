'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { isAuthenticated, getCurrentUser, logout } from '../../lib/auth';
import { aiAPI, exportAPI } from '../../lib/api';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Code, Download, Copy, LogOut, Sparkles, Eye, EyeOff } from 'lucide-react';

export default function GeneratePage() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(null);
  const [showPreview, setShowPreview] = useState(true);
  const [copying, setCopying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    setUser(getCurrentUser());
  }, [router]);

  const handleGenerate = async (e) => {
    e.preventDefault();
    
    if (!prompt.trim()) {
      toast.error('Please enter a prompt');
      return;
    }

    setLoading(true);
    try {
      console.log('Sending request to:', `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'}/generate`);
      console.log('Request data:', { prompt: prompt.trim() });
      
      const response = await aiAPI.generate({ prompt: prompt.trim() });
      console.log('Response received:', response.data);
      setGeneratedCode(response.data);
      toast.success('Code generated successfully!');
    } catch (error) {
      console.error('Generation error details:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        statusText: error.response?.statusText
      });
      const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message || 'Failed to generate code';
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async (type) => {
    setCopying(true);
    try {
      const text = type === 'jsx' ? generatedCode.jsx : generatedCode.css;
      await navigator.clipboard.writeText(text);
      toast.success(`${type.toUpperCase()} copied to clipboard!`);
    } catch (error) {
      toast.error('Failed to copy to clipboard');
    } finally {
      setCopying(false);
    }
  };

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await exportAPI.download(generatedCode._id);
      const blob = new Blob([response.data], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `component-${generatedCode._id}.zip`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      toast.success('Component downloaded successfully!');
    } catch (error) {
      toast.error('Failed to download component');
    } finally {
      setDownloading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  if (!user) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">CodeGenerator</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <Button
                onClick={handleLogout}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Input */}
          <div className="space-y-6">
            {/* Prompt Input */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Generate Component</h2>
              <form onSubmit={handleGenerate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Describe your component
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="e.g., Create a modern navigation bar with logo, menu items, and a mobile hamburger menu"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    rows={4}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                  loading={loading}
                  disabled={loading}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate Component
                </Button>
              </form>
            </div>

            {/* Tips */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tips for Better Results</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Be specific about the component's purpose and functionality</li>
                <li>• Mention any specific styling preferences (colors, layout, etc.)</li>
                <li>• Include responsive design requirements if needed</li>
                <li>• Specify if you want animations or interactions</li>
              </ul>
            </div>

            {/* Example Prompts */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Example Prompts</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setPrompt("Create a modern hero section with a gradient background, heading, description, and call-to-action button")}
                  className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  Modern hero section with CTA
                </button>
                <button
                  onClick={() => setPrompt("Build a responsive card component with image, title, description, and action buttons")}
                  className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  Responsive card component
                </button>
                <button
                  onClick={() => setPrompt("Create a contact form with name, email, message fields and submit button with validation")}
                  className="block w-full text-left p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-sm text-gray-700 transition-colors"
                >
                  Contact form with validation
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Generated Code */}
          <div className="space-y-6">
            {generatedCode && (
              <>
                {/* Code Display */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Generated Code</h2>
                    <div className="flex space-x-2">
                      <Button
                        onClick={() => setShowPreview(!showPreview)}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-lg text-sm"
                      >
                        {showPreview ? <EyeOff className="w-4 h-4 mr-2" /> : <Eye className="w-4 h-4 mr-2" />}
                        {showPreview ? 'Hide' : 'Show'} Preview
                      </Button>
                      <Button
                        onClick={() => handleCopy('jsx')}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm"
                        loading={copying}
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy JSX
                      </Button>
                      <Button
                        onClick={handleDownload}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg text-sm"
                        loading={downloading}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  {/* JSX Code */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">JSX Component</h3>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
                      <code className="text-gray-800">{generatedCode.jsx}</code>
                    </pre>
                  </div>

                  {/* CSS Code */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-2">CSS Styles</h3>
                    <pre className="bg-gray-50 p-4 rounded-lg text-sm overflow-x-auto">
                      <code className="text-gray-800">{generatedCode.css}</code>
                    </pre>
                  </div>
                </div>

                {/* Live Preview */}
                {showPreview && (
                  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Preview</h3>
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                      <div 
                        dangerouslySetInnerHTML={{ 
                          __html: `
                            <style>${generatedCode.css}</style>
                            ${generatedCode.jsx}
                          ` 
                        }} 
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            {!generatedCode && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="text-center py-12">
                  <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No Code Generated Yet</h3>
                  <p className="text-gray-600">Enter a prompt and click "Generate Component" to create your first component.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
