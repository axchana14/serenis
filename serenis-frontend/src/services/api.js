/**
 * API Service for Serenis
 */
class ApiService {
    constructor(basePath = 'http://127.0.0.1:5000') {
        this.basePath = basePath;
    }

    async post(endpoint, data) {
        try {
            const response = await fetch(`${this.basePath}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(`API Error on ${endpoint}:`, error);
            throw error;
        }
    }

    async chat(text, mode, metrics = {}) {
        return this.post('/api/chat', { text, mode, metrics });
    }
}

export default new ApiService();
