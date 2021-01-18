# My trainig project

Lesson #44 Context

В этом уроке было:

1. const StoreContext = React.createContext(null). Создается контекст, что бы не протаскивать через props по 100 км
всё, а компоненты имели доступ к store напрямую.
2. Все это дело рашается установкой react-redux в который все инкапсулиравоно и сделано удобно.
3. Контейнерные компонеты оборачиваются в <StoreContext.Consumer> типа они принимают все это дело.