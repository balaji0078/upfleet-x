const routes = [
    {
        component : 'CommonLayout',
        path : '',
        auth : false,
        exact : false,
        redirect : '/home',
        redirectComponent : 'Home',
        childrens : [
            {
                component : 'Home1',
                path : 'home',
                auth : false,
                exact : true        
            },
            {
                component : 'Bookings',
                path : 'bookings',
                auth : false,
                exact : true        
            },
            {
                component : 'About',
                path : 'about',
                auth : false,
                exact : true        
            },
            {
                component : 'Packages',
                path : 'packages',
                auth : false,
                exact : true        
            },
            {
                component : 'Profile',
                path : '/profile',
                auth : false,
                exact : true        
            },
            {
                component : 'Login',
                path : 'login',
                auth : false,
                exact : true        
            }
        ]
    }    
]

export default routes