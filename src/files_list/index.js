import getData from './firebase_get_data';
import clickFile from './file_click';

require('./style.scss');

export default {
    el: '#main',
    template: require('./template.html'),
    afterBind() {

        getData({
            id: 'files/1',
            title: 'Drive'
        });
        clickFile();
    }
}