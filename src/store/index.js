import { createStore } from 'vuex';

export default createStore({
    state: {
        menuItems: [
            {id: 1, href: '/home', text: 'Home'},
            {id: 2, href: '/project', text: 'Project'},
            {id: 3, href: '/blog', text: 'Blog'},
        ],
        path: require("@/assets/img/Logo.jpg"),
        projectsGrid: [
            {id: 1, imgPath: require("@/assets/img/project_grid/img1.jpg"), header: 'Modern Kitchan', category: 'Decor / Artchitecture'},
            {id: 2, imgPath: require("@/assets/img/project_grid/img2.jpg"), header: 'Modern Kitchan', category: 'Decor / Artchitecture'},
            {id: 3, imgPath: require("@/assets/img/project_grid/img3.jpg"), header: 'Modern Kitchan', category: 'Decor / Artchitecture'},
            {id: 4, imgPath: require("@/assets/img/project_grid/img4.jpg"), header: 'Modern Kitchan', category: 'Decor / Artchitecture'},
        ],

        counter: [
            {id: 1, count: 12, description: 'Years Of Experience'},
            {id: 2, count: 85, description: 'Success Project'},
            {id: 3, count: 15, description: 'Active Project'},
            {id: 4, count: 95, description: 'Happy Customers'}
        ],

        articles: [
            {
                id: 1,
                imgPath: require("@/assets/img/articles/mg1.jpg"),
                category: 'Kitchen Design',
                summary: 'Let’s Get Solution For Building Construction Work',
                date: '26 December,2022'
            },

            {
                id: 2,
                imgPath: require("@/assets/img/articles/mg2.jpg"),
                category: 'Living Design',
                summary: 'Low Cost Latest Invented Interior Designing  Ideas.',
                date: '25 December,2022'
            },

            {
                id: 1,
                imgPath: require("@/assets/img/articles/mg3.jpg"),
                category: 'Interior Design',
                summary: 'Best For Any Office & Business Interior Solution',
                date: '24 December,2022'
            },

            {
                id: 4,
                imgPath: require("@/assets/img/articles/mg4.jpg"),
                category: 'Kitchen Design',
                summary: 'Let’s Get Solution For Building Construction Work',
                date: '23 December,2022'
            },

            {
                id: 5,
                imgPath: require("@/assets/img/articles/mg5.jpg"),
                category: 'Living Design',
                summary: 'Low Cost Latest Invented Interior Designing  Ideas.',
                date: '22 December,2022'
            },

            {
                id: 6,
                imgPath: require("@/assets/img/articles/mg6.jpg"),
                category: 'Interior Design',
                summary: 'Best For Any Office & Business Interior Solution',
                date: '21 December,2022'
            }
        ],

        allProjects: [
            {id: 1, imgPath: require("@/assets/img/project/img1.jpg"), title: 'Minimal Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 2, imgPath: require("@/assets/img/project/img2.jpg"), title: 'Minimal Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 3, imgPath: require("@/assets/img/project/img3.jpg"), title: 'Classic Minimal Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 4, imgPath: require("@/assets/img/project/img4.jpg"), title: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 5, imgPath: require("@/assets/img/project/img5.jpg"), title: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 6, imgPath: require("@/assets/img/project/img6.jpg"), title: 'System Table', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 7, imgPath: require("@/assets/img/project/img7.jpg"), title: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
            {id: 8, imgPath: require("@/assets/img/project/img8.jpg"), title: 'Modern Bedroom', subtitle: 'Decor / Artchitecture', category: 'Bed room'},
        ],

        tags: ['Kitchen', 'Bedroom', 'building', 'Architecture', 'Kitchen planning', 'Bathroom'],

        count: 0,
    },

    getters: {
        getFirstFree: state => state.articles.slice(0, 3),
        getSixArticles: state => state.articles,
        getLatestPost: state => {
            const arr = state.articles;
            arr.sort((a, b) => a.date < b.date ? 1 : -1);
            return arr[0];
        },
        getAllProjects: state => state.allProjects,
        getFilteredProjects: state => param => {
            const arr = state.allProjects;
            const arr1 = arr.filter(arr => arr.category === param);
            return arr1;
        }
    },

    mutations: {
        increment(state){
            state.count++;
        },

        decrement(state){
            state.count--;
        }
    }
})