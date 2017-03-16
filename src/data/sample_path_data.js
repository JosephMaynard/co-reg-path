const pathData = [
    {
        type: 'email',
        name: 'email',
        title: 'Enter your email address:',
        placeholder: 'Email address',
    },
    {
        type: 'name',
        name: 'firstName',
        title: 'Enter your first name:',
        placeholder: 'First name',
    },
    {
        type: 'name',
        name: 'lastName',
        title: 'Enter your last name:',
        placeholder: 'Last name',
    },
    {
        type: 'postcode',
        name: 'postcode',
        title: 'Please enter your postcode:',
    },
    {
        type: 'gender',
        name: 'gender',
        title: 'Please select your gender:',
    },
     {
        type: 'dob',
        name: 'dob',
        title: 'Please enter your date of birth:',
    },
    {
        type: 'phone',
        name: 'phone',
        title: 'Please enter your mobile number',
    },
    {
        type: 'offerMultiChoice',
        name: 'offer1',
        title: 'Platinum Holiday Club can provide $2000 towards your next holiday, to hear more tell us where you want to go. Please Select:',
        image: 'https://leadinterface.vizmondmedia.com/attachments/coregs/4951443e-2277-45e9-a336-2d46aa4620ce.jpg',
        choices: ['Australia', 'New Zealand', 'Fiji', 'Asia', 'Vanuatu', 'Cook Islands', 'Samoa', 'Not Interested'],
        requiredInfo: ['email', 'firstName', 'lastName', 'dob', 'phone', ],
    },
    {
        type: 'offerBool',
        name: 'offer2',
        title: 'Dodo NBN plans just got better! Get a FREE SPEED BOOST on an awesome Standard Speed NBN plan. Tick Yes to find out more.',
        image: 'https://leadinterface.vizmondmedia.com/attachments/coregs/cdca8584-c0e8-40bc-9c5b-ec01d0387a44.jpg',
        requiredInfo: ['state'],
    },
    {
        type: 'offerBool',
        name: 'offer3',
        title: 'Would you like to take home an iPhone 6 or Macbook Pro Laptop? Enter a short consumer survey, in return for a chance to WIN! Tick Yes and participate today!',
        image: 'https://leadinterface.vizmondmedia.com/attachments/coregs/cdca8584-c0e8-40bc-9c5b-ec01d0387a44.jpg',
    }
];



export default pathData;