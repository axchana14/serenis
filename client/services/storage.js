/**
 * Storage Service for Serenis
 */
class StorageService {
    constructor(key = 'serenis_data_v2') {
        this.key = key;
    }

    get() {
        const raw = localStorage.getItem(this.key);
        return raw ? JSON.parse(raw) : { moods: {}, journals: {} };
    }

    save(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }
}

export default new StorageService();
