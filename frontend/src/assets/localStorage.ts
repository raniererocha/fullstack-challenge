export const getItem = (key: string) => {
    return JSON.parse(window.localStorage.getItem(key) ?? "[]")
}
export const setItem = (key: string, data: any) => {
    window.localStorage.setItem(key, JSON.stringify(data))
}