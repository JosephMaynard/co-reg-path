const pathData = [
    {
        type: 'name',
        name: 'firstName',
        title: 'Enter your first name:',
        label: 'First name',
    },
    {
        type: 'name',
        name: 'lastName',
        title: 'Enter your last name:',
        label: 'Last name',
    },
    {
        type: 'email',
        name: 'email',
        title: 'Enter your email address:',
        label: 'Email address',
    },
     {
        type: 'dob',
        name: 'dob',
        title: 'Please enter your date of birth:',
    },
    {
        type: 'postcode',
        name: 'postcode',
        title: 'Please enter your postcode:',
        label: 'Postcode',
    },
    {
        type: 'gender',
        name: 'gender',
        title: 'Please select your gender:',
    },
    {
        type: 'phone',
        name: 'phone',
        title: 'Please enter your mobile number',
        label: 'Mobile N',
    },
    {
        type: 'offerBool',
        name: 'offer1',
        title: 'Dodo NBN plans just got better! Get a FREE SPEED BOOST on an awesome Standard Speed NBN plan. Tick Yes to find out more.',
        image: 'https://creative.mobileembrace.com/test/co-reg-path/img/dodo.png',
        requiredInfo: ['state'],
    },
    {
        type: 'offerBool',
        name: 'offer2',
        title: 'Virgin Life insurance can provide financial support if you’re not around to take care of family. Insurance issued by TAL Life Limited. General advice only and please read the PDS.',
        image: 'https://creative.mobileembrace.com/test/co-reg-path/img/VirginMoney.png',
        requiredInfo: ['state'],
    },
    {
        type: 'offerBool',
        name: 'offer3',
        title: 'It\'s better knowing your familys future is protected. That\'s NRMADE BETTER! If you\'re considering any of these products, tick to receive more information.\n Insurance Issued by TAL Life Limited and Involuntary Unemployment cover issued by St. Andrew\'s Insurance (Australia) Pty Ltd. Please read the PDS.',
        image: 'https://creative.mobileembrace.com/test/co-reg-path/img/NRMA.png',
    },
    {
        type: 'offerBool',
        name: 'offer4',
        title: 'Love sport? Watch all your teams, every round, LIVE AFL, NRL, V8 and F1 with Foxtel\'s Sport + Entertainment pack for $50* a month. For a limited time only with no lock-in contract. Tick Yes to hear more.',
        image: 'https://creative.mobileembrace.com/test/co-reg-path/img/Foxtel.png',
    },
    // {
    //     type: 'offerMultiChoice',
    //     name: 'offer1',
    //     title: 'Platinum Holiday Club can provide $2000 towards your next holiday, to hear more tell us where you want to go. Please Select:',
    //     image: 'https://leadinterface.vizmondmedia.com/attachments/coregs/4951443e-2277-45e9-a336-2d46aa4620ce.jpg',
    //     choices: ['Australia', 'New Zealand', 'Fiji', 'Asia', 'Vanuatu', 'Cook Islands', 'Samoa', 'Not Interested'],
    //     requiredInfo: ['email', 'firstName', 'lastName', 'dob', 'phone', ],
    // }
];



export default pathData;