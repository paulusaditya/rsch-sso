import { motion } from 'framer-motion';
import { Hospital, LogOut, User } from 'lucide-react';

interface HeaderProps {
  username: string;
  role: string;
  onLogout: () => void;
}

export default function Header({ username, role, onLogout }: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md border-b border-[#E2E8F0]"
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#0066CC] to-[#1976D2] rounded-xl shadow-md">
              <Hospital className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-[#1E293B]">RS Citra Husada</h2>
              <p className="text-[#64748B] text-sm">Sistem Informasi Terpadu</p>
            </div>
          </div>

          {/* User Info and Logout */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-3 bg-[#F8FAFC] rounded-xl px-4 py-2.5">
              <div className="flex items-center justify-center w-9 h-9 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="text-right">
                <p className="text-[#1E293B] text-sm">{username}</p>
                <p className="text-[#64748B] text-xs">{role}</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onLogout}
              className="flex items-center gap-2 bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Logout</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
