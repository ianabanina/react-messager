export function getFullName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

export function getUserInitials(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`
}
