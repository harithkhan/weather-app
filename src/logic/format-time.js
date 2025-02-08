import { parse, format } from 'date-fns';

export function formatTime(rawTime) {
    const parsedTime = parse(rawTime, "HH:mm:ss", new Date());
    const formattedTime = format(parsedTime, "h:mma");
    return formattedTime;
}