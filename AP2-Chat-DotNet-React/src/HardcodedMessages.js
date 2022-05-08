const hardcodedMessages = {
    'Batman': {
        'Superman': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '8/4/2022',
                time: '21:44',
                content: 'Yo Clark, Man Of Steel sucked.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '8/4/2022',
                time: '21:45',
                content: 'Dont you have a clown to chase?'
            },
            {
                type: 'VIDEO-LOCAL',
                direction: 'TO',
                date: '8/4/2022',
                time: '21:46',
                content: 'video-example.mp4'
            }
        ],
        'Messi': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:23',
                content: 'Im vengeance.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:24',
                content: 'Que?'
            }, 
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:25',
                content: 'No hablo ingles'
            },
            {
                type: 'VIDEO-LOCAL',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:26',
                content: 'video-example2.mp4'
            },
        ],
        'Ronaldo': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '7/4/2022',
                time: '8:52',
                content: 'Going to Manchester United was a huge mistake.'
            },
            {
                type: 'IMG-LOCAL',
                direction: 'FROM',
                date: '7/4/2022',
                time: '8:53',
                content: 'crying-jordan.png'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '7/4/2022',
                time: '8:53',
                content: 'Siiiiiiiiuuuuuu'
            }
        ],
        'Max': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:31',
                content: 'Hey Max, how did the race go?'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '12:32',
                content: 'Who is this?'
            },
            {
                type: 'IMG-LOCAL',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:33',
                content: 'surprised-batman.jpg'
            },
            {
                type: 'AUDIO-LOCAL',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:34',
                content: 'PinkPanther60.wav'
            },
        ],
        'Joker': [
            {
                type: 'TEXT',
                direction: 'TO',
                date: '14/4/2022',
                time: '15:27',
                content: 'You are garbage that kills for money.'
            },
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '14/4/2022',
                time: '15:28',
                content: 'Its not about money, its about sending a message.'
            },
        ]
    },
    'Superman': {
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '8/4/2022',
                time: '21:44',
                content: 'Yo Clark, Man Of Steel sucked.'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '8/4/2022',
                time: '21:45',
                content: 'Dont you have a clown to chase?'
            },
            {
                type: 'VIDEO-LOCAL',
                direction: 'FROM',
                date: '8/4/2022',
                time: '21:46',
                content: 'video-example.mp4'
            }
        ],
        'Messi': [],
        'Ronaldo': [],
        'Max': [],
        'Joker': []

    },
    'Messi': {
        'Superman': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:23',
                content: 'Im Batman.'
                
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:24',
                content: 'Que?'
            }, 
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '18:25',
                content: 'No hablo ingles'
            },
            {
                type: 'VIDEO-LOCAL',
                direction: 'FROM',
                date: '9/4/2022',
                time: '18:26',
                content: 'video-example2.mp4'
            },
        ],
        'Ronaldo': [],
        'Max': [],
        'Joker': []
    },
    'Ronaldo': {
        'Superman': [],
        'Messi': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '7/4/2022',
                time: '8:52',
                content: 'Going to Manchester United was a huge mistake.'
            },
            {
                type: 'IMG-LOCAL',
                direction: 'TO',
                date: '7/4/2022',
                time: '8:53',
                content: 'crying-jordan.png'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '7/4/2022',
                time: '8:53',
                content: 'Siiiiiiiiuuuuuu'
            }
        ],
        'Max': [],
        'Joker': []
    },
    'Max': {
        'Superman': [],
        'Messi': [],
        'Ronaldo': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '9/4/2022',
                time: '12:31',
                content: 'Hey Max, how did the race go?'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:32',
                content: 'Awful, car had battery problems.'
            },
            {
                type: 'IMG-LOCAL',
                direction: 'FROM',
                date: '9/4/2022',
                time: '12:33',
                content: 'surprised-batman.jpg'
            },
            {
                type: 'AUDIO-LOCAL',
                direction: 'TO',
                date: '9/4/2022',
                time: '12:34',
                content: 'PinkPanther60.wav'
            }
        ],
        'Joker': []
    },
    'Joker': {
        'Superman': [],
        'Messi': [],
        'Ronaldo': [],
        'Batman': [
            {
                type: 'TEXT',
                direction: 'FROM',
                date: '14/4/2022',
                time: '15:27',
                content: 'You are garbage that kills for money.'
            },
            {
                type: 'TEXT',
                direction: 'TO',
                date: '14/4/2022',
                time: '15:28',
                content: 'Its not about money, its about sending a message.'
            },
        ],
        'Max': []
    }
}
export default hardcodedMessages;