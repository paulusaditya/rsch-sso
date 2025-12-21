import { motion } from 'framer-motion';
import {
  Activity,
  Pill,
  FlaskConical,
  ScanLine,
  FileText,
  Users,
} from 'lucide-react';
import Header from './Header';
import AppCard from './AppCard';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

const applications = [
  {
    icon: Activity,
    name: 'SIMRS',
    description: 'Sistem Informasi Manajemen Rumah Sakit',
    notifications: 5,
    color: '#0066CC',
  },
  {
    icon: Pill,
    name: 'Farmasi',
    description: 'Sistem Manajemen Farmasi dan Obat-obatan',
    notifications: 12,
    color: '#10B981',
  },
  {
    icon: FlaskConical,
    name: 'Laboratorium',
    description: 'Sistem Informasi Laboratorium Klinik',
    notifications: 8,
    color: '#8B5CF6',
  },
  {
    icon: ScanLine,
    name: 'Radiologi',
    description: 'Sistem Informasi Radiologi dan Pencitraan',
    notifications: 3,
    color: '#F59E0B',
  },
  {
    icon: FileText,
    name: 'Rekam Medis',
    description: 'Sistem Rekam Medis Elektronik Pasien',
    notifications: 0,
    color: '#06B6D4',
  },
  {
    icon: Users,
    name: 'Antrian',
    description: 'Sistem Manajemen Antrian Pasien',
    notifications: 24,
    color: '#EC4899',
  },
];

export default function Dashboard({ username, onLogout }: DashboardProps) {
  // Determine role based on username (simple mock logic)
  const role = username.toLowerCase().includes('dr')
    ? 'Dokter'
    : username.toLowerCase().includes('nurse')
    ? 'Perawat'
    : 'Administrator';

  const handleAppClick = (appName: string) => {
    alert(`Membuka aplikasi ${appName}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
      <Header username={username} role={role} onLogout={onLogout} />

      <main className="container mx-auto px-4 md:px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-[#1E293B] mb-2">
            Selamat Datang, {username}
          </h1>
          <p className="text-[#64748B]">
            Pilih aplikasi yang ingin Anda akses
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <AppCard
              key={app.name}
              icon={app.icon}
              name={app.name}
              description={app.description}
              notifications={app.notifications}
              color={app.color}
              delay={0.1 * index}
              onClick={() => handleAppClick(app.name)}
            />
          ))}
        </div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-[#94A3B8] text-sm">
            © 2024 RS Citra Husada - Sistem Informasi Terpadu
          </p>
        </motion.div>
      </main>
    </div>
  );
}
