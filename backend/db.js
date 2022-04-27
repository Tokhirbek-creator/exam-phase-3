const data = [{
    id: 1,
    room: 'Hall',
    devices: [{
            id: 1,
            device: 'TV',
            status: false,
            offPicture: '/tvOf.jpg',
            onPicture: '/tvOn.jpg'
        },
        {
            id: 2,
            device: 'Lamp',
            status: false,
            offPicture: '/lampOf.png',
            onPicture: '/lampOn.png'
        },
    ]
},
    {
        id: 2,
        room: 'Garage',
        devices: [
            {
                id:3,
                device:'Electric gate',
                status: false,
                offPicture: '/gateOf.jpg',
                onPicture: '/gateOn.jpg'
            },
            {
                id: 4,
                device: 'Lamp',
                status: false,
                offPicture: '/lampOf.png',
                onPicture: '/lampOn.png'
            },
        ]
    },
    {
        id:3,
        room:'Kitchen',
        devices: [
            {
                id:5,
                device:'Teapot',
                status: false,
                offPicture: '/teapotOf.jpg',
                onPicture: '/teapotOn.jpg'
            },
            {
                id: 6,
                device: 'Lamp',
                status: false,
                offPicture: '/lampOf.png',
                onPicture: '/lampOn.png'
            },
        ]
    }
];

module.exports = data;
