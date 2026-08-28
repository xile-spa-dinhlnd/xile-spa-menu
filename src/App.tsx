import './index.css'
import { MenuFlipBook } from './components/MenuFlipBook'


function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh">
      {/* Background wood texture overlay */}
      <div
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(92, 61, 30, 0.3) 2px,
            rgba(92, 61, 30, 0.3) 3px
          )`,
        }}
      />

      {/* 
        Sách lật Menu 
        Cần z-10 để đè lên background pattern 
      */}
      <div className="relative z-10 w-full h-full flex-1 flex flex-col justify-center">
        <MenuFlipBook />
      </div>
    </div>
  )
}

export default App
