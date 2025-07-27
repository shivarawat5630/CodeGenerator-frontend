'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { forgotPassword } from '../../lib/auth';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Code, Mail, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await forgotPassword(email);
      toast.success('OTP sent to your email! Please check your inbox.');
      // Redirect to reset password page with email parameter
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

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

          {/* Form */}
          <div className="w-full">
            <div className="text-center mb-6">
              <h1 className="text-xl font-semibold text-gray-900 mb-2">Forgot Password?</h1>
              <p className="text-sm text-gray-600">
                Enter your email address and we'll send you a reset code.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                required
                placeholder="Enter your email"
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                loading={loading}
                disabled={loading}
              >
                Send Reset Code
              </Button>
            </form>

            <div className="mt-6 text-center">
              <a 
                href="/login" 
                className="text-sm text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Sign In
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
