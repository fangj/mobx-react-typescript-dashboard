/**
 * Created by FangJian on 2017/10/26.
 */
const menuData= [
    {
        "key": "dashboard",
        "icon": "appstore-o",
        "title": "Dashboard",
        "url": "/dashboard"
    },
    {
        "key": "profile",
        "icon": "user",
        "title": "User Profile",
        "url": "/profile"
    },
    {
        "key": "component",
        "icon": "bars",
        "title": "Component",
        "children": [
            {
                "key": "alert",
                "title": "Alert",
                "url": "/alert"
            },
            {
                "key": "charts",
                "title": "Charts",
                "url": "/charts"
            },
            {
                "key": "editor",
                "title": "Editor",
                "url": "/editor"
            },
            {
                "key": "grid",
                "title": "Grid",
                "url": "/grid"
            },
            {
                "key": "table",
                "title": "Table",
                "url": "/table"
            },
            {
                "key": "form",
                "title": "react-jsonschema-form",
                "url": "/form"
            },
            {
                "key": "table2",
                "title": "react-bootstrap-table",
                "url": "/table2"
            },

        ]

    }, {
        "key": "setting",
        "icon": "setting",
        "title": "Setting",
        "url": "/setting"
    }, {
        "key": "acknowledge",
        "icon": "copyright",
        "title": "Acknowledge",
        "url": "/acknowledge"
    }
];

module.exports=menuData;