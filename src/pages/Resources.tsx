import { Card } from '../components/ui';

export function Resources() {
  const resources = [
    {
      category: 'Official Information',
      items: [
        {
          name: 'GOV.UK PIP Information',
          url: 'https://www.gov.uk/pip',
          description: 'Official government information about PIP eligibility and how to claim'
        },
        {
          name: 'PIP Claim Form (PIP2)',
          url: 'https://www.gov.uk/pip/how-to-claim',
          description: 'How to get and complete the official PIP claim form'
        }
      ]
    },
    {
      category: 'Free Advice Services',
      items: [
        {
          name: 'Citizens Advice',
          url: 'https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/pip/',
          description: 'Free, independent advice on PIP claims and appeals'
        },
        {
          name: 'Mental Health and Money Advice',
          url: 'https://www.mentalhealthandmoneyadvice.org/',
          description: 'Specialist advice for people with mental health conditions'
        },
        {
          name: 'Turn2us Benefits Calculator',
          url: 'https://benefits-calculator.turn2us.org.uk/',
          description: 'Check what benefits you may be entitled to'
        }
      ]
    },
    {
      category: 'Mental Health Charities',
      items: [
        {
          name: 'Mind',
          url: 'https://www.mind.org.uk/information-support/tips-for-everyday-living/money-and-mental-health/claiming-benefits/',
          description: 'Mental health charity with benefits guides and support'
        },
        {
          name: 'Rethink Mental Illness',
          url: 'https://www.rethink.org/advice-and-information/living-with-mental-illness/money-benefits-poverty-and-mental-health/',
          description: 'Advice for people affected by severe mental illness'
        },
        {
          name: 'Hearing Voices Network',
          url: 'https://www.hearing-voices.org/',
          description: 'Support for people who hear voices or have unusual experiences'
        }
      ]
    },
    {
      category: 'Appeals and Tribunals',
      items: [
        {
          name: 'Mandatory Reconsideration Guide',
          url: 'https://www.citizensadvice.org.uk/benefits/sick-or-disabled-people-and-carers/pip/appeals/mandatory-reconsideration/',
          description: 'How to challenge a PIP decision'
        },
        {
          name: 'Social Security Tribunal',
          url: 'https://www.gov.uk/appeal-benefit-decision/submit-appeal',
          description: 'How to appeal to a tribunal if mandatory reconsideration fails'
        },
        {
          name: 'Benefits and Work',
          url: 'https://www.benefitsandwork.co.uk/',
          description: 'Detailed guides on PIP claims and appeals (subscription service)'
        }
      ]
    },
    {
      category: 'Local Support (Haringey)',
      items: [
        {
          name: 'Haringey Citizens Advice',
          url: 'https://citizensadviceharingey.org.uk/',
          description: 'Local Citizens Advice service for Haringey residents'
        },
        {
          name: 'Haringey Council Benefits Support',
          url: 'https://www.haringey.gov.uk/benefits',
          description: 'Council benefits information and support services'
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-100">
        Helpful Resources
      </h1>

      <p className="text-slate-400">
        These organisations can provide free advice and support with your PIP application.
      </p>

      {resources.map((section) => (
        <Card key={section.category}>
          <h2 className="text-lg font-semibold text-slate-100 mb-4">
            {section.category}
          </h2>
          <ul className="space-y-4">
            {section.items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-slate-700/50 -mx-2 px-2 py-2 rounded transition-colors"
                >
                  <span className="font-medium text-primary-400 hover:text-primary-300">
                    {item.name}
                  </span>
                  <span className="text-slate-500 ml-1">
                    <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                  <p className="text-sm text-slate-400 mt-0.5">
                    {item.description}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </Card>
      ))}

      <Card className="bg-blue-900/30 border-blue-700">
        <h2 className="font-semibold text-blue-200 mb-2">Need urgent help?</h2>
        <p className="text-blue-300 text-sm mb-3">
          If you're in crisis or struggling with your mental health:
        </p>
        <ul className="space-y-2 text-blue-300 text-sm">
          <li>
            <strong className="text-blue-200">Samaritans:</strong>{' '}
            <a href="tel:116123" className="underline hover:text-blue-100">116 123</a> (free, 24/7)
          </li>
          <li>
            <strong className="text-blue-200">Crisis text line:</strong> Text "SHOUT" to 85258 (free, 24/7)
          </li>
          <li>
            <strong className="text-blue-200">NHS urgent mental health helpline:</strong>{' '}
            <a href="tel:111" className="underline hover:text-blue-100">111</a>, then select option 2
          </li>
        </ul>
      </Card>
    </div>
  );
}
