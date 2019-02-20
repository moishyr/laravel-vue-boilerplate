import Axios from "axios";

export default {
    data() {
        return {
            users: []
        };
    },

    mounted() {
        Axios.get('/api/users')
            .then(data => this.users = data.users)
            .catch(console.log)
    }
}
