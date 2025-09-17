const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-animated opacity-50" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
      
      {/* Geometric Shapes */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/10 rounded-full animate-spin-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-accent/10 rounded-full animate-pulse-slow" />
      <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-muted/20 rotate-45 animate-bounce-slow" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
    </div>
  );
};

export default BackgroundAnimation;