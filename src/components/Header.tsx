import { Hospital, LogOut, User, Activity } from 'lucide-react';

interface HeaderProps {
  username: string;
  role: string;
  onLogout: () => void;
}

export default function Header({ username, role, onLogout }: HeaderProps) {
  return (
    <header className="relative bg-gradient-to-r from-white via-slate-50 to-white shadow-lg border-b border-slate-200 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Hospital className="w-7 h-7 text-white animate-float" />
              </div>
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
            </div>
            <div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                RS Citra Husada
              </h2>
              <div className="flex items-center gap-2">
                <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                <p className="text-slate-600 text-sm font-medium">Sistem Informasi Terpadu</p>
              </div>
            </div>
          </div>

          {/* User Info and Logout */}
          <div className="flex items-center gap-3">
            {/* User Card */}
            <div className="hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all duration-300 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl shadow-md">
                  <User className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-right">
                <p className="text-slate-800 font-semibold text-sm">{username}</p>
                <div className="flex items-center gap-1.5 justify-end">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  <p className="text-slate-500 text-xs font-medium">{role}</p>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="relative group flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <LogOut className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline relative z-10 font-semibold">Logout</span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }

        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
}