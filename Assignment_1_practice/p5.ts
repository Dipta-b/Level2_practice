
type UserType = {
    id: number, name: string, email: string, isActive: boolean
}

function filterActiveUsers(user: UserType[]): UserType[] {
    return user.filter(activeusers => activeusers.isActive);
}
