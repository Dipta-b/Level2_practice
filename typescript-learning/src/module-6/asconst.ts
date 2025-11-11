


const UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
} as const;

// UserRoles.Admin = 'di' eta assign kora jbe na


const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
}