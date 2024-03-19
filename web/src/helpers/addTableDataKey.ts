/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
export const addTableDataKey = (data: any[]) =>
    data.map((item) => {
        const { id, ...rest } = item;

        return { key: id, ...rest };
    });
