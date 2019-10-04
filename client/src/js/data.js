import {
  subSeconds,
} from 'date-fns';

const randomId = () => String(Math.round(Math.random() * 10000000000000000));

// const colors = [
// ];

export const properties = [
  {
    id: 'house-6',
    name: 'House 6',
    type: 'townhouse',
    users: ['gs'],
  },
];

export const users = [
  {
    id: 'gs',
    name: 'Gustaf Sjoberg',
    email: 'gsjoberg@gmail.com',
    scope: 'House 6',
    shortname: 'GS',
    role: 'admin',
    cover: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-1/p160x160/487022_10152168353295582_1263598105_n.jpg?_nc_cat=103&_nc_oc=AQkgwSQZbgheOL1minoIVyGVU87pN6iE0V19zhdz-2yqlZQmfHUIP2DVmRXrnyoaf6c&_nc_ht=scontent-mad1-1.xx&oh=049056d1b4fc0609a68feb6c6615f858&oe=5DE4925C',
    color: '#947eff',
  },
  {
    id: 'maria',
    name: 'Maria Llorente',
    email: 'maria@gmail.com',
    shortname: 'ML',
    role: 'president',
    scope: 'House 1',
    color: '#62c95d',
  },
  {
    id: 'veronica',
    name: 'Veronica Calvillo',
    email: 'veronica@gmail.com',
    shortname: 'VC',
    role: 'admin',
    scope: 'Administrator',
    color: '#fa4d8a',
  },
  {
    id: 'mikael',
    name: 'Mikael Pallvid',
    email: 'mikael@gmail.com',
    shortname: 'MP',
    role: 'admin',
    scope: 'Administrator',
    color: '#4fa2ff',
  },
  {
    id: 'anders',
    name: 'Anders Löfgren',
    email: 'anders@gmail.com',
    shortname: 'AL',
    role: 'admin',
    scope: 'Administrator',
    color: '#ff6c5b',
  },
];

export const discussions = [
  {
    id: '2312312fsdfasdr123125ghfy65',
    author: 'gs',
    title: 'We have had two water leaks in the past month. We need to act.',
    date: new Date(2019, 7, 1),
    category: 'general',
    body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
    sticky: null,
    replyCount: 3,
    attachments: [
      {
        id: '3123123124gdfgdfsgsdfgsdgsdf',
        type: 'pdf',
        filename: 'Community rules.pdf',
        size: '22 kb',
      },
    ],
    comments: [
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'veronica',
        date: new Date(2019, 8, 12),
        body: 'That was a very nice comment. I liked it a lot.',
      },
    ],
  },
  {
    id: '0432hgfh3210gfh3249',
    author: 'maria',
    title: 'Someone used shampoo in the pool showers!',
    date: new Date(2019, 7, 1),
    category: 'general',
    body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
    sticky: null,
    replyCount: 43,
    attachments: [
      {
        id: 'fsdafasdfasd3123123124gdfgdfsgsdfgsdgsdf',
        type: 'pdf',
        filename: 'Community rules.pdf',
        size: '22 kb',
      },
    ],
    comments: [
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'veronica',
        date: new Date(2019, 8, 12),
        body: 'That was a very nice comment. I liked it a lot.',
      },
      {
        id: randomId(),
        author: 'maria',
        date: new Date(2019, 8, 12),
        body: 'I agree. It is a nice comment.',
      },
    ],
  },
  {
    id: '0fh485h6fjhryu238455',
    author: 'veronica',
    title: 'Summons for the next annual general meeting (AGM)',
    date: new Date(2019, 8, 12),
    category: 'general',
    body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
    sticky: null,
    replyCount: 43,
    attachments: [
      {
        id: randomId(),
        type: 'pdf',
        filename: 'Community rules.pdf',
        size: '22 kb',
      },
    ],
    comments: [
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
      {
        id: randomId(),
        author: 'gs',
        date: new Date(2019, 8, 12),
        body: 'This is a nice comment, ok?',
      },
    ],
  },
  {
    id: '1332h5555510gfh3249',
    author: 'maria',
    title: 'Garage project discussion',
    date: new Date(2019, 2, 14),
    category: 'projects',
    body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
    sticky: null,
    replyCount: 0,
    attachments: [
      {
        id: randomId(),
        type: 'pdf',
        filename: 'Community rules.pdf',
        size: '22 kb',
      },
    ],
    comments: [
    ],
  },
  {
    id: '1332h5555510gfh324xs',
    author: 'mikael',
    title: 'Garage project discussion',
    date: new Date(2019, 1, 14),
    category: 'projects',
    body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
    sticky: null,
    replyCount: 0,
    attachments: [
      {
        id: randomId(),
        type: 'pdf',
        filename: 'Community rules.pdf',
        size: '22 kb',
      },
    ],
    comments: [
    ],
  },
  {
    id: '1332h5555510gfh324xs',
    author: 'anders',
    title: 'We should hold the general meeting the same day every year',
    date: new Date(2019, 1, 8),
    category: 'projects',
    body: 'Lorem ipsum dolor sit amet, unum repudiare scribentur pro ex, ex odio eros mea. Ei essent invenire vis. Ne scriptorem comprehensam has, pro ei nisl malorum dolores, essent menandri ex duo. An pro vidit soleat. Et idque option voluptaria eum, repudiare vulputate ex eum. Mel ex modo placerat, duo in affert fuisset dissentiunt, no duis expetenda moderatius nam. Vix no decore menandri accusata.',
    sticky: null,
    replyCount: 0,
    attachments: [
      {
        id: randomId(),
        type: 'pdf',
        filename: 'Community rules.pdf',
        size: '22 kb',
      },
    ],
    comments: [
    ],
  },
];

export const files = [
  {
    id: randomId(),
    name: 'Presupuesto 2018.pdf',
    filename: 'something.pdf',
    uploadedBy: 'gs',
    type: 'quote',
    date: new Date(2019, 8, 12),
    mime: 'pdf',
    url: '#',
  },
  {
    id: randomId(),
    name: 'Water usage (1).doc',
    filename: 'Water usage (1).doc',
    uploadedBy: 'gs',
    type: 'report',
    date: new Date(2019, 8, 12),
    url: '#',
    mime: 'doc',
  },
];

// open, closed, duplicate, wontfix
export const issues = [
  {
    id: randomId(),
    title: 'Garden lights not working',
    body: 'The garden lights in the south part of the urbanization are not working.',
    status: 'open',
    category: 'garden',
    user: 'gs',
    priority: 'high',
    date: new Date(2019, 7, 1),
    attachments: [],
    comments: [],
  },
  {
    id: randomId(),
    title: 'Pool is cloudy',
    body: 'The pool looks dirty.',
    status: 'closed',
    category: 'pool',
    user: 'gs',
    priority: 'high',
    date: new Date(2019, 5, 23),
    attachments: [],
    comments: [],
  },
  {
    id: randomId(),
    title: 'Garden lights not working',
    body: 'Now the garden lights in the northern part are not working.',
    status: 'open',
    category: 'garden',
    user: 'gs',
    priority: 'low',
    date: new Date(2019, 4, 1),
    attachments: [],
    comments: [],
  },
  {
    id: randomId(),
    title: 'Pool is dirty',
    body: 'There are leaves and dirt in the pool.',
    status: 'closed',
    category: 'pool',
    user: 'gs',
    priority: 'high',
    date: new Date(2019, 6, 4),
    attachments: [],
    comments: [],
  },
];

export const communities = [
  {
    id: 'as21',
    name: 'Aloha Sur 21',
    shortname: 'AS',
    color: '#947eff',
    // cover: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/19146246_10160234159965582_3471569541747048909_n.jpg?_nc_cat=110&_nc_oc=AQmZtRb8_P1le0vReKq8fUDF7R4aBKG7Z8lk-5atyoP3ORs-9O8HCeJufbYPcZ8kSFI&_nc_ht=scontent-mad1-1.xx&oh=ec638d97ea08899569b4c733cc9d02f2&oe=5DE4AA59',
  },
];

export const transactions = {
  2018: [
    // Jan
    {
      id: '3219g90df890u4jkh4jk23hf9sdui94h23jkh423yuf89sdhfji34hi',
      date: new Date(2018, 0, 1),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2001,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 0, 8),
      recipient: 'Marbella Pools',
      note: 'New pump',
      group: 'pool',
      amount: 300,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 0, 14),
      recipient: 'Corte Verde',
      note: 'Extra garden work',
      group: 'garden',
      amount: 400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 0, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3500,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Feb
    {
      id: randomId(),
      date: new Date(2018, 1, 2),
      recipient: 'Corte Verde',
      note: 'Extra fees',
      group: 'garden',
      amount: 400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 1, 2),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Mar
    {
      id: randomId(),
      date: new Date(2018, 2, 2),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 2, 14),
      recipient: 'Corte Verde',
      note: 'Extra garden work',
      group: 'garden',
      amount: 600,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 2, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3900,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Apr
    {
      id: randomId(),
      date: new Date(2018, 3, 3),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // May
    {
      id: randomId(),
      date: new Date(2018, 4, 4),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2300,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 4, 8),
      recipient: 'Marbella Pools',
      note: 'Filter sand change',
      group: 'pool',
      amount: 350,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 4, 8),
      recipient: 'Hidralia',
      note: 'Water costs',
      group: 'water',
      amount: 1700,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 4, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3900,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Jun
    {
      id: randomId(),
      date: new Date(2018, 5, 5),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2300,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 4, 8),
      recipient: 'Gomez',
      note: 'Water meters',
      group: 'water',
      amount: 220,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 4, 8),
      recipient: 'Aloha Sur 21',
      note: 'Community fee',
      group: 'community-fee',
      amount: 4400,
      type: 'income',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Jul
    {
      id: randomId(),
      date: new Date(2018, 6, 6),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2018, 6, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3900,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Aug
    {
      id: randomId(),
      date: new Date(2018, 7, 7),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2500,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
  ],
  2019: [
    // Jan
    {
      id: '321312789ufdhsjkhjk4h2384y23ui4ui23gh9fhg9234hfuig43igr34i',
      date: new Date(2019, 0, 1),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 0, 8),
      recipient: 'Marbella Pools',
      note: 'New pump',
      group: 'pool',
      amount: 300,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 0, 14),
      recipient: 'Corte Verde',
      note: 'Extra garden work',
      group: 'garden',
      amount: 400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 0, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3500,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Feb
    {
      id: randomId(),
      date: new Date(2019, 1, 2),
      recipient: 'Corte Verde',
      note: 'Extra fees',
      group: 'garden',
      amount: 400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 1, 2),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Mar
    {
      id: randomId(),
      date: new Date(2019, 2, 2),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 2, 14),
      recipient: 'Corte Verde',
      note: 'Extra garden work',
      group: 'garden',
      amount: 400,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 2, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3500,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Apr
    {
      id: randomId(),
      date: new Date(2019, 3, 3),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // May
    {
      id: randomId(),
      date: new Date(2019, 4, 4),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 4, 8),
      recipient: 'Marbella Pools',
      note: 'Filter sand change',
      group: 'pool',
      amount: 300,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 4, 8),
      recipient: 'Hidralia',
      note: 'Water costs',
      group: 'water',
      amount: 700,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 4, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3500,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Jun
    {
      id: randomId(),
      date: new Date(2019, 5, 5),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 4, 8),
      recipient: 'Gomez',
      note: 'Water meters',
      group: 'water',
      amount: 200,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 4, 8),
      recipient: 'Aloha Sur 21',
      note: 'Community fee',
      group: 'community-fee',
      amount: 4000,
      type: 'income',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Jul
    {
      id: randomId(),
      date: new Date(2019, 6, 6),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
    {
      id: randomId(),
      date: new Date(2019, 6, 22),
      recipient: 'Endessa',
      note: 'Electricity',
      group: 'electricity',
      amount: 3500,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },

    // Aug
    {
      id: randomId(),
      date: new Date(2019, 7, 7),
      recipient: 'Parcelas del Golf',
      note: 'Macro fee',
      group: 'macro-fee',
      amount: 2000,
      type: 'expense',
      attested: true,
      attestedBy: ['gs', 'maria'],
    },
  ],
};

export const COLORS = [
  '#3b43fd',
  '#6b60ff',
  '#947eff',
  '#ba9dff',
  '#e0beff',
  '#b292d0',
  '#8668a3',
  '#5c4179',
  '#351c50',
];

export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const discussionCategories = [
  {
    id: 'announcement',
    name: 'Announcement',
    color: '#fca903',
  },
  {
    id: 'general',
    name: 'General',
    color: '#067bff',
  },
  {
    id: 'projects',
    name: 'Projects',
    color: '#08c764',
  },
];

export const CATEGORIES = [
  {
    id: 'pool',
    name: 'Pool',
    color: COLORS[1],
  },
  {
    id: 'garden',
    name: 'Garden',
    color: COLORS[2],
  },
  {
    id: 'macro-fee',
    name: 'Macro fee',
    color: COLORS[3],
  },
  {
    id: 'electricity',
    name: 'Electricity',
    color: COLORS[4],
  },
  {
    id: 'water',
    name: 'Water',
    color: COLORS[5],
  },
  {
    id: 'community-fee',
    name: 'Community fee',
    color: COLORS[6],
  },
];

export const sensorGroups = {
  pool: {
    name: 'Pool',
    sensors: [
      {
        name: 'PH',
        unit: 'ph',
        min: 0,
        max: 14,
        ok: [7.0, 8.6],
        values: [
          { date: new Date(2019, 6, 0), value: 7 },
          { date: new Date(2019, 6, 1), value: 7.1 },
          { date: new Date(2019, 6, 2), value: 7.2 },
          { date: new Date(2019, 6, 3), value: 7.8 },
          { date: new Date(2019, 6, 4), value: 7.5 },
          { date: new Date(2019, 6, 5), value: 8.2 },
          { date: new Date(2019, 7, 0), value: 7 },
          { date: new Date(2019, 7, 1), value: 7.2 },
          { date: new Date(2019, 7, 2), value: 7.3 },
          { date: new Date(2019, 7, 3), value: 12.8 },
          { date: new Date(2019, 7, 4), value: 7.5 },
          { date: new Date(2019, 7, 5), value: 8.9 },
        ],
      },
      {
        name: 'Alkalinity',
        unit: 'ppm',
        min: 0,
        max: 200,
        ok: [80, 120],
        values: [
          { date: new Date(2019, 6, 0), value: 86 },
          { date: new Date(2019, 6, 1), value: 82 },
          { date: new Date(2019, 6, 2), value: 76 },
          { date: new Date(2019, 6, 3), value: 90 },
          { date: new Date(2019, 6, 4), value: 93 },
          { date: new Date(2019, 6, 5), value: 89 },
          { date: new Date(2019, 7, 0), value: 86 },
          { date: new Date(2019, 7, 1), value: 82 },
          { date: new Date(2019, 7, 2), value: 76 },
          { date: new Date(2019, 7, 3), value: 110 },
          { date: new Date(2019, 7, 4), value: 92 },
          { date: new Date(2019, 7, 5), value: 102 },
        ],
      },
      {
        name: 'Temperature',
        min: 5,
        max: 50,
        ok: [24, 34],
        unit: '°C',
        values: [
          { date: new Date(2019, 6, 0), value: 22 },
          { date: new Date(2019, 6, 1), value: 23 },
          { date: new Date(2019, 6, 2), value: 24 },
          { date: new Date(2019, 6, 3), value: 25 },
          { date: new Date(2019, 6, 4), value: 26 },
          { date: new Date(2019, 6, 5), value: 28 },
          { date: new Date(2019, 7, 0), value: 27 },
          { date: new Date(2019, 7, 1), value: 28 },
          { date: new Date(2019, 7, 2), value: 29 },
          { date: new Date(2019, 7, 3), value: 30 },
          { date: new Date(2019, 7, 4), value: 30 },
          { date: new Date(2019, 7, 5), value: 30 },
        ],
      },
      {
        name: 'Chlorine',
        unit: 'ppm',
        min: 0,
        max: 10,
        ok: [1, 3],
        values: [
          { date: new Date(2019, 6, 0), value: 2 },
          { date: new Date(2019, 6, 1), value: 3.0 },
          { date: new Date(2019, 6, 2), value: 3.2 },
          { date: new Date(2019, 6, 3), value: 4 },
          { date: new Date(2019, 6, 4), value: 2.3 },
          { date: new Date(2019, 6, 5), value: 2.5 },
          { date: new Date(2019, 7, 0), value: 2 },
          { date: new Date(2019, 7, 1), value: 2.2 },
          { date: new Date(2019, 7, 2), value: 2.3 },
          { date: new Date(2019, 7, 3), value: 5 },
          { date: new Date(2019, 7, 4), value: 2.3 },
          { date: new Date(2019, 7, 5), value: 2.5 },
        ],
      },
    ],
  },
  water: {
    name: 'Water flow',
    sensors: [
      {
        name: 'Connection 1',
        color: COLORS[1],
        lat: 36.50439,
        lng: -4.9632,
        values: [
          { date: new Date(2019, 4, 0), value: 2000 },
          { date: new Date(2019, 7, 1), value: 2100 },
          { date: new Date(2019, 7, 2), value: 1900 },
          { date: new Date(2019, 7, 3), value: 2100 },
          { date: new Date(2019, 7, 4), value: 2200 },
          { date: new Date(2019, 0, 5), value: 3000 },
        ],
      },
      {
        name: 'Connection 2',
        color: COLORS[3],
        lat: 36.5044,
        lng: -4.9623,
        values: [
          { date: new Date(2019, 3, 0), value: 1100 },
          { date: new Date(2019, 4, 1), value: 1300 },
          { date: new Date(2019, 7, 2), value: 1200 },
          { date: new Date(2019, 7, 3), value: 1500 },
          { date: new Date(2019, 7, 4), value: 1100 },
          // { date: new Date(2019, 7, 5), value: 1200 },
          { date: new Date(2019, 0, 6), value: 1000 },
          { date: new Date(2019, 1, 6), value: 1000 },
        ],
      },
      {
        name: 'Connection 3',
        color: COLORS[4],
        lat: 36.50447,
        lng: -4.9625,
        values: [
          { date: new Date(2019, 3, 0), value: 1600 },
          { date: new Date(2019, 5, 1), value: 1400 },
          { date: new Date(2019, 7, 2), value: 1300 },
          { date: new Date(2019, 7, 3), value: 1400 },
          { date: new Date(2019, 7, 4), value: 1200 },
          { date: new Date(2019, 0, 5), value: 1300 },
        ],
      },
    ],
  },
  soil: {
    name: 'Soil moisture',
    sensors: [
      {
        name: 'Slope 1',
        color: COLORS[1],
        lat: 36.50495,
        lng: -4.9628,
        values: [
          { date: new Date(2019, 7, 0), value: 330 },
          { date: new Date(2019, 7, 1), value: 220 },
          { date: new Date(2019, 7, 2), value: 310 },
        ],
      },
      {
        name: 'Slope 2',
        color: COLORS[2],
        lat: 36.50496,
        lng: -4.9632,
        values: [
          { date: new Date(2019, 7, 0), value: 310 },
          { date: new Date(2019, 7, 1), value: 210 },
          { date: new Date(2019, 7, 2), value: 320 },
        ],
      },
      {
        name: 'Slope 3',
        color: COLORS[2],
        lat: 36.50489,
        lng: -4.9634,
        values: [
          { date: new Date(2019, 7, 0), value: 310 },
          { date: new Date(2019, 7, 1), value: 210 },
          { date: new Date(2019, 7, 2), value: 320 },
        ],
      },
      {
        name: 'Pool garden 2',
        color: COLORS[2],
        lat: 36.50468,
        lng: -4.9633,
        values: [
          { date: new Date(2019, 7, 0), value: 310 },
          { date: new Date(2019, 7, 1), value: 210 },
          { date: new Date(2019, 7, 2), value: 320 },
        ],
      },
      {
        name: 'Pool and garden 1',
        color: COLORS[3],
        lat: 36.5045,
        lng: -4.9633,
        values: [
          { date: new Date(2019, 7, 0), value: 280 },
          { date: new Date(2019, 7, 1), value: 290 },
          { date: new Date(2019, 7, 2), value: 310 },
        ],
      },
      {
        name: 'Entrance',
        color: COLORS[3],
        lat: 36.5049,
        lng: -4.9624,
        values: [
          { date: new Date(2019, 7, 0), value: 180 },
          { date: new Date(2019, 7, 1), value: 290 },
          { date: new Date(2019, 7, 2), value: 310 },
        ],
      },
    ],
  },
  gates: {
    name: 'Gate monitor',
    sensors: [
      {
        name: 'Gate 1',
        color: COLORS[1],
        lat: 36.5049,
        lng: -4.9623,
        events: [
          { event: 'close', user: 'gs', date: subSeconds(new Date(), 20) },
          { event: 'open', user: 'gs', date: subSeconds(new Date(), 30) },
          { event: 'close', user: 'maria', date: subSeconds(new Date(), 300) },
          { event: 'open', user: 'maria', date: subSeconds(new Date(), 320) },
          { event: 'close', user: 'veronica', date: subSeconds(new Date(), 400) },
          { event: 'open', user: 'veronica', date: subSeconds(new Date(), 450) },
        ],
      },
      {
        name: 'Gate 2',
        color: COLORS[3],
        lat: 36.50454,
        lng: -4.96210,
        events: [
          { event: 'close', user: 'gs', date: subSeconds(new Date(), 40) },
          { event: 'open', user: 'gs', date: subSeconds(new Date(), 50) },
          { event: 'close', user: 'maria', date: subSeconds(new Date(), 250) },
          { event: 'open', user: 'maria', date: subSeconds(new Date(), 260) },
          { event: 'close', user: 'veronica', date: subSeconds(new Date(), 340) },
          { event: 'open', user: 'veronica', date: subSeconds(new Date(), 360) },
        ],
      },
      {
        name: 'Gate 3',
        color: COLORS[3],
        lat: 36.5044,
        lng: -4.9632,
        events: [
          { event: 'open', user: 'gs', date: subSeconds(new Date(), 25) },
          { event: 'close', user: 'maria', date: subSeconds(new Date(), 310) },
          { event: 'open', user: 'maria', date: subSeconds(new Date(), 340) },
          { event: 'close', user: 'veronica', date: subSeconds(new Date(), 540) },
          { event: 'open', user: 'veronica', date: subSeconds(new Date(), 560) },
        ],
      },
    ],
  },
};

export const feed = [
  {
    type: 'issue-closed',
    date: new Date(2019, 7, 29),
    user: 'gs',
    context: {
      title: 'Pool lamp not working',
    },
  },
  {
    type: 'new-reply',
    date: new Date(2019, 7, 29),
    user: 'gs',
    context: {
      title: 'New AGM coming up soon',
      body: 'Thank you for the information.',
    },
  },
  {
    type: 'new-conversation',
    date: new Date(2019, 7, 28),
    user: 'veronica',
    context: {
      title: 'New AGM coming up soon',
    },
  },
  {
    type: 'files',
    date: new Date(2019, 7, 20),
    user: 'maria',
    context: {
      files: [
        {
          id: randomId(),
          type: 'pdf',
          filename: 'Community rules.pdf',
          size: '22 kb',
        },
      ],
    },
  },
  {
    type: 'new-reply',
    date: new Date(2019, 6, 23),
    user: 'gs',
    context: {
      title: 'Pool looks dirty again',
      body: 'We will look into that as soon as possible. The prob...',
    },
  },
  {
    type: 'new-conversation',
    date: new Date(2019, 5, 25),
    user: 'maria',
    context: {
      title: 'We have to locate the bylaws asap',
    },
  },
  // issue open/close, transaction, comment, conversation, uploaded file,
  // attested invoice
];

export const getCategory = id => CATEGORIES.find(target => target.id === id);

export const getUser = id => users.find(target => target.id === id);

export const getCommunity = id => communities.find(target => target.id === id);

export const getDiscussion = id => discussions.find(target => target.id === id);

export const getDiscussionCategory = id => discussionCategories.find(target => target.id === id);

export const activeUser = 'gs';

export const activeCommunity = 'as21';
