const MOVE_PLAYER_BTN_LABEL = {
    move: 'Переместить',
    wantMove: 'Хотите переместиться?',
};
const INITIAL_COORDINATES_PLACEHOLDER = '100,100,100';

const coordsRegex = new RegExp(/^(\s*-?[0-9]{1,4}\s*,){2}(\s*-?[0-9]{1,4}\s*?)$/);

var app = new Vue({
    el: '#app',
    data: {
        coordinates: INITIAL_COORDINATES_PLACEHOLDER,
        showCoordinatesForm: false,
        movePlayerBtnLabel: MOVE_PLAYER_BTN_LABEL.wantMove,
        formError: null
    },
    methods: {
        closeBrowser: function () {
            mp.trigger('closeBrowser');
        },
        movePlayer: function () {
            if (!this.showCoordinatesForm) {
                this.showCoordinatesForm = true;
                this.movePlayerBtnLabel = MOVE_PLAYER_BTN_LABEL.move;
                return;
            }

            if (this.isValiCoordinates()) {
                this.formError = null;
            } else {
                this.formError = 'Фиговые координаты';
                return;
            }

            const [x, y, z] = this.parseCoordinates();
            if (x && y && z) {
                mp.trigger('movingPlayer', x, y, z);
            }
        },
        parseCoordinates() {
            const coordinatesStrings = this.coordinates.split(',')
            return coordinatesStrings.map(str => +str);
        },
        isValiCoordinates() {
            return coordsRegex.test(this.coordinates);
        }
    }
})