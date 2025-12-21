import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AppCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  notifications?: number;
  color: string;
  delay: number;
  onClick: () => void;
}

export default function AppCard({
  icon: Icon,
  name,
  description,
  notifications,
  color,
  delay,
  onClick,
}: AppCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ scale: 1.05, y: -8 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl border border-[#E2E8F0] cursor-pointer transition-all duration-300 group"
    >
      {/* Notification Badge */}
      {notifications && notifications > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.3, type: 'spring' }}
          className="absolute -top-2 -right-2 bg-gradient-to-r from-[#DC2626] to-[#EF4444] text-white w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-10"
        >
          <span className="text-xs font-semibold">{notifications}</span>
        </motion.div>
      )}

      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-110`}
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`,
        }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-[#1E293B] mb-2 group-hover:text-[#0066CC] transition-colors">
          {name}
        </h3>
        <p className="text-[#64748B] text-sm leading-relaxed">{description}</p>
      </div>

      {/* Hover Effect Border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          border: `2px solid ${color}`,
        }}
      />
    </motion.div>
  );
}
