import { IFollowing } from "./IFollowing";

export const following: IFollowing[] = [
    {
        name: 'Atharva Sabde',
        email: 'atharvaa.sabde@gmail.com',
        avatar: 'https://media.licdn.com/dms/image/D4D03AQGNt9wijdqevw/profile-displayphoto-shrink_800_800/0/1667105220189?e=1692835200&v=beta&t=snPzPG5QglHjvYg_Yiw8Hz3rveZEAN5Db15XrQM9n3s',
        cover_photo: 'https://media.licdn.com/dms/image/C4E16AQE_ULAvQ00BZw/profile-displaybackgroundimage-shrink_350_1400/0/1643900779773?e=1692835200&v=beta&t=MwzXD7F5D0WlXfule8Xb0dZu5Fg3r1v1C7nr1OdpSJE',
        basic: {
            gender: 'Male',
            dob: new Date(2000, 2, 29),
            languages: ['English', 'Hindi', 'Marathi'],
            aboutYou: 'A flexible , Autodidact , budding programmer. Currently focusing on improving skills and optimisation. Also I’m a Computer Hardware enthusiast, as i have spent a considerable amount of time(years) researching about CPU/APUs/GPUs and the technologies on which they are based.Love teaching , also working on it as a side skill.',
            favouriteQuote: 'Time is the only thing which matters',
            nickName: 'Cosmicdust'
        },
        address: {
            hometown: 'Ballarshah',
            currentTown: 'Nagpur',
            currentState: 'Maharashtra',
            homeState: 'Maharashtra',
            country: 'India',
        },
        education: {
            college: 'Rajiv Gandhi College of Engineering & Research',
            highSchool: 'St. Paul Jr. College, Nagpur',
            school: 'Mount Carmel Convent High, Chandrapur'
        },
        work: {
            role: 'Software Engineer',
            organization: 'Global Logic',
            city: 'Nagpur',
            state: 'Maharashtra'
        },
        followers: ['laxmidawane2706@gmail.com', 'krushnathuthe29@gmail.com', 'sagarkamdi@gmail.com', 'aashyadhokpande@gmail.com',],
        following: ['adityamohrail@gmail.com', 'nilaydeshpande@gmail.com', 'abhishektijare@gmail.com', 'prashiktembhurne@gmail.com'],
        posts: [
            {
                image: 'https://media.licdn.com/dms/image/C4D22AQEJkjoQWYauJg/feedshare-shrink_800/0/1626418557916e=1689811200&v=beta&t=fgHHNLR65JO_7NU1Wgi7e4wanzjpwdofHbepqe0uP5k',
                caption: ' 𝙄𝙛 𝙮𝙤𝙪 𝙖𝙧𝙚 𝙣𝙤𝙩 𝙙𝙤𝙞𝙣𝙜 𝙬𝙝𝙖𝙩 𝙮𝙤𝙪 𝙡𝙤𝙫𝙚, 𝙮𝙤𝙪 𝙖𝙧𝙚 𝙬𝙖𝙨𝙩𝙞𝙣𝙜 𝙮𝙤𝙪𝙧 𝙩𝙞𝙢𝙚',
                likeCount: 32,
                commentCount: 1,
                shareCount: 0,
                uploadDate: new Date(2021, 5, 18),
                category: 'other',
                comments: [
                    {
                        email: 'KaustubhTarankanthiwar@gmail.com',
                        comment: 'Great ! Keep up the good work'
                    }
                ],
            },
            {
                image: 'https://media.licdn.com/dms/image/C4D22AQGetqMOT46OFQ/feedshare-shrink_800/0/1594236133834?e=1689811200&v=beta&t=mpRMwvLkUW4P3SGXoN7FsQjjIb4PSGMWoDt5GEdKZCc',
                caption: 'Got certified in basic programming in python NPTEL #quarantinelearning',
                likeCount: 37,
                commentCount: 2,
                shareCount: 0,
                uploadDate: new Date(2020, 3, 11),
                category: 'other',
                comments: [
                    {
                        email: 'AnkitBanait@gmail.com',
                        comment: 'Congraulations!'
                    },
                    {
                        email: 'SatyataGotekar@gmail.com',
                        comment: 'Congrats'
                    }
                ],
            },
            {
                image: 'https://media.licdn.com/dms/image/D4D03AQGNt9wijdqevw/profile-displayphoto-shrink_800_800/0/1667105220189?e=1692835200&v=beta&t=snPzPG5QglHjvYg_Yiw8Hz3rveZEAN5Db15XrQM9n3s',
                caption: 'Young, Dumb & Broke',
                likeCount: 127,
                commentCount: 3,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'profile',
                comments: [
                    {
                        email: 'hritikmanbattulwar@gmail.com',
                        comment: 'Amazing Pic!'
                    },
                    {
                        email: 'laxmidawane2706@gmail.com',
                        comment: 'Ohho!'
                    }
                ],
            },
            {
                image: 'https://media.licdn.com/dms/image/D4D03AQGNt9wijdqevw/profile-displayphoto-shrink_800_800/0/1667105220189?e=1692835200&v=beta&t=snPzPG5QglHjvYg_Yiw8Hz3rveZEAN5Db15XrQM9n3s',
                caption: 'Young, Dumb & Broke',
                likeCount: 127,
                commentCount: 3,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'cover',
                comments: [
                    {
                        email: 'hritikmanbattulwar@gmail.com',
                        comment: 'Amazing Pic!'
                    },
                    {
                        email: 'laxmidawane2706@gmail.com',
                        comment: 'Ohho!'
                    }
                    ,
                    {
                        email: 'sagarkamdi@gmail.com',
                        comment: 'Badhiya!'
                    }
                ],
            },
            {
                image: 'https://media.licdn.com/dms/image/C4E16AQE_ULAvQ00BZw/profile-displaybackgroundimage-shrink_350_1400/0/1643900779773?e=1692835200&v=beta&t=MwzXD7F5D0WlXfule8Xb0dZu5Fg3r1v1C7nr1OdpSJE',
                caption: 'Hello There',
                likeCount: 127,
                commentCount: 0,
                shareCount: 0,
                uploadDate: new Date(2018, 5, 20),
                category: 'cover',
                comments: [],
            },
        ],
    },
    {
        name: 'Laxmi Dawane',
        email: 'laxmidawane2706@gmail.com',
        avatar: 'https://media.licdn.com/dms/image/D4D03AQFFxsOaA9gn6A/profile-displayphoto-shrink_800_800/0/1679077675613?e=1692230400&v=beta&t=w8p-bCvQwrAg1zm7HZu7-ccWbLglKiCB8h-kSZxg2P0',
        cover_photo: 'https://media.licdn.com/dms/image/C4E16AQHE0JMJeB_D2A/profile-displaybackgroundimage-shrink_350_1400/0/1608982157200?e=1692230400&v=beta&t=9Yt3UxGsuHeZ_1VZ4T0uLxHx3ezPG1fqkwJeqgrEFCs',
        basic: {
            gender: 'Female',
            dob: new Date(2000, 5, 27),
            languages: ['English', 'Hindi',],
            aboutYou: 'Tech hobbies, Loves to teach, Loves to add up new technical skills, Creative Writing,Reading Books related to tech, Loves to know about new technologies, Always Looking forward to be indulge in technical courses.',
            favouriteQuote: 'People with brain are more attractive than people with looks🔥💯',
            nickName: 'Gudiya'
        },
        address: {
            currentTown: 'Nagpur',
            currentState: 'Maharashtra',
            hometown: 'Bhopal',
            homeState: 'Madhya Pradesh',
            country: 'India',
        },
        education: {
            college: 'Rajiv Gandhi College of Engineering & Research',
            highSchool: 'St. Convent College, Nagpur',
            school: 'St. Convent, Nagpur'
        },
        work: {
            role: 'Software Test Engineer',
            organization: 'Global Logic',
            city: 'Nagpur',
            state: 'Maharashtra'
        },
        followers: ['atharvaa.sabde@gmail.com', 'krushnathuthe29@gmail.com', 'sagarkamdi@gmail.com', 'aashyadhokpande@gmail.com',],
        following: ['adityamohrail@gmail.com', 'nilaydeshpande@gmail.com', 'abhishektijare@gmail.com', 'prashiktembhurne@gmail.com'],
        posts: [
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/310744919_6568609203155994_8210239379999818498_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tzjJSNV3sYYAX_zlMRC&_nc_ht=scontent.fnag10-1.fna&oh=00_AfA6FBmjDN22N-ZlBrIi8Rqv_OY0pugpmf1C_uC-pVr_yA&oe=6493A679',
                caption: ' Out First Art Teacher',
                likeCount: 3,
                commentCount: 1,
                shareCount: 0,
                uploadDate: new Date(2022, 9, 2),
                category: 'other',
                comments: [
                    {
                        email: 'hritikmanbattulwar@gmail.com',
                        comment: 'Yes '
                    }
                ],
            },
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t1.6435-9/198486233_2988281194789381_8600119621151357436_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=jYDNA3qL_sIAX8CAnq8&_nc_ht=scontent.fnag10-1.fna&oh=00_AfCVLKVGdHd0FWPUngIFPywoOTtsSDoVRh9FzKVoZyQH5Q&oe=64B69A53',
                caption: 'Happy Sunday',
                likeCount: 23,
                commentCount: 2,
                shareCount: 0,
                uploadDate: new Date(2021, 6, 12),
                category: 'other',
                comments: [
                    {
                        email: 'ParmeshwariMehar@gmail.com',
                        comment: 'Beautiful flowers!'
                    },
                    {
                        email: 'adityameshram@gmail.com',
                        comment: 'Blossom'
                    }
                ],
            },
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-1/350648747_642846947287715_1699122185545946718_n.jpg?stp=dst-jpg_s320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=qdtFYl3ewZUAX_QYIjp&_nc_ht=scontent.fnag10-1.fna&oh=00_AfBHrxyy_vPSG9F7vt_OLAkKLzmRFdMTLU1zSduN9g8huA&oe=6494EED5',
                caption: 'Wedding Season is the best season',
                likeCount: 21,
                commentCount: 3,
                shareCount: 0,
                uploadDate: new Date(2023, 4, 30),
                category: 'profile',
                comments: [
                    {
                        email: 'RashmiSourabhBaghmare@gmail.com',
                        comment: 'So pretty swt hrt💕'
                    },
                    {
                        email: 'SurendrakumarMaherban@gmail.com',
                        comment: 'Nice pic. 💐'
                    }
                    ,
                    {
                        email: 'RekhaDoune@gmail.com',
                        comment: 'Amazing pic.'
                    }
                ],
            },
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/290930819_3268764950074336_8077570925365297226_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=iQcOp2_6-G4AX9Kp6ZN&_nc_ht=scontent.fnag10-1.fna&oh=00_AfDEkTy20is2Of72TTF42LFKWq4d2npayXOK_qvIzhWEXw&oe=64951200',
                caption: 'Farewell 2k23',
                likeCount: 12,
                commentCount: 0,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'profile',
                comments: [],
            },
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/290991503_3270669909883840_6852760981444108348_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_ohc=pvewHv6qo4IAX87a80M&_nc_ht=scontent.fnag10-1.fna&oh=00_AfAXQ7UIhLEMgf37Bx0H562tyAM6vyRetkWb-FqPXFZq_Q&oe=6494B722',
                caption: 'Day Spend Well',
                likeCount: 127,
                commentCount: 0,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'profile',
                comments: [],
            },
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t1.6435-9/46519848_2252881738329334_997958676545273856_n.jpg?stp=dst-jpg_p480x480&_nc_cat=105&ccb=1-7&_nc_sid=19026a&_nc_ohc=h7j8eii12QEAX_0AirX&_nc_ht=scontent.fnag10-1.fna&oh=00_AfDBuBPnWpbqIxRaYJe1fWnlnqAkdB4BS3L1Z9ydDFFr4Q&oe=64B69889',
                caption: 'What a Great View',
                likeCount: 34,
                commentCount: 2,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'cover',
                comments: [
                    {
                        email: 'RashmiSourabhBaghmare@gmail.com',
                        comment: 'Awsome💕'
                    },
                    {
                        email: 'SurendrakumarMaherban@gmail.com',
                        comment: 'Nice 💐'
                    }
                ],
            },
        ],
    },
    {
        name: 'Priyanka Porrediwar',
        email: 'priyabattulwar01@gmail.com',
        avatar: 'https://scontent.fpnq13-1.fna.fbcdn.net/v/t1.6435-9/134858924_3398820536907190_4654793759515548057_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=9DezPiPERG8AX9wx03c&_nc_ht=scontent.fpnq13-1.fna&oh=00_AfDzdTwVAy7LOuWgUp30RJtB4d8zAAmaJSykHVtg33_aLw&oe=64B79AAA',
        cover_photo: 'https://scontent.fpnq13-4.fna.fbcdn.net/v/t1.18169-9/26167622_1413407325448531_4853838557341563494_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=gk7MBH4-628AX9Kgp2Q&_nc_ht=scontent.fpnq13-4.fna&oh=00_AfCn2oalhE1rJKBZSMVtUEpMR388YHkhw-4wGX3VWaPqoA&oe=64B7905B',
        basic: {
            gender: 'Female',
            dob: new Date(1992, 2, 30),
            languages: ['English', 'Hindi', 'Marathi'],
            aboutYou: 'Loves to Cook',
            favouriteQuote: 'Hardwork beats talent',
            nickName: 'Priya'
        },
        address: {
            currentTown: 'Mumbai',
            currentState: 'Maharashtra',
            hometown: 'Nagpur',
            homeState: 'Maharashtra',
            country: 'India',
        },
        education: {
            college: 'YCCE Open University',
            highSchool: 'St. Ursula Junior College, Nagpur',
            school: 'St. Ursula School, Nagpur'
        },
        work: {
            role: 'Trainer',
            organization: 'Connect Corp',
            city: 'Nagpur',
            state: 'Maharashtra'
        },
        followers: ['poojamanbattulwar01@gmail.com', 'swapnilporrediwar@gmail.com', 'vanitamanbattulwar@gmail.com', 'aashyadhokpande@gmail.com',],
        following: ['poojamanbattulwar01@gmail.com', 'swapnilporrediwar@gmail.com', 'adityamohrail@gmail.com', 'nilaydeshpande@gmail.com', 'abhishektijare@gmail.com', 'prashiktembhurne@gmail.com'],
        posts: [
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t39.30808-6/310744919_6568609203155994_8210239379999818498_n.jpg?stp=dst-jpg_p843x403&_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=tzjJSNV3sYYAX_zlMRC&_nc_ht=scontent.fnag10-1.fna&oh=00_AfA6FBmjDN22N-ZlBrIi8Rqv_OY0pugpmf1C_uC-pVr_yA&oe=6493A679',
                caption: ' Out First Art Teacher',
                likeCount: 3,
                commentCount: 1,
                shareCount: 0,
                uploadDate: new Date(2022, 9, 2),
                category: 'other',
                comments: [
                    {
                        email: 'hritikmanbattulwar@gmail.com',
                        comment: 'Yes '
                    }
                ],
            },
            {
                image: 'https://scontent.fnag10-1.fna.fbcdn.net/v/t1.6435-9/198486233_2988281194789381_8600119621151357436_n.jpg?stp=dst-jpg_p843x403&_nc_cat=107&ccb=1-7&_nc_sid=19026a&_nc_ohc=jYDNA3qL_sIAX8CAnq8&_nc_ht=scontent.fnag10-1.fna&oh=00_AfCVLKVGdHd0FWPUngIFPywoOTtsSDoVRh9FzKVoZyQH5Q&oe=64B69A53',
                caption: 'Happy Sunday',
                likeCount: 23,
                commentCount: 2,
                shareCount: 0,
                uploadDate: new Date(2021, 6, 12),
                category: 'other',
                comments: [
                    {
                        email: 'ParmeshwariMehar@gmail.com',
                        comment: 'Beautiful flowers!'
                    },
                    {
                        email: 'adityameshram@gmail.com',
                        comment: 'Blossom'
                    }
                ],
            },
            {
                image: 'https://scontent.fpnq13-3.fna.fbcdn.net/v/t1.6435-9/80296913_2467505343372052_7846938651752660992_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=wuEeQF7LqZ0AX_21w18&_nc_ht=scontent.fpnq13-3.fna&oh=00_AfBLNvlDbFv8Yvf85IOlmzJRObP5KjR-9PT1SzxZn9EVxA&oe=64B77394',
                caption: 'Wedding Season is the best season',
                likeCount: 21,
                commentCount: 3,
                shareCount: 0,
                uploadDate: new Date(2023, 4, 30),
                category: 'profile',
                comments: [
                    {
                        email: 'RashmiSourabhBaghmare@gmail.com',
                        comment: 'So pretty swt hrt💕'
                    },
                    {
                        email: 'SurendrakumarMaherban@gmail.com',
                        comment: 'Nice pic. 💐'
                    }
                    ,
                    {
                        email: 'RekhaDoune@gmail.com',
                        comment: 'Amazing pic.'
                    }
                ],
            },
            {
                image: 'https://scontent.fpnq13-3.fna.fbcdn.net/v/t1.6435-9/56949301_1993015430821048_6368332620358483968_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=Bal6Dn5prFkAX_I3mzz&_nc_ht=scontent.fpnq13-3.fna&oh=00_AfCpusUYvYR4P2v0tmeLkdaddlWz3N65Rm0upe-oNmBGmQ&oe=64B7AB22',
                caption: 'Farewell 2k23',
                likeCount: 12,
                commentCount: 0,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'profile',
                comments: [],
            },
            {
                image: 'https://scontent.fpnq13-2.fna.fbcdn.net/v/t1.6435-9/50542091_1895219887267270_8472030056028307456_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0h325pkflQAAX9NOslN&_nc_ht=scontent.fpnq13-2.fna&oh=00_AfBH5DbRLTIdZwr8dwaS1ZX2S6oec-5XIyCePMJSvN6TGQ&oe=64B7814B',
                caption: 'Day Spend Well',
                likeCount: 127,
                commentCount: 0,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'profile',
                comments: [],
            },
            {
                image: 'https://scontent.fpnq13-4.fna.fbcdn.net/v/t1.18169-9/26167622_1413407325448531_4853838557341563494_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=gk7MBH4-628AX9Kgp2Q&_nc_ht=scontent.fpnq13-4.fna&oh=00_AfCn2oalhE1rJKBZSMVtUEpMR388YHkhw-4wGX3VWaPqoA&oe=64B7905B',
                caption: 'What a Great View',
                likeCount: 34,
                commentCount: 2,
                shareCount: 0,
                uploadDate: new Date(2022, 7, 14),
                category: 'cover',
                comments: [
                    {
                        email: 'RashmiSourabhBaghmare@gmail.com',
                        comment: 'Awsome💕'
                    },
                    {
                        email: 'SurendrakumarMaherban@gmail.com',
                        comment: 'Nice 💐'
                    }
                ],
            },
        ],
    },
]

