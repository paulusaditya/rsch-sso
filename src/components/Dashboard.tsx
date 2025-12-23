import React, { useState } from 'react';
import { 
  LogOut, 
  Hospital, 
  Pill, 
  TestTube, 
  FileText, 
  Users, 
  ShieldCheck,
  CircleAlert,
  Utensils,
  Settings,
  User,
  Info,
  X
} from 'lucide-react';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

interface Application {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  status: 'Siapro' | 'Beta' | 'Ready';
  url: string;
  gradient: string;
  access?: string;
  owner?: string;
  notifications: number;
}

export default function Dashboard({ username, onLogout }: DashboardProps) {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const role = username.toLowerCase().includes('dr')
    ? 'Dokter'
    : username.toLowerCase().includes('nurse')
    ? 'Perawat'
    : 'Administrator';
  
  const nip = '0000.00000';

  const applications: Application[] = [
    {
      id: '1',
      name: 'Application Control-Client',
      description: 'Aplikasi control-client untuk merevisi integrasi sistem untuk operasi akses sistem.',
      icon: ShieldCheck,
      status: 'Siapro',
      access: 'Akses: Control-Client',
      owner: 'Akses: Davin & Testing',
      url: '#app-control',
      gradient: 'from-blue-500 to-blue-600',
      notifications: 5
    },
    {
      id: '2',
      name: 'Incident Reporting System',
      description: 'Sistem pelaporan dan konfirmasi penyelesaian insiden laporan.',
      icon: CircleAlert,
      status: 'Beta',
      access: 'Akses: Medical',
      owner: 'Akses: Reputational-Patient',
      url: '#incident',
      gradient: 'from-orange-500 to-orange-600',
      notifications: 12
    },
    {
      id: '3',
      name: 'Pharmacy Management System',
      description: 'Sistem manajemen apotek dan pengelolaan obat serta inventory farmasi.',
      icon: Pill,
      status: 'Ready',
      access: 'Akses: Medicine-Management',
      owner: 'Akses: Farmasi & Obat',
      url: '#pharmacy',
      gradient: 'from-emerald-500 to-emerald-600',
      notifications: 8
    },
    {
      id: '4',
      name: 'SIMGIZI - Sistem Informasi Manajemen',
      description: 'Aplikasi manajemen indikasi utilitas terpakai untuk diet dan asupan nutrisi pasien rawat inap.',
      icon: Utensils,
      status: 'Ready',
      access: 'Akses: Nutrition',
      owner: 'Akses: Heallo-Management-IG',
      url: '#simgizi',
      gradient: 'from-teal-500 to-teal-600',
      notifications: 3
    },
    {
      id: '5',
      name: 'Tamasudeva - Eticom Management Unit',
      description: 'Aplikasi tamasudeva untuk control layanan unit berdasarkan eticom unit.',
      icon: Hospital,
      status: 'Beta',
      access: 'Akses: #unitx',
      owner: 'Akses: Management-Unit',
      url: '#tamasudeva',
      gradient: 'from-purple-500 to-purple-600',
      notifications: 0
    },
    {
      id: '6',
      name: 'Laboratorium Klinik',
      description: 'Sistem Informasi Laboratorium untuk pengelolaan hasil tes dan pemeriksaan.',
      icon: TestTube,
      status: 'Ready',
      access: 'Akses: Laboratory',
      owner: 'Akses: Lab-Testing',
      url: '#lab',
      gradient: 'from-indigo-500 to-indigo-600',
      notifications: 24
    },
    {
      id: '7',
      name: 'Rekam Medis Elektronik',
      description: 'Electronic Medical Record System untuk dokumentasi dan arsip pasien.',
      icon: FileText,
      status: 'Ready',
      access: 'Akses: Medical-Records',
      owner: 'Akses: EMR-System',
      url: '#rekam-medis',
      gradient: 'from-cyan-500 to-cyan-600',
      notifications: 7
    },
    {
      id: '8',
      name: 'Sistem Antrian Pasien',
      description: 'Manajemen antrian dan registrasi pasien untuk poliklinik dan layanan.',
      icon: Users,
      status: 'Ready',
      access: 'Akses: Queue-Management',
      owner: 'Akses: Patient-Services',
      url: '#antrian',
      gradient: 'from-pink-500 to-pink-600',
      notifications: 15
    }
  ];

  const assignedRoles = [
    { app: 'Aplikasi Contoh Client', role: 'Administrator' },
    { app: 'Tamasudeva - Sistem Manajemen Unit', role: 'Administrator Tamasudeva' },
    { app: 'Incident Reporting System', role: 'Administrator Incident Report' },
    { app: 'Pharmacy Management System', role: 'Administrator Pharmacy' }
  ];

  const handleAppClick = (app: Application) => {
    alert(`Membuka aplikasi ${app.name}...`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden pb-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-teal-300/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }} />
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowInfoModal(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-2xl">
              <h2 className="text-2xl font-bold text-gray-900">View Admin Aplikasi</h2>
              <button 
                onClick={() => setShowInfoModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Profile Identity */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Profile Identity</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Identitas profil akses yang digunakan untuk mengelompokkan hak akses lintas aplikasi.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Name</label>
                    <input 
                      type="text" 
                      value="Admin Aplikasi"
                      readOnly
                      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profile Slug</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        value="admin_app"
                        readOnly
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Dipakai internal oleh sistem IAM. Hanya huruf kecil, angka, dash, dan underscore.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" disabled />
                    <div>
                      <p className="text-sm font-medium text-gray-700">System Profile</p>
                      <p className="text-xs text-gray-500">
                        Jika aktif, profil ini dianggap kritikal dan biasanya tidak dihapus / diubah oleh user biasa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" defaultChecked />
                    <div>
                      <p className="text-sm font-medium text-gray-700">Active</p>
                      <p className="text-xs text-gray-500">
                        Nonaktifkan untuk menghentikan pemakaian profil tanpa menghapus mapping user & role.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Roles & Permissions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Roles & Permissions</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Mapping profile ini ke role-role aplikasi. Satu profile bisa punya banyak role lintas aplikasi.
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assigned Roles (Application — Role)
                  </label>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 space-y-2">
                    {assignedRoles.map((item, idx) => (
                      <div key={idx} className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md text-sm mr-2 mb-2">
                        <span>{item.app} — {item.role}</span>
                        <button className="text-blue-500 hover:text-blue-700">×</button>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Pilih kombinasi aplikasi + role yang akan dibungkus oleh profile ini.
                  </p>
                </div>
              </div>

              {/* Metadata & Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Metadata & Description</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Dokumentasi singkat mengenai tujuan, ruang lingkup, dan siapa yang menggunakan profile ini.
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea 
                    rows={3}
                    value="Profil akses admin untuk aplikasi lainnya."
                    readOnly
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        {/* Logo and Title - Full Width */}
        <div className="flex items-center gap-3 mb-8" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
          <div className="bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 p-2.5 rounded-xl shadow-lg relative">
            <Hospital className="w-7 h-7 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl blur-lg opacity-50 -z-10"></div>
          </div>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
              UNIFIED ACCESS
            </h1>
            <p className="text-sm text-gray-600">
              Portal akses terpadu Rumah Sakit Citra Husada Jember
            </p>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-8" style={{ animation: 'fadeIn 0.8s ease-out 0.2s forwards', opacity: 0 }}>
          <p className="text-gray-600 text-sm md:text-base mb-2">SELAMAT DATANG, {username.toUpperCase()}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Satu pintu untuk semua <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">aplikasi layanan.</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Masuk sekali, lalu akses seluruh aplikasi operasional rumah sakit dengan aman: mutu, insiden, dokumen, hingga analitik manajemen.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Column - Applications Grid */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Applications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
              {applications.map((app, index) => {
                const Icon = app.icon;
                return (
                  <div
                    key={app.id}
                    style={{ opacity: 0, animation: `slideUp 0.6s ease-out ${0.1 * index}s forwards` }}
                  >
                    <button
                      onClick={() => handleAppClick(app)}
                      className="relative cursor-pointer group w-full text-left h-full"
                    >
                      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl border border-blue-100/50 transition-all duration-300 h-full relative overflow-hidden hover:scale-105 active:scale-95">
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                        {/* Notification Badge */}
                        {app.notifications > 0 && (
                          <div className="absolute top-3 right-3 z-20">
                            <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shadow-lg">
                              {app.notifications > 99 ? '99+' : app.notifications}
                            </div>
                          </div>
                        )}

                        {/* Icon */}
                        <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${app.gradient} text-white shadow-lg mb-4 relative z-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <Icon className="w-8 h-8" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${app.gradient} rounded-xl blur-md opacity-50 -z-10`}></div>
                        </div>

                        {/* Content */}
                        <div className="mb-4 relative z-10">
                          <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                            {app.name}
                          </h3>
                          <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                            {app.description}
                          </p>
                          
                          {/* Access Info */}
                          <div className="space-y-1.5">
                            {app.access && (
                              <div className="flex items-center gap-2">
                                <span className="text-xs border border-blue-200 text-blue-700 bg-blue-50/80 backdrop-blur-sm px-2 py-1 rounded">
                                  {app.access}
                                </span>
                              </div>
                            )}
                            {app.owner && (
                              <div className="flex items-center gap-2">
                                <span className="text-xs border border-cyan-200 text-cyan-700 bg-cyan-50/80 backdrop-blur-sm px-2 py-1 rounded">
                                  {app.owner}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - User Info Card */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="lg:sticky lg:top-6" style={{ animation: 'slideUp 0.6s ease-out forwards' }}>
              <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-blue-100/50">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Info Akun</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setShowInfoModal(true)}
                      className="w-10 h-10 bg-gradient-to-br from-blue-100 to-cyan-100 hover:from-blue-200 hover:to-cyan-200 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                      title="Lihat Detail Profil"
                    >
                      <Info className="w-5 h-5 text-blue-600" />
                    </button>
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Username</label>
                    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 font-medium">
                      {username}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">NIP</label>
                    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900">
                      {nip}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-600 mb-2">Role</label>
                    <div className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 flex items-center justify-between">
                      <span>{role}</span>
                      <span className="bg-emerald-500 text-white text-xs px-2.5 py-1 rounded-full font-medium">Active</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 mb-3 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                  <Settings className="w-5 h-5" />
                  Admin Panel
                </button>

                <button 
                  onClick={onLogout}
                  className="w-full bg-white border-2 border-red-200 text-red-600 hover:bg-red-50 hover:border-red-300 font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:scale-105 active:scale-95"
                >
                  <LogOut className="w-5 h-5" />
                  Keluar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center" style={{ animation: 'fadeIn 0.8s ease-out 1.5s forwards', opacity: 0 }}>
          <p className="text-sm text-gray-500">
            Klik pada aplikasi untuk mengakses sistem • Login sekali untuk semua akses
          </p>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}