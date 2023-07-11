export default class JWTDecoder {
    getRole(): any  {
        const payload = this.parseJwt()
        if (!payload) {
            return ""
        }
        return payload.role;
    };

    parseJwt (): any {
        try {
            var base64Url = localStorage.getItem('access_token')?.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
            return JSON.parse(jsonPayload);
        } catch(error) {
            return false
        }

    }
    
}