const uri = 'http://localhost:5000/origami';

async function getAll() {
    try {
        const request = await fetch(uri);
        if (!request.ok) {
            throw new Error(request.statusText)
        }
        return await request.json();
    } catch (error) {
       console.log(error);
    }
}

export default {
    getAll
}