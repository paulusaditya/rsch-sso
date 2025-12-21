import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hospital, Lock, User } from 'lucide-react';

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0066CC] via-[#1976D2] to-[#2196F3] p-4 md:p-6 relative overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#10B981] rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
        />
      </div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          {/* Logo and Title */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#0066CC] to-[#1976D2] rounded-2xl mb-4 shadow-lg">
              <Hospital className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-[#1E293B] mb-2">RS Citra Husada</h1>
            <p className="text-[#64748B]">Single Sign-On Portal</p>
          </motion.div>

          {/* Login Form */}
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            {/* Username Input */}
            <div>
              <label htmlFor="username" className="block text-[#334155] mb-2">
                Username / NIP
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
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
                  className={`w-full pl-12 pr-4 py-3.5 bg-[#F8FAFC] border-2 rounded-xl transition-all duration-300 outline-none ${
                    focusedInput === 'username'
                      ? 'border-[#0066CC] bg-white shadow-md'
                      : 'border-transparent hover:border-[#CBD5E1]'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-[#334155] mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
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
                  className={`w-full pl-12 pr-4 py-3.5 bg-[#F8FAFC] border-2 rounded-xl transition-all duration-300 outline-none ${
                    focusedInput === 'password'
                      ? 'border-[#0066CC] bg-white shadow-md'
                      : 'border-transparent hover:border-[#CBD5E1]'
                  }`}
                  required
                />
              </div>
            </div>

            {/* Login Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#0066CC] to-[#1976D2] text-white py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-6"
            >
              Login
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-center"
          >
            <p className="text-[#94A3B8] text-sm">
              Sistem Informasi Terpadu RS Citra Husada
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
