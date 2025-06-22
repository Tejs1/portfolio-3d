declare module "./components" {
  export const About: React.FC;
  export const Contact: React.FC;
  export const Experience: React.FC;
  export const Feedbacks: React.FC;
  export const Hero: React.FC;
  export const Navbar: React.FC;
  export const Tech: React.FC;
  export const Works: React.FC;
  export const StarsCanvas: React.FC;
  export const EarthCanvas: React.FC;
  export const BallCanvas: React.FC;
  export const ComputerCanvas: React.FC;
}

declare module "./components/ErrorBoundary" {
  interface ErrorBoundaryProps {
    children: React.ReactNode;
    fallback?: React.ReactNode;
  }
  
  const ErrorBoundary: React.ComponentClass<ErrorBoundaryProps>;
  export default ErrorBoundary;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}
