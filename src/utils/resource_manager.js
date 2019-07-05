class ResourceManager {
    constructor() {
        this.resourceCache = {};
        this.loading = [];
        this.callbacks = [];
    }

    load(resource) {
        if (resource instanceof Array) {
            resource.forEach(res => this._load(res));
        } else this._load(resource);
    }

    _load(url) {
        if (this.resourceCache[url]) return this.resourceCache[url];
        else {
            this.loading.push(url);

            const img = new Image();
            img.onload = () => {
                this.resourceCache[url] = img;
                if (this.isReady()) this.callbacks.forEach(cb => cb());
            }
            img.src = url;
            this.resourceCache[url] = img;
        }
    }

    get(url) {
        return this.resourceCache[url];
    }

    isReady() {
        let ready = true;
        for (let k in this.resourceCache) {
            if (this.resourceCache.hasOwnProperty(k) && !(this.resourceCache[k]))
                ready = false;
        };
        return ready;
    }

    onReady(func) {
        this.callbacks.push(func);
    }
}

module.exports = ResourceManager;