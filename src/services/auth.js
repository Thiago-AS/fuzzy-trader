export const isAuthenticated = () => {
    return localStorage.getItem('jwt') !== null;
};