// Parsing date
export const parseDateFromString = (dateString: string): Date => {

    let date: number[] = dateString.split('/').map((item: string): number => {
        return parseInt(item);
    })

    return new Date(date[2], date[0] - 1, date[0]);

}