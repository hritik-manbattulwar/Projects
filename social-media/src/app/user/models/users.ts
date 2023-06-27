import { IUser } from "./IUser";

export const users: IUser[] = [
    {
        name: 'Hritik Manbattulwar',
        password: 'Hritik@123',
        email: 'hritikmanbattulwar@gmail.com',
        avatar: 'https://pbs.twimg.com/profile_images/1111452257982152704/L20xiaXz_400x400.jpg',
        basic: {
            gender: 'Male',
            dob: new Date(2000, 1, 5),
            languages: ['English', 'Hindi', 'Marathi'],
            aboutYou: 'I am a Graduate Majored in Computer Science Engineering, familiar with a range of development techniques and tools. Skilled in both frontend and backend technologies including HTML/CSS3,Bootstrap, Java, Spring-boot, Restful API, SQL,NOSQL, JavaScript, NodeJS and ReactJS. I have a good knowledge of the design of user interfaces, restful API, Webservices and problem solving.',
            favouriteQuote: 'Power Isn’t Determined By Your Size, But By The Size Of Your Heart And Dreams.',
            nickName: 'Hrk'
        },
        address: {
            homeCity: 'Nagpur',
            homeState: 'Maharashtra',
            currentCity: 'Indore',
            currentState: 'Madhya Pradesh',
            country: 'India'
        },
        contact: {
            email: 'manbattulwarhritik@gmail.com',
            primaryPhone: '+91 7350630044',
            secondaryPhone: '+91 9511613137'
        },
        education: {
            college: 'Rajiv Gandhi College of Enginnering & Research,Nagpur',
            highSchool: 'Sri Chaitanya Junior Kalashala,Hyderabad',
            school: 'Bishop Cotton School,Nagpur'
        },
        social: {
            insta: 'https://www.instagram.com/hrk_007/',
            website: 'https://hrk.com/'
        },
        work: {
            designation: 'Software Engineer',
            organization: 'Newput Infotech',
        },
        followers: [
            'atharvaa.sabde@gmail.com',
            'laxmidawane2706@gmail.com',
            'priyabattulwar01@gmail.com',
            'poojabattulwar01@gmail.com',
            "johndoe@example.com",
            "janesmith@example.com",
            "robertjohnson@example.com"
        ],
        following: [
            'atharvaa.sabde@gmail.com',
            'laxmidawane2706@gmail.com',
        ],
        posts: [
            {
                image: 'https://images.unsplash.com/photo-1508179719682-dbc62681c355?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2378&q=80',
                caption: 'When the bass drops, so do my problems.',
                likeCount: 87,
                commentCount: 20,
                shareCount: 13,
                uploadDate: new Date(2023, 5, 19, 22, 50),
                category: 'other',
                comments: [
                    {
                        email: 'poojabattulwar01@gmai.com',
                        comment: "Nice picture",
                    },
                ],
            },
            {
                image: 'https://pbs.twimg.com/profile_images/1111452257982152704/L20xiaXz_400x400.jpg',
                caption: 'Until I am not dead there are infinite chances where I can win',
                likeCount: 182,
                commentCount: 10,
                shareCount: 0,
                uploadDate: new Date(2020, 11, 20, 22, 50),
                category: 'profile',
                comments: [
                    {
                        email: 'poojabattulwar01@gmai.com',
                        comment: "Nice picture",
                    },
                    {
                        email: 'atharvaa.sabde@gmai.com',
                        comment: "Awesome",
                    }
                ],
            },
            {
                image: 'https://scontent.fpnq13-2.fna.fbcdn.net/v/t31.18172-8/20369591_1244641625681652_7233549028153157417_o.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=wBa1ObPfD5MAX8uu9BO&_nc_ht=scontent.fpnq13-2.fna&oh=00_AfDO7WAmvpDbQS4QPpVsdGvLc1MDHJ0j9QnOUwjxMyrEFw&oe=64B3428E',
                caption: 'Heroes got Remembered But Legends Never Die',
                likeCount: 182,
                commentCount: 10,
                shareCount: 0,
                uploadDate: new Date(2020, 11, 20),
                category: 'profile',
                comments: [
                    {
                        email: 'poojabattulwar01@gmai.com',
                        comment: "Nice picture",
                    },
                    {
                        email: 'atharvaa.sabde@gmai.com',
                        comment: "Awesome",
                    }
                ],
            },
            {
                image: 'https://scontent.fpnq13-3.fna.fbcdn.net/v/t31.18172-8/13173448_895873870558431_6639598082828033467_o.jpg?stp=c342.0.1365.1365a_dst-jpg_s851x315&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_ohc=BOqSR_Wwql8AX8LbCzy&_nc_oc=AQkhDqn7AgGz4_Nylpd4c8xMlAopmJZEcVTm_Wsws4DoQgu1swt5NNdKLe6SDDr2nLw&_nc_ht=scontent.fpnq13-3.fna&oh=00_AfBiizQK9Paut53tlooNSdcahF1E3684clRPex9VnQvMEw&oe=64B33E0F',
                caption: 'Burning old memories',
                likeCount: 212,
                commentCount: 20,
                shareCount: 0,
                uploadDate: new Date(2019, 7, 13),
                category: 'profile',
                comments: [
                    {
                        email: 'poojabattulwar01@gmai.com',
                        comment: "Nice picture",
                    },
                    {
                        email: 'atharvaa.sabde@gmai.com',
                        comment: "Awesome",
                    }
                ],
            },
            {
                image: 'https://scontent.fpnq13-4.fna.fbcdn.net/v/t1.18169-9/12036441_771910839621402_6097604143654267942_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=ba80b0&_nc_ohc=_77IDaJydhwAX9T9b9u&_nc_ht=scontent.fpnq13-4.fna&oh=00_AfCNIq2khan4S68KwY4jUE0KVQN4XJ6yjyWQkOpbB-yygA&oe=64B34F9B',
                caption: 'Address: building no 7 & 8,450 Quarters,police line takli,katol road nagpur.',
                likeCount: 212,
                commentCount: 20,
                shareCount: 0,
                uploadDate: new Date(2015, 5, 27),
                category: 'other',
                comments: [
                    {
                        email: 'poojabattulwar01@gmail.com',
                        comment: "Ganpati Bappa Morya",
                    },
                    {
                        email: 'atharvaa.sabde@gmail.com',
                        comment: "Nice Decoration",
                    }
                    ,
                    {
                        email: 'laxmidawane2706@gmail.com',
                        comment: "Can't wait to see",
                    }
                ],
            },
            {
                image: 'https://i.pinimg.com/736x/16/24/e9/1624e9c7b43384ab522aedba5469a060.jpg',
                caption: 'Travelling Makes Me Happy',
                likeCount: 119,
                commentCount: 8,
                shareCount: 0,
                uploadDate: new Date(2017, 3, 27),
                category: 'cover',
                comments: [],
            },
            {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTf2fYd6gDi9dlRfBD9U977F_h2Zu-qm7ImQ&usqp=CAU',
                caption: 'Everything is Unique',
                likeCount: 153,
                commentCount: 8,
                shareCount: 4,
                uploadDate: new Date(2013, 6, 15),
                category: 'cover',
                comments: [],
            },
            {
                image: 'https://images.unsplash.com/photo-1508247967583-7d982ea01526?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
                caption: 'Colors are amazing',
                likeCount: 273,
                commentCount: 12,
                shareCount: 8,
                uploadDate: new Date(2016, 4, 15),
                category: 'cover',
                comments: [],
            },

        ]
    }
]