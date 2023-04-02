export const getStringDate = (date) =>{
    return date.toISOString().slice(0, 10); // toISOSring은 date객체를 받아 yyyy-mm-ddthh형태로 나타내줌
}
