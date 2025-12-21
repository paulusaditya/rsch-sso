import { useState } from 'react';
import { Hospital, Lock, User, Heart, Activity, Stethoscope } from 'lucide-react';

interface LoginProps {
  onLogin: (username: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 p-4 md:p-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating medical icons */}
        <div className="absolute top-20 left-[10%] text-emerald-200/30 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0s' }}>
          <Heart className="w-16 h-16" />
        </div>
        <div className="absolute top-40 right-[15%] text-teal-200/30 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
          <Activity className="w-20 h-20" />
        </div>
        <div className="absolute bottom-32 left-[20%] text-cyan-200/30 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
          <Stethoscope className="w-14 h-14" />
        </div>
        <div className="absolute bottom-20 right-[10%] text-emerald-200/30 animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>
          <Hospital className="w-12 h-12" />
        </div>

        {/* Animated gradient orbs */}
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-emerald-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/10 to-emerald-100/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Login Container */}
      <div className="w-full max-w-md relative z-10">
        {/* Logo and Title */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full mb-6 shadow-2xl animate-float">
            <Hospital className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-3">
            RS Citra Husada
          </h1>
          <p className="text-slate-500 text-lg">Single Sign-On Portal</p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-400 mx-auto rounded-full animate-pulse" />
        </div>

        {/* Login Form */}
        <div className="space-y-8">
          {/* Username Input */}
          <div className="relative group">
            <label htmlFor="username" className="block text-slate-600 font-medium mb-3 ml-1">
              Username / NIP
            </label>
            <div className="relative">
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                focusedInput === 'username' ? 'text-emerald-500' : 'text-slate-400'
              }`}>
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onFocus={() => setFocusedInput('username')}
                onBlur={() => setFocusedInput(null)}
                placeholder="Masukkan username atau NIP"
                className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-slate-200 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:pl-12"
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 ${
                focusedInput === 'username' ? 'w-full' : 'w-0'
              }`} />
            </div>
          </div>

          {/* Password Input */}
          <div className="relative group">
            <label htmlFor="password" className="block text-slate-600 font-medium mb-3 ml-1">
              Password
            </label>
            <div className="relative">
              <div className={`absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                focusedInput === 'password' ? 'text-emerald-500' : 'text-slate-400'
              }`}>
                <Lock className="w-5 h-5" />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput(null)}
                placeholder="Masukkan password"
                className="w-full pl-10 pr-4 py-4 bg-transparent border-b-2 border-slate-200 transition-all duration-300 outline-none text-slate-700 placeholder:text-slate-400 focus:border-emerald-500 focus:pl-12"
                required
              />
              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 transition-all duration-300 ${
                focusedInput === 'password' ? 'w-full' : 'w-0'
              }`} />
            </div>
          </div>

          {/* Login Button */}
          <button
            onClick={handleSubmit}
            className="w-full relative group overflow-hidden bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 mt-8 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 font-semibold text-lg">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 text-sm">
            Sistem Informasi Terpadu RS Citra Husada
          </p>
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}