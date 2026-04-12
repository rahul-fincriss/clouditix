const NetworkDecoration = ({ className = "" }: { className?: string }) => (
  <svg className={`absolute pointer-events-none opacity-10 ${className}`} width="600" height="400" viewBox="0 0 600 400" fill="none">
    <circle cx="100" cy="80" r="3" fill="hsl(225 80% 56%)" />
    <circle cx="200" cy="150" r="2" fill="hsl(265 60% 50%)" />
    <circle cx="350" cy="100" r="4" fill="hsl(225 80% 56%)" />
    <circle cx="450" cy="200" r="2" fill="hsl(265 60% 50%)" />
    <circle cx="500" cy="80" r="3" fill="hsl(225 80% 56%)" />
    <circle cx="150" cy="300" r="2" fill="hsl(225 80% 56%)" />
    <circle cx="400" cy="320" r="3" fill="hsl(265 60% 50%)" />
    <line x1="100" y1="80" x2="200" y2="150" stroke="hsl(225 80% 56%)" strokeWidth="0.5" />
    <line x1="200" y1="150" x2="350" y2="100" stroke="hsl(265 60% 50%)" strokeWidth="0.5" />
    <line x1="350" y1="100" x2="450" y2="200" stroke="hsl(225 80% 56%)" strokeWidth="0.5" />
    <line x1="450" y1="200" x2="500" y2="80" stroke="hsl(265 60% 50%)" strokeWidth="0.5" />
    <line x1="100" y1="80" x2="150" y2="300" stroke="hsl(225 80% 56%)" strokeWidth="0.5" />
    <line x1="350" y1="100" x2="400" y2="320" stroke="hsl(265 60% 50%)" strokeWidth="0.5" />
  </svg>
);

export default NetworkDecoration;
