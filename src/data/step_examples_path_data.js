const pathData = {
    survey: 'eupivh',
    index: 0,
    group: '77389395-72ce-4092-97bc-3e507212cbd5',
    source:' ',

    //Values in prepopulate are added to state when JSON loads, and steps asking for prepopulated data will be skipped
    prepopulate: '%26email%3Ds.an.t.i.ago.jer.ez%40gmail.com%26fname%3DSANTIAGO%26lname%3D%26postcode%3D%26gender%3D%26address%3D%26phone%3D%26state%3D%26age%3D37%26dob%3D1980-01-21',
    uuid: '82ed4ae4-d591-4718-9c50-5da4c6a69a98',
    callback: 'jQuery1113037716368033298364_1492045579455',
    latency: '743',
    process: '9301',

    path:[

        {
            //TYPE
            //Sets the type of the step
            //If step type is from predefined list certain elements and validation will be added automatically, otherwise the step will be empty and can be configured and validated manually.
            //Predefined step types:
            //    name     - Text input for names with built in validation regex name.match(/^[a-zA-Z-.\\' ]+$/u)
            //    email    - Email input with built in validation, require (something)@(something).(something)
            //    postcode - Postcode input, type number, max length 4, will automatically query LI API for state and suburb when set.
            //    dob      - Show DAY - MONTH - YEAR to enter date of birth, automatically sets age when set, returns in (YYY-MM-DD) format: "1982-06-17" 
            //    suburb   - Dropdown populated from LI API, if one suburb is returned from API value is set and step is skipped 
            //    phone    - Number input  with built in validation regex: RegExp(/[0-9]{8,11}/i)
            //    input    - Generic input, type defaults to text but can be changed to other types (e.g. number, tel, etc.) with the inputType property.
            //    select   - Creates select drop-down. Option must be selected to proceed to next step. Requires 'options' or step will be ignored
            //    radio    - Requires 'options' or step will be ignored
            //    checkbox - Creates Requires 'options' or step will be ignored
            //    gender   - Shows male and female buttons, returns 'Male' or 'Female'
            //    yesNo    - Shows no and yes buttons instead of CTA Button which return values false or true
            type: 'name',

            //INPUT TYPE
            //Sets the input type on 'input' steps, defaults to 'text' if not set, ignored on all other step types
            inputType: 'tel',

            //MIN LENGHT
            //Sets minlength attribute on 'input' type steps when type is 'text', ignored on all other step types
            minLength: 5,

            //NAME
            //Name used for form element to collect data, predefined step types will be skipped if this is not set.
            name: 'lname',

            //OFFER IMAGE
            //URL of 120px X 60px  offer image the will display at the top center of the step 
            offerImage: 'http://assetserver/offerImage.jpg',

            //IMAGE
            //URL of full width image that will stretch to 100% of the step width (minus padding)
            image: 'http://assetserver/image.jpg',

            //TITLE
            //Text shown on step.
            //Template strings can be used by surrounding variables with {} character.
            //e.g. {fname} will be replace with the value of fname from the collected data or removed if it hasn't been set.
            //Line breaks can be included by using <br> Note it's using split('<br>') so <BR> or <br/> will not work and will be displayed i the text.
            //Some characters will need to be escaped to to avoid problems
            title: 'Hi {fname}<br>what\'s your last name?',

            //RAW HTML
            //Raw HTML code that can be injected with in-line styles
            //Two functions are in the globalObject to collect data or proceed to the next step:
            // <button onclick="window.globalObject.collectData(\'testValue\', \'monkey\')" class="CTAButton">Set test value to monkey</button>
            // <a href="javascript:window.globalObject.nextStep()" style="display:block;width:50%;color:#FFF;background:#F00;padding:0.4em;">Custom Next Button</a>

            //MAKE SURE NO BAD PEOPLE ADD MALWARE SCRIPT TAGS HERE!!!

            rawHTML: '<p>Custom Raw HTML Step</p><a href="javascript:window.globalObject.nextStep()" style="display:block;width:50%;color:#FFF;background:#F00;padding:0.4em;margin:0 auto;font-weight:bold;">Custom CSS Button</a><button onclick="window.globalObject.collectData(\'iLikeCats\', true)" class="CTAButton">I Like Cats!</button>',
            

            //LABEL
            //Label for form elements on name, email, postcode, suburb, phone, input, select, radio and checkbox step types
            //Ignored on other step types
            label: 'Last Name',

            //MAX LENGHT
            //Limits the amount of characters that can be entered 
            maxLength: 64,

            //OPTIONS
            //Array of objects containing value and text to populate select, radio and checkbox steps. These steps will be ignored if options are not set.
            options: [
                {value:'Red', text:'Red'}, 
                {value:'Orange', text:'Orange'}, 
                {value:'Yellow', text:'Yellow'}, 
                {value:'Green', text:'Green'}, 
                {value:'Blue', text:'Blue'}, 
                {value:'Purple', text:'Purple'}, 
                {value:'Brown', text:'Brown'}, 
            ],


            //REQUIRED INFO
            //If value other than false is set for the current step, all additional info steps will be added immediately after the current step
            //If something has already been collected with the same 'name', step will not be added
            //More required steps can be nested inside the additional steps, if yo really wan to!
            requiredInfo: [
                {
                    type: 'gender',
                    name: 'gender',
                    title: 'Please select your gender:',
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
                {
                    type: 'suburb',
                    name: 'suburb',
                    title: 'Please enter your suburb:',
                    label: 'Suburb',
                },
            ],

            //RULES
            //After each step all remaining steps will be filtered according to whether a value has been collected for that name, i.e. if you've collect 'fname' all future steps with the name 'fname' will be ignored.
            //Rules can also be set for each step which will be tested when a values has been collected for that field
            //Available rules are:min, max, minLength, maxLength, equal, notEqual, inList and notInList
            //If no value has been collected for the field in a rule, it will not be filtered by that rule
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
                    inList: [4575, 6865, 3547, 2010],
                },
                {
                    field: 'postcode',
                    notInList: [3032, 7258, 6666],
                },
                {
                    field: 'gender',
                    notEqual: 'Male',

                }
            ],

            //REGEX
            //Add custom validation for any step
            //Built in validation for any step can be overridden by regex
            regex: '/^[a-zA-Z-.\\\' ]+$/',

            //REGEX FLAGS
            //Optional, only used if 'regex' is set
            regexFlags: 'u',

            //REDIRECT
            //Any step can redirect to another URL in the same window, designed to be used when a path is completed
            //Defaults to redirecting immediately, can be delayed by setting 'redirectDelay'
            redirectURL: 'https://www.vizmondmedia.com/',

            //REDIRECT DELAY
            //Time in milliseconds to wait before redirecting to 'redirectURL', ignored if 'redirectURL' is not set
            redirectDelay: 3000,

        },

        //EXAMPLE STEPS:
        {
            type: 'name',
            name: 'firstName',
            title: 'Enter your first name:',
            label: 'First name',
            regex: '',
            regexFlags: '',
        },
        {
            type: 'email',
            name: 'email',
            title: 'Enter your email address:',
            label: 'Email address',
            regex: '',
            regexFlags: '',
        },
        {
            type: 'postcode',
            name: 'postcode',
            title: 'Please enter your postcode:',
            label: 'Postcode',
            maxLength: 4,
            regex: '',
            regexFlags: '',
        },
        {
            type: 'dob',
            name: 'dob',
            title: 'Please enter your date of birth:',
        },
        {
            type: 'suburb',
            name: 'suburb',
            title: 'Please enter your suburb:',
            label: 'Suburb',
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

        //GENERIC STEPS
        {
            type: 'input',
            title: 'Test Input',
            inputType: 'text',
            name: 'testInput',
            maxLength: 5
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

        //OFFER STEPS
        {
            type: 'yesNo',
            name: 'vmli_co_3507',
            title: 'Dodo NBN plans just got better! Get a FREE SPEED BOOST on an awesome Standard Speed NBN plan. Tick Yes to find out more.',
            image: 'https://creative.mobileembrace.com/test/co-reg-path/img/dodo.png',
            requiredInfo: [
                {
                    type: 'gender',
                    name: 'gender',
                    title: 'Please select your gender:',
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
                    type: 'suburb',
                    name: 'suburb',
                    title: 'Please enter your suburb:',
                    label: 'Suburb',
                },
            ],
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
            type: 'checkbox',
            name: 'vmli_co_546841354',
            title: 'Platinum Holiday Club can provide $2000 towards your next holiday, to hear more tell us where you want to go. Please Select:',
            image: 'https://creative.mobileembrace.com/test/co-reg-path/img/PlatinumHolidayClub.png',
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
            image: 'https://creative.mobileembrace.com/test/co-reg-path/img/PlatinumHolidayClub.png',
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
            redirectURL: 'https://www.vizmondmedia.com/',
            redirectDelay: 3000,
        },
        {
            type: 'redirect',
            redirectURL: 'https://www.vizmondmedia.com/',
            redirectDelay: 3000,
            
        },
    ],
};



export default pathData;