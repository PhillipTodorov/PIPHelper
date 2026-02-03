import { Link } from 'react-router-dom';
import { useAccessibility } from '../../context/AccessibilityContext';
import { usePWAInstall } from '../../hooks/usePWAInstall';

export function Header() {
  const { adjustTextSize } = useAccessibility();
  const { canInstall, install } = usePWAInstall();

  return (
    <header className="bg-slate-800 border-b border-slate-700 sticky top-0 z-10">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <span className="text-xl font-semibold text-slate-100">PIP Helper</span>
          </Link>

          <nav className="flex items-center gap-2" aria-label="Accessibility controls">
            {canInstall && (
              <button
                onClick={install}
                className="px-3 py-1.5 bg-primary-500 hover:bg-primary-400 text-white text-sm font-medium rounded-lg transition-colors"
                aria-label="Install app"
              >
                Install App
              </button>
            )}
            <button
              onClick={() => adjustTextSize(-0.1)}
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
              aria-label="Decrease text size"
              title="Decrease text size"
            >
              <span className="text-sm font-medium">A-</span>
            </button>
            <button
              onClick={() => adjustTextSize(0.1)}
              className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-700 rounded-lg"
              aria-label="Increase text size"
              title="Increase text size"
            >
              <span className="text-lg font-medium">A+</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
