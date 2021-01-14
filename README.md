# My trainig project

Lesson #42 Redux

В этом уроке было:

1. Установлена библиотека Redux
2. Добвлен combineReducers (в него вообщем передаются redusers типа: profilePage: profileReducer etc.)
3. Redux умеет создавать свой собственный store.const store = createStore(reducers) В него передаются редьюсеры.
4. В редьюсеры передаются нужные части state через initialState который является параметром по дефолту у state
const reducer = (state = initialState, action) {}
5. В state от Redux так же есть:

getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

getState нужен для ображения к state, так как в Редаксе он приватный.