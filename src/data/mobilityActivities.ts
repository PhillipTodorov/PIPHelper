import { Activity } from '../types';

export const mobilityActivities: Activity[] = [
  {
    id: 'planning-journeys',
    number: 13,
    name: 'Planning and following journeys',
    formQuestion: 'Question 13: Going out',
    description: 'This covers your ability to plan and follow a route to a destination.',
    whatTheyReallyAsk: 'Can you work out how to get somewhere and follow that route? This includes using public transport, working out bus or train routes, and getting to unfamiliar places.',
    mentalHealthPrompts: [
      'Does anxiety stop you from leaving your home?',
      'Do you get confused, disoriented, or lost when out?',
      'Do you panic on public transport or in crowded places?',
      'Do you need someone with you to feel safe when going out?',
      'Does paranoia or fear make it difficult to be in public?',
      'Do you avoid going to new or unfamiliar places?',
      'Do voices or other experiences make it difficult to concentrate on where you\'re going?',
      'Would you get lost without someone to guide you?',
      'Do you have agoraphobia or fear of open/public spaces?'
    ],
    descriptors: [
      {
        id: 'journeys-a',
        text: 'Can plan and follow the route of a journey unaided',
        points: 0,
        plainEnglish: 'You can plan and complete journeys to new places without any help.'
      },
      {
        id: 'journeys-b',
        text: 'Needs prompting to be able to undertake any journey to avoid overwhelming psychological distress to the claimant',
        points: 4,
        plainEnglish: 'You need encouragement to go out because of severe psychological distress.'
      },
      {
        id: 'journeys-c',
        text: 'Cannot plan the route of a journey',
        points: 8,
        plainEnglish: 'You cannot work out how to get to places.'
      },
      {
        id: 'journeys-d',
        text: 'Cannot follow the route of an unfamiliar journey without another person, assistance dog or orientation aid',
        points: 10,
        plainEnglish: 'You cannot go to unfamiliar places without someone to guide you.'
      },
      {
        id: 'journeys-e',
        text: 'Cannot undertake any journey because it would cause overwhelming psychological distress to the claimant',
        points: 10,
        plainEnglish: 'You cannot make any journey because it causes overwhelming distress.'
      },
      {
        id: 'journeys-f',
        text: 'Cannot follow the route of a familiar journey without another person, an assistance dog or an orientation aid',
        points: 12,
        plainEnglish: 'You cannot even go to familiar places without someone to guide you.'
      }
    ],
    category: 'mobility'
  },
  {
    id: 'moving-around',
    number: 14,
    name: 'Moving around',
    formQuestion: 'Question 14: Moving around',
    description: 'This covers your physical ability to move around.',
    whatTheyReallyAsk: 'How far can you walk or move before you need to stop? This is about physical ability, pain, breathlessness, or fatigue that affects how far you can move.',
    mentalHealthPrompts: [
      'Does medication cause side effects that affect your mobility (dizziness, fatigue, stiffness)?',
      'Does severe fatigue from your mental health condition limit how far you can walk?',
      'Do you struggle to move around safely because of medication side effects?',
      'Does your mental state affect your physical energy and ability to move?'
    ],
    descriptors: [
      {
        id: 'moving-a',
        text: 'Can stand and then move more than 200 metres, either aided or unaided',
        points: 0,
        plainEnglish: 'You can stand and walk more than 200 metres (about 650 feet).'
      },
      {
        id: 'moving-b',
        text: 'Can stand and then move more than 50 metres but no more than 200 metres, either aided or unaided',
        points: 4,
        plainEnglish: 'You can walk between 50 and 200 metres before needing to stop.'
      },
      {
        id: 'moving-c',
        text: 'Can stand and then move unaided more than 20 metres but no more than 50 metres',
        points: 8,
        plainEnglish: 'You can walk between 20 and 50 metres without aids before needing to stop.'
      },
      {
        id: 'moving-d',
        text: 'Can stand and then move using an aid or appliance more than 20 metres but no more than 50 metres',
        points: 10,
        plainEnglish: 'You can walk between 20 and 50 metres using a walking aid before needing to stop.'
      },
      {
        id: 'moving-e',
        text: 'Can stand and then move more than 1 metre but no more than 20 metres, either aided or unaided',
        points: 12,
        plainEnglish: 'You can only walk between 1 and 20 metres before needing to stop.'
      },
      {
        id: 'moving-f',
        text: 'Cannot, either aided or unaided, (i) stand; or (ii) move more than 1 metre',
        points: 12,
        plainEnglish: 'You cannot stand or move more than 1 metre.'
      }
    ],
    category: 'mobility'
  }
];
