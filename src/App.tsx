import './index.css'
import { MenuFlipBook } from './components/MenuFlipBook'


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      {/* Nền chính: nâu ấm trung bình — hài hòa với cả trang bìa beige lẫn trang ruột tối */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, #3A2510 0%, #2C1C0A 55%, #221508 100%)',
        }}
      />
      {/* Vân gỗ dọc rất tinh tế */}
      <div
        className="fixed inset-0 opacity-8 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 3px,
            rgba(80, 50, 15, 0.3) 3px,
            rgba(80, 50, 15, 0.3) 4px
          )`,
        }}
      />

      {/* Sách lật Menu */}
      <div className="relative z-10 w-full h-full flex-1 flex flex-col justify-center">
        <MenuFlipBook />
      </div>
    </div>
  )
}

export default App
