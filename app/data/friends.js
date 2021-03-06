// Create an array of friends

var friends = [
	{
		name: 'Ray Romano',
		photo: '/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU6Hmf7lMvu_Z9L2L7gSXtP41Dgo9xk22z0u2BSPRIpinBrx8O',
        scores: [1, 
                5, 
                1,
                1, 
                5, 
                5, 
                5, 
                1, 
                5, 
                5]
	},{
		name: 'Alf',
		photo: 'https://metvcdn.metv.com/LUdY8-1491939642-244-show-940x370_ALF.jpg',
        scores: [4, 
                1, 
                4, 
                5, 
                1, 
                1, 
                1, 
                5, 
                1, 
                1]
	},{
		name: 'Ed Grimley',
		photo: 'https://i.redd.it/kq992jg6ig3z.jpg',
        scores: [1, 
                2, 
                3, 
                2, 
                1, 
                2, 
                3, 
                2, 
                1, 
                2
            ]
	},{
		name: 'Blossom',
		photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpBXakm4z3r1L7WTiLwYcip5fzSpOHC0PaJdLn4_G_vgvlR3AoQ',
        scores: [5, 
                4, 
                3, 
                2, 
                1, 
                2, 
                3, 
                4, 
                5, 
                4]
    },{
		name: 'Ally McBeal',
		photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0idly1Ot-s7r2Gc_1NOjceg6DTKqz5oJBFDR2NYFst2fvTNlPg',
        scores: [1, 
                1, 
                1, 
                1, 
                1, 
                1, 
                1, 
                1, 
                1, 
                1]
	},{
		name: 'Big Tasty',
		photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvIxEMV3zWON6i-gZ2KG_iHkh57qjxPpXcp_YJIRActN8gsRM',
        scores: [3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3]
	},{
		name: 'Blanche',
		photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtZsNLs30HloQ5rGh3xBlyqtvGciQb9mMqnmXtIMA86wW2H3Jm',
        scores: [3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3,
                3]
	},{
			name: 'Spencer',
		photo: 'data:image/jpeg;base64,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',
        scores: [3, 
                3, 
                3,
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3]
	},{
			name: 'Peg',
		photo: 'data:image/jpeg;base64,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',
        scores: [3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3, 
                3]
	},{
		name: 'Tooty',
		photo: 'https://i.pinimg.com/236x/7d/d2/cb/7dd2cb4b1b7edfdd327f1c83c2744ce1--facts-of-life-skates.jpg',
        scores: [5, 
                1, 
                5, 
                2, 
                1, 
                1, 
                1, 
                5, 
                1, 
                1]
	}];

module.exports = friends;

