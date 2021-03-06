const pathData = {
    survey: 'eupivh',
    index: 0,
    group: '77389395-72ce-4092-97bc-3e507212cbd5',
    source:'',
    prepopulate: '%26email%3Ds.an.t.i.ago.jer.ez%40gmail.com%26fname%3DSANTIAGO%26lname%3D%26postcode%3D%26gender%3D%26address%3D%26phone%3D%26state%3D%26age%3D37%26dob%3D1980-01-21',
    uuid: '82ed4ae4-d591-4718-9c50-5da4c6a69a98',
    callback: 'jQuery1113037716368033298364_1492045579455',
    latency: '743',
    process: '9301',
    path:[
        {
            type: 'name',
            name: 'firstName',
            title: 'Enter your first name:',
            label: 'First name',
        },
        {
            type: 'name',
            name: 'lastName',
            title: 'Hi {firstName}, please enter your last name:',
            label: 'Last name',
        },
        {
            type: 'postcode',
            name: 'postcode',
            title: 'Please enter your postcode:',
            label: 'Postcode',
            maxLength: 4
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
            type: 'gender',
            name: 'gender',
            title: 'Please select your gender:',
        },
        {
            type: 'phone',
            name: 'phone',
            title: 'Please enter your mobile number',
            label: 'Mobile Number',
            maxLength: 14
        },
        {
            type: 'yesNo',
            name: 'vmli_co_3507',
            title: 'Dodo NBN plans just got better! Get a FREE SPEED BOOST on an awesome Standard Speed NBN plan. Tick Yes to find out more.',
            offerImage: 'https://creative.mobileembrace.com/test/co-reg-path/img/dodo.png',
            requiredInfo: [
                {
                    type: 'gender',
                    name: 'gender',
                    title: 'Please select your gender:',
                },
                {
                    type: 'suburb',
                    name: 'suburb',
                    title: 'Please enter your suburb:',
                    label: 'Suburb',
                },
                {
                    type: 'select',
                    name: 'favoriteColour',
                    title: 'Hey {firstName} what\'s your favorite colour?',
                    options: [
                        {value:'Red', text:'Red'}, 
                        {value:'Orange', text:'Orange'}, 
                        {value:'Yellow', text:'Yellow'}, 
                        {value:'Green', text:'Green'}, 
                        {value:'Blue', text:'Blue'}, 
                        {value:'Purple', text:'Purple'}, 
                        {value:'Brown', text:'Brown'}, 
                    ],

                },
                {
                    type: 'radio',
                    name: 'radioButtons',
                    title: 'Hey {firstName} who is the greatest?',
                    options: [
                        {value:'Bruce Lee', text:'Bruce Lee'}, 
                        {value:'Jackie Chan', text:'Jackie Chan'}, 
                        {value:'Elvis', text:'Elvis'}, 
                        {value:'Jimi Hendrix', text:'Jimi Hendrix'}, 
                        {value:'Richard Pryor', text:'Richard Pryor'}, 
                    ],
                },
                {
                    type: 'checkbox',
                    name: 'checkboxes',
                    title: 'Hey {firstName} which Beatles do you like? (select all that apply)',
                    options: [
                        {value:'John', text:'John'},
                        {value:'Paul', text:'Paul'},
                        {value:'George', text:'George'},
                        {value:'Ringo', text:'Ringo'},
                        {value:'Peter', text:'Peter'},
                        {value:'None', text:'None'},
                    ],
                },
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_5565464',
            title: 'Virgin Life insurance can provide financial support if you’re not around to take care of family. Insurance issued by TAL Life Limited.',
            offerImage: 'https://creative.mobileembrace.com/test/co-reg-path/img/VirginMoney.png',
            rules: [
                {
                    field: 'age',
                    min: 24,
                },
                {
                    field: 'age',
                    max: 52,
                },
                {
                    field: 'postcode',
                    equals: [4575, 6865, 3547, 2010],
                }
            ]
        },
        {
            type: 'yesNo',
            name: 'vmli_co_4535435',
            title: 'It\'s better knowing your familys future is protected. That\'s NRMADE BETTER! If you\'re considering any of these products, tick to receive more information.',
            offerImage: 'https://creative.mobileembrace.com/test/co-reg-path/img/NRMA.png',
        },
        {
            type: 'yesNo',
            name: 'vmli_co_83',
            title: 'Love sport? Watch all your teams, every round, LIVE AFL, NRL, V8 and F1 with Foxtel\'s Sport + Entertainment pack for $50* a month. Tick Yes to hear more.',
            offerImage: 'https://creative.mobileembrace.com/test/co-reg-path/img/Foxtel.png',
        },
        {
            type: 'checkbox',
            name: 'vmli_co_546841354',
            title: 'Platinum Holiday Club can provide $2000 towards your next holiday, to hear more tell us where you want to go. Please Select:',
            offerImage: 'https://creative.mobileembrace.com/test/co-reg-path/img/PlatinumHolidayClub.png',
            options: [
                {value:'Australia', text:'Australia'}, 
                {value:'New_Zealand', text:'New Zealand'}, 
                {value:'Fiji', text:'Fiji'}, 
                {value:'Asia', text:'Asia'}, 
                {value:'Vanuatu', text:'Vanuatu'}, 
                {value:'Cook_Islands', text:'Cook Islands'}, 
                {value:'Samoa', text:'Samoa'}, 
                {value:'false', text:'Not Interested'}
            ],
        },
        {
            type: 'radio',
            name: 'vmli_co_8654858',
            title: 'Platinum Holiday Club can provide $2000 towards your next holiday, to hear more tell us where you want to go. Please Select:',
            offerImage: 'https://creative.mobileembrace.com/test/co-reg-path/img/PlatinumHolidayClub.png',
            options: [
                {value:'Australia', text:'Australia'}, 
                {value:'New_Zealand', text:'New Zealand'}, 
                {value:'Fiji', text:'Fiji'}, 
                {value:'Asia', text:'Asia'}, 
                {value:'Vanuatu', text:'Vanuatu'}, 
                {value:'Cook_Islands', text:'Cook Islands'}, 
                {value:'Samoa', text:'Samoa'}, 
                {value:'Not_Interested', text:'Not Interested'}
            ],
        },
        {
            type: 'endCard',
            title: 'Congratulations {firstName}! You’re in the draw to Win a $10,000 New York Shopping Spree.\n\nYou’ll begin receiving the latest Surveys & Competitions shortly, catered to your interests.\n\nYou will be redirected to one of our partners shortly.',
            image: 'https://creative.mobileembrace.com/test/co-reg-path/img/endCard.jpg',
            //redirectURL: 'https://www.vizmondmedia.com/',
            redirectDelay: 3000,
        },
        // {
        //     type: 'redirect',
        //     redirectURL: 'https://www.vizmondmedia.com/',
        //     redirectDelay: 3000,
            
        // },
    ],
};



export default pathData;