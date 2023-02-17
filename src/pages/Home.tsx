import { EventPropGetter, DayPropGetter, EventWrapperProps, Components } from 'react-big-calendar';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';

import Calendar from '../components/Calendar';
import Popover from '../components/Popover';
import json from '../assets/mocks/calendar.json';
import { CalendarEvent } from '../types/types';

const events: CalendarEvent[] = json.map((d) => ({
    ...d,
    title: `${d.title} ${d.description}`,
    allDay: d.end === null,
    start: new Date(d.start || 0),
    end: new Date(d.end || d.start || 0)
}));

const customEventPropGetter: EventPropGetter<CalendarEvent> = (event) => {
    if (event.allDay && event.type === 1) {
        return {
            style: {
                background: 'transparent',
                color: 'inherit',
                border: '0px'
            }
        };
    }
    return {};
};

const eventMap = events.reduce(
    (o, d) => (d.start ? o.set(format(d.start, 'yyyy/MM/dd'), d) : o),
    new Map()
);

const customDayPropGetter: DayPropGetter = (date) => {
    const e = eventMap.get(format(date, 'yyyy/MM/dd'));

    if (e.allDay) {
        if (e.type === 1) {
            return {
                style: {
                    background: '#afa9'
                }
            };
        }
        if (e.type === 2) {
            return {
                style: {
                    background: '#fbb3'
                }
            };
        }
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        return {
            style: {
                background: '#faa6'
            }
        };
    }
    return {};
};

const eventWrapper: Components['eventWrapper'] = (props) => {
    const { event, children } = props as EventWrapperProps<CalendarEvent> & {
        children: React.ReactNode;
    };

    const popoverContent = event.note
        ?.split('<br>')
        .map((text) => <Typography key={text}>{text}</Typography>);

    return <Popover popoverContent={popoverContent}>{children}</Popover>;
};

const Home: React.FC = () => (
    <Calendar
        events={events}
        eventPropGetter={customEventPropGetter}
        dayPropGetter={customDayPropGetter}
        components={{ eventWrapper }}
    />
);

export default Home;
