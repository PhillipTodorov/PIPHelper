import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <Link to="/resources" className="text-primary-400 hover:text-primary-300 hover:underline">
              Helpful Resources
            </Link>
            <a
              href="https://www.gov.uk/pip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-400 hover:text-primary-300 hover:underline"
            >
              Official PIP Information (GOV.UK)
            </a>
          </div>

          <div className="text-sm text-slate-400 space-y-2">
            <p>
              <strong className="text-slate-300">Important:</strong> This tool helps you prepare your PIP application.
              It does not submit your application to the DWP. You will still need to
              complete and submit the official PIP2 form.
            </p>
            <p>
              This tool is for guidance only and does not constitute legal or benefits advice.
              If you need help, contact{' '}
              <a
                href="https://www.citizensadvice.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:underline"
              >
                Citizens Advice
              </a>{' '}
              or a welfare rights adviser.
            </p>
          </div>

          <p className="text-xs text-slate-500 pt-4 border-t border-slate-700">
            PIP Helper is a free, open-source tool designed to help people with mental health
            conditions navigate the PIP application process.
          </p>
        </div>
      </div>
    </footer>
  );
}
