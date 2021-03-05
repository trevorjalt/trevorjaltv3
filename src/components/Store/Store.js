import Benchmark from '../../images/benchmark-social.png'
import BenchmarkPreview from '../../images/benchmark-preview.png'
import Fluent from '../../images/fluent-social.png'
import FluentPreview from '../../images/fluent-preview.png'
import Moments from '../../images/moments-social.png'
import MomentsPreview from '../../images/moments-preview.png'


const Store = {
    facts: [
        {
            id: 0,
            fact: 'Music is life.  I make (and share) playlists regularly.  Need some motivation or new tunes? Check out my playlists.'
        },
        {
            id: 1,
            fact: 'I love all things Dragon Ball (let’s be real, Super was *ahem* a limit breaker).'
        },
        {
            id: 2,
            fact: 'Besides learning to code, switching to a plant-based diet is the best thing I ever did for myself.'
        },
        {
            id: 3,
            fact: 'Lady Gaga’s ‘Stupid Love’ is always my mood.'
        },
        {
            id: 4,
            fact: 'I used to work for Disney, performing in shows as a certain \'Son of man\' who grew up in the jungle.'
        },
        {
            id: 5,
            fact: 'In between sets at the gym, I\'m either dancing like no one\'s watching or working on code in my head.'
        }
    ],

    projects: [
        {
            id: 0,
            image: `${Moments}`,
            preview: `${MomentsPreview}`,
            name: 'moments',
            description: 'moments is my love letter to Instagram, a social media platform and passion project designed for ongoing development and personal educational growth in image processing and how to implement a heavily conditionally rendered environment that handles large amounts of data storage and retrieval.',
            supplemental: 'And really, who doesn’t love scrolling through photos attached with inspirational quotes and song lyrics?',
            webAddress: 
                {
                    live: 'https://moments-live.vercel.app',
                    client: 'https://www.github.com/trevorjalt/moments-client',
                    api: 'https://www.github.com/trevorjalt/moments-api'
                },
            tech: 
                {
                    frontend: [
                        'React', 'HTML5', 'CSS3', 'date-fns', 'filesystem',
                        'image processing', 'React Router', 'jest'
                    ],

                    backend: [
                        'Node.js', 'Express.js', 'Knex.js', 'PostgreSQL', 
                        'Multer', 'xss', 'helmet', 'cors', 'supertest',
                        'mocha', 'chai'
                    ],

                    architecture: [
                        'JWT Authentication',
                        'RESTful Api'
                    ]
                },
            techSummary: 
                ['React', 'HTML5', 'CSS3', 'React Router', 'Node.js',
                'Express.js', 'Knex.js', 'PostgreSQL', 'JWT Authentication',
                'RESTful Api'],
            slogan: 'it\'s all about the moments',
        },
        {
            id: 1,
            image: `${Fluent}`,
            preview: `${FluentPreview}`,
            name: 'fluent',
            description: 'fluent is a full-stack application where the user can practice learning a language with the spaced repetition revision technique.',
            webAddress: 
                {
                    live: 'https://fluent-live.vercel.app',
                    client: 'https://www.github.com/trevorjalt/fluent-client',
                    api: 'https://www.github.com/trevorjalt/fluent-api'
                },
            tech: 
                {
                    frontend: [
                        'React', 'HTML5', 'CSS3', 'React Router', 'Cypress'
                    ],

                    backend: [
                        'Node.js', 'Express.js', 'Knex.js', 'PostgreSQL', 
                        'helmet', 'cors', 'supertest', 'mocha', 'chai'
                    ],

                    architecture: [
                        'Single Linked List',
                        'JWT Authentication',
                        'RESTful Api'
                    ],
                },
            techSummary: 
                ['React', 'HTML5', 'CSS3', 'React Router', 'Node.js',
                'Express.js', 'Knex.js', 'PostgreSQL', 'Single Linked List',
                'JWT Authentication', 'RESTful Api'],
            slogan: 'let\'s get fluent',
        },
        {
            id: 2,
            image: `${Benchmark}`,
            preview: `${BenchmarkPreview}`,
            name: 'benchMark',
            description: 'A full-stack application created by yours truly, giving the user the ability to track their strength-training progress in real-time, all the while keeping the user firmly in the driver\'s seat with the control of their data.',
            webAddress: 
                {
                    live: 'https://benchmark-live.vercel.app',
                    client: 'https://www.github.com/trevorjalt/benchmark-client',
                    api: 'https://www.github.com/trevorjalt/benchmark-server'
                },
            tech: 
                {
                    frontend: [
                        'React', 'HTML5', 'CSS3', 'date-fns', 'React Router', 'jest'
                    ],

                    backend: [
                        'Node.js', 'Express.js', 'Knex.js', 'PostgreSQL', 'xss', 
                        'helmet', 'cors', 'supertest', 'mocha', 'chai'
                    ],

                    architecture: [
                        'JWT Authentication',
                        'RESTful Api'
                    ]
                },
            techSummary: 
                ['React', 'HTML5', 'CSS3', 'React Router', 'Node.js',
                'Express.js', 'Knex.js', 'PostgreSQL', 'JWT Authentication',
                'RESTful Api'],
            slogan: 'set your benchMark. break your limits'
        },
    ]
}

export default Store
