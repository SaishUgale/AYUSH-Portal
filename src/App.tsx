import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import DashboardLayout from './components/dashboard/DashboardLayout';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import StartupMetrics from './components/dashboard/StartupMetrics';
import KnowledgeBase from './components/knowledge/KnowledgeBase';
import RegistrationForm from './components/startup/RegistrationForm';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <div className="flex justify-center">
              <Leaf className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              AYUSH Startup Portal
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 font-medium text-indigo-600 hover:text-indigo-500"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
          {isLogin ? <LoginForm /> : <SignUpForm />}
        </div>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <StartupMetrics />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RegistrationForm />
          <KnowledgeBase />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default App;