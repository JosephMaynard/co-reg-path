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
            type: 'test',
            rawHTML: '<p>Custom Raw HTML Step</p><p><a href="javascript:window.globalObject.nextStep()" style="display:block;width:50%;color:#FFF;background:#F00;padding:0.4em;margin:0 auto;font-weight:bold;">Custom CSS Button</a></p><button onclick="window.globalObject.nextStep()" class="CTAButton">CTA Button</button>'
        },
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
            type: 'radio',
            name: 'vmli_co_3427',
            title: 'Platinum Holiday Club can provide $2000 towards your next holiday, to hear more tell us where you want to go. Please Select:',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/4951443e-2277-45e9-a336-2d46aa4620ce.jpg',
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
            type: 'yesNo',
            name: 'vmli_co_3504',
            title: 'RAMS has helped more than 100,000 people realise their dream of owning their own home. Tick Yes and we’ll have your local franchisee contact you shortly',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/15222942-e1e6-4019-a4ed-a6e962e187c8.jpg',
            requiredInfo: [
                {
                    type: 'select',
                    name: 'vmli_if_1392-3504',
                    offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/15222942-e1e6-4019-a4ed-a6e962e187c8.jpg',
                    title: 'How can we help you?',
                    options: [
                        {value:'FHB', text:'Buying or building your first home'}, 
                        {value:'FHB1', text:'Buying or building a home to live in'},
                        {value:'INV', text:'Buying or building an investment property'},
                        {value:'REFI', text:'Looking for a better deal on your home loan'},
                        {value:'CONS', text:'Consolidate your debt into one easy loan'},
                        {value:'RAMS-CUST', text:'Make a change to my existing RAMS loan'},
                    ],
                },
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_2978',
            title: 'Love getting things for FREE? Then you are going to love FreeSampleGiveaway! It\'s Australia’s destination for people who want to try new products from big brands! Tick Yes to join for FREE & they’ll email you free samples!',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/f0107596-954b-4a06-ac04-262091c821a0.jpg',
        },
        {
            type: 'select',
            name: 'vmli_cg_3656',
            title: 'What is your current housing situation?',
            options: [
                {value: '3675', text: 'Renting' },
                {value: '3676', text: 'Mortgage/Paying off your own home' },
                {value: '3677', text: 'Own your own home' },
                {value: '3678', text: 'Have an Investment Property' },
                {value: '3679', text: 'N/A' },
            ]
        },
        {
            type: 'radio',
            name: 'vmli_cg_3535',
            title: 'Receive HOT offers NOW! Be the first to hear about new products and great money saving ideas for your home and family. Select your favourite categories and never miss a good deal again:',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/27550151-76b0-47eb-956e-de7f9c074d9a.jpg',
            options: [
                {value:'1', text:'Home'},
                {value:'2', text:'Garden'},
                {value:'3', text:'Groceries'},
                {value:'4', text:'Stationery'},
                {value:'5', text:'Craft'},
                {value:'6', text:'Pets'},
                {value:'7', text:'No thanks'},
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_83',
            title: 'Love sport? Watch all your teams, every round, LIVE AFL, NRL, V8 and F1 with Foxtel\'s Sport + Entertainment pack for $50* a month. For a limited time only with no lock-in contract. Tick Yes to hear more.',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/6e6861ba-7693-4303-9a74-9f885f9bd7b5.jpg',
        },
        {
            type: 'yesNo',
            name: 'vmli_co_3507',
            title: 'Dodo NBN plans just got better! Get a FREE SPEED BOOST on an awesome Standard Speed NBN plan. Tick Yes to find out more.',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/cdca8584-c0e8-40bc-9c5b-ec01d0387a44.jpg',
            requiredInfo: [
                {
                    type: 'email',
                    name: 'email',
                    title: 'Please enter your email address:',
                },
                {
                    type: 'name',
                    name: 'lastName',
                    title: 'Please enter your last name:',
                    label: 'Last name',
                },
                {
                    type: 'name',
                    name: 'firstName',
                    title: 'Please enter your first name:',
                    label: 'First name',
                },
                {
                    type: 'select',
                    name: 'state',
                    title: 'Please select your state',
                    options: [
                        {value: 1, text: 'New South Wales'},
                        {value: 2, text: 'Victoria'},
                        {value: 3, text: 'Australian Capital Territory'},
                        {value: 4, text: 'Queensland'},
                        {value: 5, text: 'Tasmania'},
                        {value: 6, text: 'South Australia'},
                        {value: 7, text: 'Western Australia'},
                        {value: 8, text: 'Northern Territory'},
                    ],
                },
                {
                    type: 'phone',
                    name: 'phone',
                    title: 'Please enter your Phone Number (We contact winners via Phone)',
                    label: 'Phone Number',
                    maxLength: 14
                },
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_1721',
            title: 'Join MyOpinions - Australia’s PAID Survey website. Earn points for online surveys and redeem instantly for Hoyts Tickets, Myer Vouchers, iTunes Credit, Pizza Vouchers and more!',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/46780f1f-178a-4ee7-b647-1bd6d200ac0e.jpg',
        },
        {
            type: 'yesNo',
            name: 'vmli_if_170-3824',
            title: 'Tick Yes to join Velocity Frequent Flyer for free and you could WIN 1 of 20 prizes of $2,000 worth of flights with Virgin Australia to take you on your next adventure.\nBy ticking Yes, I confirm that I have read and agree to the Velocity membership T&Cs, the Velocity Privacy Statement, Privacy Policy, and the competition T&Cs for the above draw.',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/9284d12c-2e59-41e1-8c9b-0dc1a6e9e62d.png',
            requiredInfo: [
                {
                    type: 'dob',
                    name: 'dob',
                    title: 'Please enter your date of birth:',
                },
                {
                    type: 'input',
                    name: 'address',
                    title: 'Please enter your address',
                    inputType: 'text',
                    label: 'Address'
                },
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_77',
            title: 'Would you like to take home an iPhone 6 or Macbook Pro Laptop? Enter a short consumer survey, in return for a chance to WIN! Tick Yes and participate today!',
            link: 'http://prizereactor.com.au/privacyPolicy.php',
            linkText: 'Privacy Policy',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/b0665c55-9874-4970-887d-b5e364dfe5be.jpg',
            requiredInfo: [
                {
                    type: 'suburb',
                    name: 'suburb',
                    title: 'Please select your suburb:',
                },
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_94',
            title: 'Spreets scours your city for deals, adventures and restaurants with discounts up to 90%. Tick Yes to Signup!',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/90b46925-0ce0-4828-af97-47a7def4a126.jpg',
        },
        {
            type: 'checkbox',
            name: 'vmli_co_3857',
            title: 'Take advantage of amazing FLY deals to Europe in 2018 with APT. Download your FREE Europe 2018 Guide and find out all about Luxury River Cruising from Amsterdam to Budapest. Where would your Dream Europe Journey take you? Select your destination:',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/95c8c2fa-56be-4379-9515-f78908a84d83.png',
            options: [
                {value: '1', text: 'Arles to Paris'},
                {value: '2', text: 'Lisbon to Madrid'},
                {value: '3', text: 'Arles to Amsterdam'},
                {value: '4', text: 'Bordeaux region'},
                {value: '5', text: 'No Thanks'},
            ],
        },
        {
            type: 'yesNo',
            name: 'vmli_co_3533',
            title: 'Sign me up to access Wotif Mates Rates (that’ll save me up to 50% on some of Wotif\'s fave hotels) and send me awesome travel deals.',
            offerImage: 'https://leadinterface.vizmondmedia.com/attachments/coregs/90b46925-0ce0-4828-af97-47a7def4a126.jpg',
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