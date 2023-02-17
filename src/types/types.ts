import { Event } from 'react-big-calendar';

export interface CalendarEvent extends Event {
    type?: number | null;
    note?: string | null;
    description?: string | null;
}
