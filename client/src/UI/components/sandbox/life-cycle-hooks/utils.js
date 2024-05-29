export const getTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    const milliseconds = date.getMilliseconds();
    return `${time}. ${milliseconds}`;
}