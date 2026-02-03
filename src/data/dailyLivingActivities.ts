import { Activity } from '../types';

export const dailyLivingActivities: Activity[] = [
  {
    id: 'preparing-food',
    number: 3,
    name: 'Preparing food',
    formQuestion: 'Question 3: Preparing food',
    description: 'This covers your ability to prepare a simple cooked meal from fresh ingredients.',
    whatTheyReallyAsk: 'Can you plan, prepare, and cook a simple one-course meal for one person? This includes peeling and chopping vegetables, following a recipe, using a cooker safely, and knowing when food is cooked.',
    mentalHealthPrompts: [
      'Do you lack the motivation or energy to cook, even when you know you should eat?',
      'Do you forget that you\'ve started cooking, leaving food to burn?',
      'Does anxiety make it difficult to concentrate on cooking safely?',
      'Do voices, paranoia, or other symptoms distract you while cooking?',
      'Do you find it hard to plan what to cook or follow recipe steps?',
      'Have you stopped cooking because you don\'t see the point?',
      'Do you need someone to remind or encourage you to prepare food?'
    ],
    descriptors: [
      {
        id: 'preparing-food-a',
        text: 'Can prepare and cook a simple meal unaided',
        points: 0,
        plainEnglish: 'You can prepare and cook a simple meal without any help, aids, or prompting.'
      },
      {
        id: 'preparing-food-b',
        text: 'Needs to use an aid or appliance to be able to either prepare or cook a simple meal',
        points: 2,
        plainEnglish: 'You need to use special equipment (like a perching stool, easy-grip utensils, or timers) to prepare or cook food.'
      },
      {
        id: 'preparing-food-c',
        text: 'Cannot cook a simple meal using a conventional cooker but is able to do so using a microwave',
        points: 2,
        plainEnglish: 'You can only use a microwave to cook, not a regular cooker (hob or oven).'
      },
      {
        id: 'preparing-food-d',
        text: 'Needs prompting to be able to either prepare or cook a simple meal',
        points: 2,
        plainEnglish: 'You need someone to remind or encourage you to prepare or cook food.'
      },
      {
        id: 'preparing-food-e',
        text: 'Needs supervision or assistance to either prepare or cook a simple meal',
        points: 4,
        plainEnglish: 'You need someone to watch over you or help you while preparing or cooking food.'
      },
      {
        id: 'preparing-food-f',
        text: 'Cannot prepare and cook food',
        points: 8,
        plainEnglish: 'You cannot prepare or cook food at all, even with help.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'taking-nutrition',
    number: 4,
    name: 'Taking nutrition',
    formQuestion: 'Question 4: Eating and drinking',
    description: 'This covers your ability to eat and drink.',
    whatTheyReallyAsk: 'Can you cut up food, put it in your mouth, chew and swallow it? Can you drink fluids safely? This is about the physical act of eating and drinking, not preparing food.',
    mentalHealthPrompts: [
      'Do you forget to eat or drink because you\'re preoccupied with your thoughts?',
      'Does medication affect your appetite or ability to eat?',
      'Do you need someone to remind you to eat or drink?',
      'Does anxiety or low mood make it difficult to eat?',
      'Do you find eating in front of others distressing?',
      'Do voices or paranoia affect what or whether you eat?'
    ],
    descriptors: [
      {
        id: 'nutrition-a',
        text: 'Can take nutrition unaided',
        points: 0,
        plainEnglish: 'You can eat and drink without any help.'
      },
      {
        id: 'nutrition-b',
        text: 'Needs either (i) to use an aid or appliance to be able to take nutrition; or (ii) supervision to be able to take nutrition; or (iii) assistance to be able to cut up food',
        points: 2,
        plainEnglish: 'You need special cutlery, supervision while eating, or help cutting up food.'
      },
      {
        id: 'nutrition-c',
        text: 'Needs a therapeutic source to be able to take nutrition',
        points: 2,
        plainEnglish: 'You need tube feeding or a similar medical method to get nutrition.'
      },
      {
        id: 'nutrition-d',
        text: 'Needs prompting to be able to take nutrition',
        points: 4,
        plainEnglish: 'You need someone to remind or encourage you to eat or drink.'
      },
      {
        id: 'nutrition-e',
        text: 'Needs assistance to be able to manage a therapeutic source to take nutrition',
        points: 6,
        plainEnglish: 'You need help managing tube feeding or similar medical nutrition.'
      },
      {
        id: 'nutrition-f',
        text: 'Cannot convey food and drink to their mouth and needs another person to do so',
        points: 10,
        plainEnglish: 'You cannot bring food or drink to your mouth and need someone to feed you.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'managing-therapy',
    number: 5,
    name: 'Managing therapy or monitoring a health condition',
    formQuestion: 'Question 5: Managing treatments',
    description: 'This covers taking medication and monitoring health conditions.',
    whatTheyReallyAsk: 'Can you take your medication correctly? Can you do therapy exercises or treatments at home? Can you monitor things like blood pressure or blood sugar levels?',
    mentalHealthPrompts: [
      'Do you forget to take your medication without reminders?',
      'Do you sometimes choose not to take medication because of side effects or how it makes you feel?',
      'Do you need someone to supervise you taking medication to ensure you take it correctly?',
      'Is it difficult to attend therapy appointments due to anxiety or other symptoms?',
      'Do you struggle to follow a therapy routine at home?',
      'Do you need help understanding or remembering when to take different medications?'
    ],
    descriptors: [
      {
        id: 'therapy-a',
        text: 'Either (i) does not receive medication or therapy or need to monitor a health condition; or (ii) can manage medication or therapy or monitor a health condition unaided',
        points: 0,
        plainEnglish: 'You don\'t need medication/therapy, or you can manage it completely by yourself.'
      },
      {
        id: 'therapy-b',
        text: 'Needs either (i) to use an aid or appliance to be able to manage medication; or (ii) supervision, prompting or assistance to be able to manage medication or monitor a health condition',
        points: 1,
        plainEnglish: 'You need pill boxes, reminders, or someone to prompt/help you with medication.'
      },
      {
        id: 'therapy-c',
        text: 'Needs supervision, prompting or assistance to be able to manage therapy that takes no more than 3.5 hours a week',
        points: 2,
        plainEnglish: 'You need help with therapy that takes up to 3.5 hours per week.'
      },
      {
        id: 'therapy-d',
        text: 'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 3.5 but no more than 7 hours a week',
        points: 4,
        plainEnglish: 'You need help with therapy that takes 3.5-7 hours per week.'
      },
      {
        id: 'therapy-e',
        text: 'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 7 but no more than 14 hours a week',
        points: 6,
        plainEnglish: 'You need help with therapy that takes 7-14 hours per week.'
      },
      {
        id: 'therapy-f',
        text: 'Needs supervision, prompting or assistance to be able to manage therapy that takes more than 14 hours a week',
        points: 8,
        plainEnglish: 'You need help with therapy that takes more than 14 hours per week.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'washing-bathing',
    number: 6,
    name: 'Washing and bathing',
    formQuestion: 'Question 6: Washing and bathing',
    description: 'This covers your ability to wash yourself.',
    whatTheyReallyAsk: 'Can you wash your whole body, including bathing or showering? Can you get in and out of the bath or shower? Can you wash your hair?',
    mentalHealthPrompts: [
      'Do you need reminding to wash or shower?',
      'Does depression make it feel impossible to shower or bathe?',
      'Do you go days without washing because you lack motivation or energy?',
      'Does anxiety affect your ability to wash (e.g., fear of water, feeling watched)?',
      'Do you need encouragement to maintain basic hygiene?',
      'Do you neglect personal hygiene when unwell?'
    ],
    descriptors: [
      {
        id: 'washing-a',
        text: 'Can wash and bathe unaided',
        points: 0,
        plainEnglish: 'You can wash and bathe completely by yourself.'
      },
      {
        id: 'washing-b',
        text: 'Needs to use an aid or appliance to be able to wash or bathe',
        points: 2,
        plainEnglish: 'You need aids like a shower seat, grab rails, or long-handled sponge.'
      },
      {
        id: 'washing-c',
        text: 'Needs supervision or prompting to be able to wash or bathe',
        points: 2,
        plainEnglish: 'You need someone to remind you to wash or to watch over you while washing.'
      },
      {
        id: 'washing-d',
        text: 'Needs assistance to be able to wash either their hair or body below the waist',
        points: 2,
        plainEnglish: 'You need physical help washing your hair or lower body.'
      },
      {
        id: 'washing-e',
        text: 'Needs assistance to be able to get in or out of a bath or shower',
        points: 3,
        plainEnglish: 'You need physical help getting in or out of the bath/shower.'
      },
      {
        id: 'washing-f',
        text: 'Needs assistance to be able to wash their body between the shoulders and waist',
        points: 4,
        plainEnglish: 'You need physical help washing your upper body.'
      },
      {
        id: 'washing-g',
        text: 'Cannot wash and bathe at all and needs another person to wash their entire body',
        points: 8,
        plainEnglish: 'You cannot wash at all and need someone to wash your whole body.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'managing-toilet',
    number: 7,
    name: 'Managing toilet needs or incontinence',
    formQuestion: 'Question 7: Managing toilet needs',
    description: 'This covers your ability to use the toilet.',
    whatTheyReallyAsk: 'Can you get on and off the toilet? Can you clean yourself afterwards? Can you manage incontinence pads or other aids if you use them?',
    mentalHealthPrompts: [
      'Do you need reminding to use the toilet?',
      'Does anxiety about leaving a safe space affect using the toilet?',
      'Do you have accidents because you\'re too preoccupied with your thoughts to notice you need the toilet?',
      'Has medication affected your bowel or bladder control?',
      'Do you need encouragement to maintain toilet hygiene?'
    ],
    descriptors: [
      {
        id: 'toilet-a',
        text: 'Can manage toilet needs or incontinence unaided',
        points: 0,
        plainEnglish: 'You can use the toilet and manage any incontinence completely by yourself.'
      },
      {
        id: 'toilet-b',
        text: 'Needs to use an aid or appliance to be able to manage toilet needs or incontinence',
        points: 2,
        plainEnglish: 'You need aids like raised toilet seat, rails, or incontinence pads.'
      },
      {
        id: 'toilet-c',
        text: 'Needs supervision or prompting to be able to manage toilet needs',
        points: 2,
        plainEnglish: 'You need someone to remind you to use the toilet or to supervise you.'
      },
      {
        id: 'toilet-d',
        text: 'Needs assistance to be able to manage toilet needs',
        points: 4,
        plainEnglish: 'You need physical help using the toilet or cleaning yourself.'
      },
      {
        id: 'toilet-e',
        text: 'Needs assistance to be able to manage incontinence of either bladder or bowel',
        points: 6,
        plainEnglish: 'You need help managing incontinence (bladder or bowel).'
      },
      {
        id: 'toilet-f',
        text: 'Needs assistance to be able to manage incontinence of both bladder and bowel',
        points: 8,
        plainEnglish: 'You need help managing incontinence of both bladder and bowel.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'dressing',
    number: 8,
    name: 'Dressing and undressing',
    formQuestion: 'Question 8: Dressing and undressing',
    description: 'This covers your ability to dress and undress yourself.',
    whatTheyReallyAsk: 'Can you put on and take off all your clothes, including underwear, socks, and shoes? Can you choose appropriate clothes for the weather or occasion?',
    mentalHealthPrompts: [
      'Do you need reminding to get dressed or change clothes?',
      'Do you wear the same clothes for days because you lack motivation to change?',
      'Do you struggle to choose appropriate clothing for the weather or situation?',
      'Does it take you a very long time to get dressed because of your mental state?',
      'Do you need encouragement to maintain a presentable appearance?',
      'Do you sometimes not get dressed at all because of how you\'re feeling?'
    ],
    descriptors: [
      {
        id: 'dressing-a',
        text: 'Can dress and undress unaided',
        points: 0,
        plainEnglish: 'You can dress and undress completely by yourself.'
      },
      {
        id: 'dressing-b',
        text: 'Needs to use an aid or appliance to be able to dress or undress',
        points: 2,
        plainEnglish: 'You need aids like a long-handled shoe horn, button hook, or dressing stick.'
      },
      {
        id: 'dressing-c',
        text: 'Needs either (i) prompting to be able to dress, undress or determine appropriate circumstances for remaining clothed; or (ii) prompting or assistance to be able to select appropriate clothing',
        points: 2,
        plainEnglish: 'You need reminding to dress or help choosing appropriate clothes.'
      },
      {
        id: 'dressing-d',
        text: 'Needs assistance to be able to dress or undress their lower body',
        points: 2,
        plainEnglish: 'You need physical help with lower body clothing (trousers, socks, shoes).'
      },
      {
        id: 'dressing-e',
        text: 'Needs assistance to be able to dress or undress their upper body',
        points: 4,
        plainEnglish: 'You need physical help with upper body clothing.'
      },
      {
        id: 'dressing-f',
        text: 'Cannot dress or undress at all',
        points: 8,
        plainEnglish: 'You cannot dress or undress at all and need full assistance.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'communicating',
    number: 9,
    name: 'Communicating verbally',
    formQuestion: 'Question 9: Talking, listening and understanding',
    description: 'This covers your ability to communicate with others.',
    whatTheyReallyAsk: 'Can you speak clearly so people understand you? Can you understand what people say to you? Can you have a conversation and follow what\'s being discussed?',
    mentalHealthPrompts: [
      'Do you find it hard to follow conversations because of racing thoughts or distractibility?',
      'Does anxiety make it difficult to speak to people or express yourself?',
      'Do you struggle to find the right words when you\'re unwell?',
      'Do voices or other symptoms make it hard to concentrate on what people are saying?',
      'Do you misunderstand what people mean because of paranoia or suspiciousness?',
      'Do you need someone to help explain things or speak on your behalf?'
    ],
    descriptors: [
      {
        id: 'communicating-a',
        text: 'Can express and understand verbal information unaided',
        points: 0,
        plainEnglish: 'You can speak and understand others without any help.'
      },
      {
        id: 'communicating-b',
        text: 'Needs to use an aid or appliance to be able to speak or hear',
        points: 2,
        plainEnglish: 'You need a hearing aid, communication app, or similar device.'
      },
      {
        id: 'communicating-c',
        text: 'Needs communication support to be able to express or understand complex verbal information',
        points: 4,
        plainEnglish: 'You need help understanding or expressing complex information.'
      },
      {
        id: 'communicating-d',
        text: 'Needs communication support to be able to express or understand basic verbal information',
        points: 8,
        plainEnglish: 'You need help with basic communication and simple information.'
      },
      {
        id: 'communicating-e',
        text: 'Cannot express or understand verbal information at all even with communication support',
        points: 12,
        plainEnglish: 'You cannot communicate verbally even with support.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'reading',
    number: 10,
    name: 'Reading and understanding signs, symbols and words',
    formQuestion: 'Question 10: Reading and understanding signs, symbols and words',
    description: 'This covers your ability to read and understand written information.',
    whatTheyReallyAsk: 'Can you read and understand signs, labels, and simple written information? This includes things like road signs, food labels, letters, and forms.',
    mentalHealthPrompts: [
      'Do you struggle to concentrate on reading because of your mental health?',
      'Do you read the same sentence multiple times without taking it in?',
      'Does anxiety make it difficult to read official letters or forms?',
      'Do you need someone to explain written information to you?',
      'Do you avoid reading because it\'s too overwhelming or confusing?',
      'Does medication affect your ability to concentrate on reading?'
    ],
    descriptors: [
      {
        id: 'reading-a',
        text: 'Can read and understand basic and complex written information either unaided or using spectacles or contact lenses',
        points: 0,
        plainEnglish: 'You can read and understand all written information (with glasses if needed).'
      },
      {
        id: 'reading-b',
        text: 'Needs to use an aid or appliance, other than spectacles or contact lenses, to be able to read or understand either basic or complex written information',
        points: 2,
        plainEnglish: 'You need aids (other than glasses) like magnifiers or screen readers.'
      },
      {
        id: 'reading-c',
        text: 'Needs prompting to be able to read or understand complex written information',
        points: 2,
        plainEnglish: 'You need someone to prompt or encourage you to read complex information.'
      },
      {
        id: 'reading-d',
        text: 'Needs prompting to be able to read or understand basic written information',
        points: 4,
        plainEnglish: 'You need someone to prompt or encourage you to read basic information.'
      },
      {
        id: 'reading-e',
        text: 'Cannot read or understand signs, symbols or words at all',
        points: 8,
        plainEnglish: 'You cannot read or understand written information at all.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'engaging',
    number: 11,
    name: 'Engaging with other people face to face',
    formQuestion: 'Question 11: Mixing with other people',
    description: 'This covers your ability to interact with others.',
    whatTheyReallyAsk: 'Can you mix with other people, have conversations, and behave appropriately in social situations? This includes both strangers and people you know.',
    mentalHealthPrompts: [
      'Do you avoid social situations because of anxiety, paranoia, or fear?',
      'Do you find it difficult to trust people or feel safe around others?',
      'Do voices or other experiences make it hard to focus on conversations?',
      'Do you struggle to pick up on social cues or understand how to behave?',
      'Have you become isolated because interacting with others is too difficult?',
      'Do you need someone with you to feel safe when meeting others?',
      'Do you sometimes behave in ways that upset or frighten others without meaning to?'
    ],
    descriptors: [
      {
        id: 'engaging-a',
        text: 'Can engage with other people unaided',
        points: 0,
        plainEnglish: 'You can interact with others without any support.'
      },
      {
        id: 'engaging-b',
        text: 'Needs prompting to be able to engage with other people',
        points: 2,
        plainEnglish: 'You need encouragement or reminding to interact with others.'
      },
      {
        id: 'engaging-c',
        text: 'Needs social support to be able to engage with other people',
        points: 4,
        plainEnglish: 'You need someone to support you when interacting with others.'
      },
      {
        id: 'engaging-d',
        text: 'Cannot engage with other people due to such engagement causing either (i) overwhelming psychological distress to the claimant; or (ii) the claimant to exhibit behaviour which would result in a substantial risk of harm to the claimant or another person',
        points: 8,
        plainEnglish: 'You cannot engage with others because it causes severe distress or risk of harm.'
      }
    ],
    category: 'daily-living'
  },
  {
    id: 'budgeting',
    number: 12,
    name: 'Making budgeting decisions',
    formQuestion: 'Question 12: Managing money',
    description: 'This covers your ability to manage money.',
    whatTheyReallyAsk: 'Can you work out how much things cost, manage bills, and make financial decisions? This is about your ability to understand and handle money matters.',
    mentalHealthPrompts: [
      'Do you struggle to understand bills or manage your finances when unwell?',
      'Have you made impulsive spending decisions you later regret?',
      'Do you need help understanding the value of money or prices?',
      'Does someone else manage your money because you can\'t do it yourself?',
      'Do you forget to pay bills or lose track of your spending?',
      'Do you avoid dealing with money matters because it\'s too overwhelming?',
      'Have you been financially exploited because of your mental health?'
    ],
    descriptors: [
      {
        id: 'budgeting-a',
        text: 'Can manage complex budgeting decisions unaided',
        points: 0,
        plainEnglish: 'You can manage all money matters, including bills and savings, by yourself.'
      },
      {
        id: 'budgeting-b',
        text: 'Needs prompting or assistance to be able to make complex budgeting decisions',
        points: 2,
        plainEnglish: 'You need help with complex money decisions like bills or big purchases.'
      },
      {
        id: 'budgeting-c',
        text: 'Needs prompting or assistance to be able to make simple budgeting decisions',
        points: 4,
        plainEnglish: 'You need help with simple money decisions like daily shopping.'
      },
      {
        id: 'budgeting-d',
        text: 'Cannot make any budgeting decisions at all',
        points: 6,
        plainEnglish: 'You cannot make any money decisions and need someone to manage it all.'
      }
    ],
    category: 'daily-living'
  }
];
