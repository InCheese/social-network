# social-network

**Проект для лучшего понимания старых версий React, Redux**

1. Добавила черновик главной страницы социальной сети

SPA - single page application, точка входа - полупустой index.html, остальную верстку отрисовываем AJAX-запросами.

2. Добавляем стили как модули через .module. для инкапсуляции стилей классов

3. Добавляем маршрутизацию(роутинг). Устанавливаем react-route-dom для роутинга по страницам

Для роутинга страниц необходимо обернуть компоненты в BrowserRouter. Сами компоненты страниц оборачиваем в Route и указать путь, по которому компонент будет доступен. Компонент Route следит за url и автоматически подгружает нужную страницу (компонент).

4. Разбираюсь дальше. Flux

   - Node.js работает на движке V8, транслирующем JavaScript в машинный код. Простыми словами, Node.js — это приложение на C++, которое получает на входе код JavaScript и выполняет его.

- SPA - single page application (там всего 1 html-страница, но вместе с нейприходит много js-кода)

- Функциональная компонента

- props - объект

- Route - специальный компонент, который следит за адресной строкой браузера, как только изменился url она ререндерит компоненту

- UI - BLL (business logic layer )

- Концепция callback:
  функция - это объект,
  передаем анонимную стрелочную функцию в onClick, чтобы кнопка вызвала ее при клике (передаем без скобок
  onClick = () => {alert("тест")}
  )

5. Action - объект, у которого обязательно есть поле type

6. Принцип single responsibility

7. Action creator - помогает не ошибиться в создании action-а

8. Меняем ссылку с помощью NavLink - ссылка без перезагрузки

9. Контейнерная компонента - хранит логику над презентационной компонентой

10. Идемпотетность (детерминированность) - чистая функция при одинаковых входных данных возвращает одни и те же значения

11. Каждый раз, когда происходят изменения в стейте, то запускается connect, поэтому мы должны делать копию нужного обьекта в стейт

12. Массивы являются объектами

13. connect смотрит на изменение свойств из mapStateToProps

14. Компонента Route следит за урлом в браузере и если он совпадает, то рендерит нужную компоненту

15. Редьюсер - это чистая функция, которая получаетс на вход старый state и action и возвращает обновленный state. Работает по правилу иммутабельности.

16. DDD - domen driven design

17. users: [...state.users] идентично users: state.users.map ( u => u )

18. Программный сервер nginx

19. Endpoint -
    а. url-адрес
    b. http-request type: get/post
    c. request payload
    d. response data
    e. htttp codes: 404, 5XX, 3XX

20. Rest API - по одному эндойнту с разными типами получаем 4 операции (CRUD)

21. Fetch - нативная, низкоуровневая, нужно писать обертки

22. Будем использовать axios

23. Ajax-запросы

24. Сервер возвращает JSON

25. Структура ответа с сервера:
    a. config
    b. data - используем для рендера
    c. headers
    d. request
    e. status (например 200)
    f. statusText

26. Классовые компоненты - всегда имеют метод render, чтобы вернуть jsx

27. Олдcкульный пинговый метод запросов на сервер?

28. Пагинация - нужна, чтобы облегчить нагрузку на сервер. В url передаем дополнительно передаем параметр ?page=2. Можно передать pageSize/limit/take/count = 3, чтобы получать по 3 записи на странице

В описании к апи должны быть описаны параметры эндпойта

Количество страниц считам из общего количества записей на количество записей на странице = totalSize/pageSize
https://social-network.samuraijs.com/api/1.0/users?page=2&count=2

29. У нас 2 контейнерых(объединила в одну контейнерную UsersContainer) и 1 презентационная компонента Users
