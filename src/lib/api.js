const API_URL = 'http://localhost:5000/bands'; 

async function send({ method, path, data }) {
    const fetchOptions = {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: data ? JSON.stringify(data) : undefined
    };

    try {
        const response = await fetch(`${API_URL}${path}`, fetchOptions);
        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }
        return response.json();
    } catch (error) {
        console.error('Fetch error:', error.message);
        throw error;
    }
}

export function createBand(data) {
    return send({ method: 'POST', path: '/', data });
}

export function getBands() {
    return send({ method: 'GET', path: '/' });
}

export function getBand(id) {
    return send({ method: 'GET', path: `/${id}` });
}

export function updateBand(id, data) {
    return send({ method: 'PUT', path: `/${id}`, data });
}

export function deleteBand(id) {
    return send({ method: 'DELETE', path: `/${id}` });
}
