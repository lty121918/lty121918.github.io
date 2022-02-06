module.exports = {
    "title": "", //博客的标题
    "description": "山重水复疑无路，柳暗花明又一村", //博客的描述
    "dest": "public", //博客部署时输出的文件夹
    "base": "/blog/",
    "head": [  
        [
            "link",
            {
                "rel": "icon",
                "href": "/favicon.ico" //favicon图标设置
            }
        ],
        [
            "meta",
            {
                "name": "viewport",
                "content": "width=device-width,initial-scale=1,user-scalable=no"
            }
        ]
    ],
    "theme": "reco", //vuepress挂载的主题
    "themeConfig": {
        //导航栏
        "nav": [{
                "text": "主页",
                "link": "/",
                "icon": "reco-home"
            },
            {
                "text": "时间线",
                "link": "/timeline/",
                "icon": "reco-date"
            },
            {
                "text": "关于",
                "icon": "reco-message",
                "items": [{
                    "text": "Gitee",
                    "link": "https://gitee.com/ekzodia_lty",
                    "icon": "reco-mayun"
                }]
            }
        ],
        //侧边栏
        "sidebar": {
            "/docs/theme-reco/": [
                "",
                "theme",
                "plugin",
                "api"
            ]
        },
        //指定类型为博客
        "type": "blog",
        "blogConfig": {
            "category": {
                "location": 2,
                "text": "分类"
            },
            "tag": {
                "location": 3,
                "text": "标签"
            }
        },
        "logo": "/logo.png",
        "search": true,
        "searchMaxSuggestions": 10,
        "lastUpdated": "Last Updated",
        "author": "lty",
        "authorAvatar": "/avatar.jpg",
        // "record": "xxxx",
        "startYear": "2022"
    },
    "markdown": {
        "lineNumbers": true
    }
}