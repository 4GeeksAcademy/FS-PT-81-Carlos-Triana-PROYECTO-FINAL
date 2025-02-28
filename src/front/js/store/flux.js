const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            auth: localStorage.getItem('token') || false,
            user: null,
        },
        actions: {
            
            logout: () => {
                localStorage.removeItem('token');
                setStore({ auth: false, token: null });
                // window.location.href = '/';
            },

            getUserData: async () => {
                try {
                    const resp = await fetch('https://friendly-space-palm-tree-5g4vq9rp7rrqf9r6-3001.app.github.dev/api/protected', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    if (!resp.ok) throw new Error('Error al traer los datos');
                    const data = await resp.json();
                    console.log(data);
                    setStore({ user: data.user });
                } catch (error) {
                    console.log(error);
                }
            },

            register: async formData => {
                try {
                    const resp = await fetch('https://friendly-space-palm-tree-5g4vq9rp7rrqf9r6-3001.app.github.dev/api/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    if (!resp.ok) throw new Error('Error al registrarse');
                    const data = await resp.json();
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    setStore({ auth: true, token: data.token });
                    window.location.href = `/userHome`;
                } catch (error) {
                    console.log(error);
                }
            },

            login: async formData => {
                try {
                    const resp = await fetch('https://friendly-space-palm-tree-5g4vq9rp7rrqf9r6-3001.app.github.dev/api/login', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
                    if (!resp.ok) throw new Error('Error al iniciar sesión');
                    const data = await resp.json();
                    console.log(data);
                    localStorage.setItem('token', data.token);
                    setStore({ auth: true, token: data.token });
                    window.location.href = `/userHome`;
                } catch (error) {
                    console.log(error);
                }
            },

            updateUser: async formData => {
                try {
                    const store = getStore();
                    const userId = store.user.id;
                    if (!userId) {
                        throw new Error('No hay ID de usuario en la store');
                    }
                    const resp = await fetch(`https://friendly-space-palm-tree-5g4vq9rp7rrqf9r6-3001.app.github.dev/api/update/${userId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(formData)
                    });
                    if (!resp.ok) throw new Error('Error al actualizar el usuario');
                    const data = await resp.json();
                    console.log(data);
                    setStore({ auth: true, token: data.token });
                } catch (error) {
                    console.log(error);
                }
            },

            deleteUser: async () => {
                try {
                    const store = getStore();
                    const userId = store.user.id;
                    if (!userId) {
                        throw new Error('No hay ID de usuario en la store');
                    }
                    const resp = await fetch(`https://friendly-space-palm-tree-5g4vq9rp7rrqf9r6-3001.app.github.dev/api/user/${userId}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('token')}`
                        }
                    });
                    if (!resp.ok) throw new Error('Error al eliminar el usuario');
                    const data = await resp.json();
                    console.log(data);
                    setStore({ auth: false, token: null, user: null });
                    window.location.href = '/';
                } catch (error) {
                    console.error('Error:', error);
                }
            },

            getMessage: async () => {
                try {
                    // fetching data from the backend
                    const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
                    const data = await resp.json();
                    setStore({ message: data.message });
                    return data;
                } catch (error) {
                    console.log("Error loading message from backend", error);
                }
            },

            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            },

            //ACTIONS FOR PRODUCTS:

            
        }
    };
};

export default getState;
