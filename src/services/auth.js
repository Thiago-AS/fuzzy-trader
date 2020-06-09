export const isAuthenticated = () => {
    console.log(localStorage.getItem('jwt') !== null);
    return localStorage.getItem('jwt') !== null;
};