const heroku_url_api = "https://mighty-plains-77473.herokuapp.com/api/buildings";



const vm = new Vue({
    el: '#appbuilding',
    data: {
        buildings: [],
    },
    mounted() {
        axios.get(heroku_url_api)
            .then(response => {this.buildings = response.data});
    },
    methods: {
        switchLight1(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchLofBOff";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
            },
        switchLight2(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchLofBOn";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
            },
        switchRinger1(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchRofBOff";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
        },
        switchRinger2(building) {
            let post_url = heroku_url_api + "/" + building.buildingId + "/switchRofBOn";
            axios.post(post_url, {buildingId: building.buildingId})
                .then(response => {this.buildings = response.data});
        },
    }
});
