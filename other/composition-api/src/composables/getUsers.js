import { ref } from 'vue'

const getUsers = () => {
    const users = ref([])
    const errors = ref([])

    const getData = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/users');
            users.value = await data.json();

            if (!data.ok) {
                throw new Error('user list not found')
            }
        } catch (error) {
            errors.value = error.message
        }
    }

    return { users, errors, getData }
}

export default getUsers