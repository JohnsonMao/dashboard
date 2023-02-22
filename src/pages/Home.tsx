import {
    Event,
    EventPropGetter,
    DayPropGetter,
    EventWrapperProps,
    Components
} from 'react-big-calendar';
import Typography from '@mui/material/Typography';
import format from 'date-fns/format';

import Calendar from '../components/Calendar';
import Popover from '../components/Popover';

import eventJson from '../assets/mocks/calendar.json';

/**
 * 行事曆活動 API 的格式
 * @property {1 | 2 | 3 | 4 | null} CalendarEvent.type          - 活動類型
 * @property {string | null}        CalendarEvent.note          - 備註
 * @property {string | null}        CalendarEvent.description   - 活動描述
 */

export interface CalendarEvent extends Event {
    type?: number | null;
    note?: string | null;
    description?: string | null;
}

const events: CalendarEvent[] = eventJson.map((d) => ({
    ...d,
    title: `${d.title} ${d.description}`,
    allDay: d.end === null,
    start: new Date(d.start || 0),
    end: new Date(d.end || d.start || 0)
}));

const customEventPropGetter: EventPropGetter<CalendarEvent> = (event) => {
    if (event.allDay) {
        switch (event.type) {
            case 1:
            case 2:
                return { className: 'all-day-event' };
            default:
        }
    }
    return {};
};

const eventMap = events.reduce(
    (o, d) => (d.start ? o.set(format(d.start, 'yyyy/MM/dd'), d) : o),
    new Map<string, CalendarEvent>()
);

const customDayPropGetter: DayPropGetter = (date) => {
    const e = eventMap.get(format(date, 'yyyy/MM/dd'));

    if (e?.allDay) {
        switch (e.type) {
            case 1:
                return { className: 'holiday-color' };
            case 2:
                return { className: 'make-up-workday-color' };
            default:
        }
    }
    if (date.getDay() === 0 || date.getDay() === 6) {
        return {
            className: 'weekend-color'
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

    return (
        <Popover
            mode="hover"
            popoverContent={popoverContent}
            anchorOrigin={{
                vertical: 'center',
                horizontal: 'center'
            }}
            transformOrigin={{
                vertical: 'center',
                horizontal: 'center'
            }}
        >
            {children}
        </Popover>
    );
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
