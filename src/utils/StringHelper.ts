export function stringValue(value: string): string {
    if(value === undefined || value === null) {
        return "";
    }
    return value;
}