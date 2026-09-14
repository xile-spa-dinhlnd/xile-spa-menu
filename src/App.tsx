import './index.css'
import { MenuFlipBook } from './components/book'


function App() {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center justify-center relative overflow-hidden">
      {/* Nền chính: gradient tối đa lớp tạo chiều sâu */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(72,45,15,0.9) 0%, rgba(35,20,5,0.95) 60%, #1a0e04 100%)
          `,
        }}
      />
      {/* Spotlight từ trên chiếu xuống tạo hiệu ứng sân khấu */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 50% 40% at 50% 0%, rgba(180,130,50,0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Sách lật Menu */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center justify-center">
        <MenuFlipBook />
      </main>
    </div>
  )
}

export default App
