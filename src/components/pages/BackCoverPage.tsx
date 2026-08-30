import logoImage from "@/assets/xile_spa_logo.png";

export const BackCoverPage: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden text-zen-charcoal bg-paper-inner">
      {/* Vignette viền */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 60%, rgba(100,60,10,0.1) 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <img
          src={logoImage}
          alt="Xile Spa Logo"
          className="w-48 md:w-64 h-auto opacity-90 drop-shadow-sm mix-blend-multiply"
        />
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="font-script text-4xl text-zen-brown opacity-90 drop-shadow-sm">
            Hẹn gặp lại
          </p>
        </div>
      </div>
    </div>
  );
};
