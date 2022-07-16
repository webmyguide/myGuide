export const skillArticle = [
    {
        id: 1,
        title: 'Programming',
        type: 'programming',
    },
    {
        id: 2,
        title: 'Tools',
        type: 'tools',
    },
    // {
    //     id: 3,
    //     title: 'Advertisement',
    //     skills: [
    //         'html5',
    //         'css3',
    //     ],
    // },
    {
        id: 4,
        title: 'Pr',
        type: 'pr',
    },
];


export const skillList = {
    programming: [
        {id: 1,tierId: 1,name:'html5',className:'devicon-html5-plain colored',description:'10年以上'},
        {id: 2,tierId: 1,name:'css3',className:'devicon-css3-plain colored',description:'10年以上'},
        {id: 3,tierId: 1,name:'javascript',className:'devicon-javascript-plain colored',description:'10年以上'},
        {id: 4,tierId: 1,name:'php',className:'devicon-php-plain colored',description:'8年程度'},
        {id: 5,tierId: 2,name:'Smarty',className:'',description:'5年程度'},
        {id: 6,tierId: 1,name:'sass',className:'devicon-sass-original colored',description:'9年程度'},
        {id: 7,tierId: 1,name:'jquery',className:'devicon-jquery-plain-wordmark colored',description:'10年以上'},
        {id: 8,tierId: 1,name:'wordpress',className:'devicon-wordpress-plain-wordmark colored',description:'8年程度'},
        {id: 9,tierId: 2,name:'mysql',className:'devicon-mysql-plain-wordmark colored',description:'5年程度'},
        {id: 10,tierId: 2,name:'SVN',className:'',description:'5年程度'},
        {id: 11,tierId: 2,name:'github',className:'devicon-github-original-wordmark colored',description:'2年程度'},
        {id: 12,tierId: 2,name:'npm',className:'devicon-npm-original-wordmark colored',description:'5年程度'},
        {id: 13,tierId: 3,name:'ruby',className:'devicon-ruby-plain-wordmark colored',description:'数回、開発経験あり'},
        {id: 14,tierId: 3,name:'c#',className:'devicon-csharp-plain colored',description:'開発経験あり'},
        {id: 15,tierId: 3,name:'typescript',className:'devicon-typescript-plain colored',description:'数回、開発経験あり'},
        {id: 16,tierId: 3,name:'ASP.NET',className:'',description:'数回、開発経験あり'},
        {id: 17,tierId: 3,name:'cakephp',className:'devicon-cakephp-plain colored',description:'数回、開発経験あり'},
        {id: 18,tierId: 4,name:'vuejs',className:'devicon-vuejs-plain-wordmark colored',description:'独学'},
        {id: 19,tierId: 4,name:'react',className:'devicon-react-original-wordmark colored',description:'独学'},
        {id: 20,tierId: 4,name:'angularjs',className:'devicon-angularjs-plain colored',description:'独学'},
    ],
    tools: [
        {id: 1,tierId: 1,name:'photoshop',className:'devicon-photoshop-plain colored',description:'10年以上'},
        {id: 2,tierId: 1,name:'illustrator',className:'devicon-illustrator-plain colored',description:'10年以上'},
        {id: 3,tierId: 2,name:'Dw',className:'',description:'基本操作'},
        {id: 4,tierId: 2,name:'Fw',className:'',description:'基本操作'},
        {id: 5,tierId: 3,name:'xd',className:'devicon-xd-plain colored',description:'3年程度'},
        {id: 6,tierId: 3,name:'premierepro',className:'devicon-premierepro-plain colored',description:'2年程度'},
        {id: 7,tierId: 1,name:'phpstorm',className:'devicon-phpstorm-plain-wordmark colored',description:'4年程度'},
        {id: 8,tierId: 3,name:'Eclipse',className:'',description:'2年程度'},
        {id: 9,tierId: 2,name:'visualstudio',className:'devicon-visualstudio-plain colored',description:'最近'},
        {id: 10,tierId:1,name:'atom',className:'devicon-atom-original-wordmark colored',description:'5年以上'},
    ],
    pr: [
        {id: 1,description:'10年以上のHTML、CSS、JavaScriptによる開発経験'},
        {id: 2,description:'約20～30名規模のプロジェクトの開発経験'},
        {id: 3,description:'エンジニア以外のプラスアルファの知識（UIUXデザイン、マーケティング、SEOなど）'},
    ],

};

export const tier = {
    programming: {
        attention: '',
        list: [
            {tierId: 1,description:'業務で普段から使用しているレベル'},
            {tierId: 2,description:'業務で複数回の開発経験あり'},
            {tierId: 3,description:'業務で1-2回の開発経験がある程度のレベル'},
            {tierId: 4,description:'独学で勉強したがまだ業務として開発経験がない'},
        ],
    },
    tools: {
        attention: '',
        list: [
            {tierId: 1,description:'業務で普段から使用しているレベル'},
            {tierId: 2,description:'業務でたまに使用し基本操作レベル、または以前使用していた'},
            {tierId: 3,description:'業務でたまに使用し勉強が必要なレベル'},
        ],
    },
};
