'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../../lib/auth';
import AuthForm from '../../components/AuthForm';
import { Code } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/generate');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">CodeGenerator</span>
            </div>
          </div>

          {/* Auth Form */}
          <AuthForm mode="login" />
        </div>
      </div>
    </div>
  );
}
