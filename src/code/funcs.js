import moment from 'moment';

export const commentDate = (dt) => {
    return moment(dt).format('MM/DD/YYYY, hh:mm A');
}
