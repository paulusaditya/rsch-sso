import { Activity, Pill, FlaskConical, ScanLine, FileText, Users, Sparkles, TrendingUp, Hospital, LogOut, User } from 'lucide-react';

interface DashboardProps {
  username: string;
  onLogout: () => void;
}

export default function Dashboard({ username, onLogout }: DashboardProps) {
  const role = username.toLowerCase().includes('dr') ? 'Dokter' : username.toLowerCase().includes('nurse') ? 'Perawat' : 'Administrator';

  const apps = [
    { icon: Activity, name: 'SIMRS', desc: 'Sistem Informasi Manajemen Rumah Sakit', notif: 5, color: '#10B981' },
    { icon: Pill, name: 'Farmasi', desc: 'Sistem Manajemen Farmasi dan Obat-obatan', notif: 12, color: '#14B8A6' },
    { icon: FlaskConical, name: 'Laboratorium', desc: 'Sistem Informasi Laboratorium Klinik', notif: 8, color: '#06B6D4' },
    { icon: ScanLine, name: 'Radiologi', desc: 'Sistem Informasi Radiologi dan Pencitraan', notif: 3, color: '#0EA5E9' },
    { icon: FileText, name: 'Rekam Medis', desc: 'Sistem Rekam Medis Elektronik Pasien', notif: 0, color: '#8B5CF6' },
    { icon: Users, name: 'Antrian', desc: 'Sistem Manajemen Antrian Pasien', notif: 24, color: '#EC4899' },
  ];

  const total = apps.reduce((sum, app) => sum + app.notif, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />
        <div className="absolute bottom-20 left-[5%] w-80 h-80 bg-gradient-to-br from-cyan-100/30 to-emerald-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-[20%] w-64 h-64 bg-gradient-to-br from-teal-100/20 to-cyan-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }} />
      </div>

      <header className="relative bg-gradient-to-r from-white via-slate-50 to-white shadow-lg border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-100 to-emerald-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Hospital className="w-7 h-7 text-white" style={{ animation: 'floatSmall 2s ease-in-out infinite' }} />
                </div>
                <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 animate-ping opacity-75" style={{ animationDuration: '2s' }} />
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">RS Citra Husada</h2>
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                  <p className="text-slate-600 text-sm font-medium">Sistem Informasi Terpadu</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
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

              <button onClick={onLogout} className="relative group flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-5 py-3 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95">
                <LogOut className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden sm:inline relative z-10 font-semibold">Logout</span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 md:px-6 py-8 relative z-10">
        <div className="mb-10" style={{ animation: 'fadeIn 0.8s ease-out forwards' }}>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-6 h-6 text-emerald-500 animate-pulse" />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Selamat Datang, {username}</h1>
              </div>
              <p className="text-slate-600 text-lg">Pilih aplikasi yang ingin Anda akses</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-800">{total}</p>
                  <p className="text-xs text-slate-500 font-medium">Total Notifikasi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-1 flex-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-transparent rounded-full" />
            <div className="flex gap-1">
              {[0, 0.3, 0.6].map((delay, i) => (
                <div key={i} className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: `${delay}s` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app, idx) => {
            const Icon = app.icon;
            return (
              <div key={app.name} style={{ opacity: 0, animation: `slideUp 0.6s ease-out ${0.1 * idx}s forwards` }}>
                <button onClick={() => alert(`Membuka ${app.name}...`)} className="group relative w-full h-full bg-white/80 backdrop-blur-sm border-2 border-slate-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 overflow-hidden text-left min-h-[200px] flex flex-col">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{ background: `linear-gradient(135deg, ${app.color}, transparent)` }}
                  />
                  
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{ border: `2px solid ${app.color}` }}
                  />

                  <div className="relative mb-5">
                    <div 
                      className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-60 transition-all duration-500 rounded-2xl"
                      style={{ backgroundColor: app.color }}
                    />
                    <div 
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                      style={{ background: `linear-gradient(135deg, ${app.color}, ${app.color}dd)` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-slate-800 font-bold text-xl mb-2 group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {app.name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed flex-1">
                      {app.desc}
                    </p>

                    <div className="flex items-center gap-2 mt-4 text-slate-400 group-hover:text-emerald-500 transition-colors duration-300">
                      <span className="text-xs font-medium">Buka Aplikasi</span>
                      <svg className="w-4 h-4 transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {app.notif > 0 && (
                    <div className="absolute top-4 right-4" style={{ animation: `scaleIn 0.4s ease-out ${0.1 * idx + 0.3}s forwards`, opacity: 0 }}>
                      <div className="relative">
                        <div className="absolute inset-0 bg-rose-500 rounded-full animate-ping opacity-75" />
                        <div className="relative bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-lg ring-2 ring-white">
                          {app.notif > 99 ? '99+' : app.notif}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center" style={{ animation: 'fadeIn 0.8s ease-out 0.8s forwards', opacity: 0 }}>
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 shadow-lg">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <p className="text-slate-600 text-sm font-medium">© 2024 RS Citra Husada - Sistem Informasi Terpadu</p>
          </div>
          
          <div className="flex items-center justify-center gap-2 mt-4">
            {[0, 0.2, 0.4, 0.6].map((delay, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-emerald-300 rounded-full animate-bounce" style={{ animationDelay: `${delay}s` }} />
            ))}
          </div>
        </div>
      </main>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatSmall { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-3px); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
      `}</style>
    </div>
  );
}