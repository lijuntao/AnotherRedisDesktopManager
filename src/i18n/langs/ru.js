const ru = {
  message: {
    new_connection: 'Новое подключение',
    refresh_connection: 'Обновить',
    edit_connection: 'Редактировать подключение',
    del_connection: 'Удалить подключение',
    close_connection: 'Закрыть соединение',
    add_new_line: 'Добавить новую строку',
    redis_version: 'Версия Redis',
    process_id: 'ID процесса',
    used_memory: 'Использовано памяти',
    used_memory_peak: 'Максимальный объем памяти',
    used_memory_lua: 'Использование памяти Lua',
    connected_clients: 'Подключено клиентов',
    total_connections_received: 'Количество подключений',
    total_commands_processed: 'Количество команд',
    key_statistics: 'Статистика по ключам',
    all_redis_info: 'Вся информация Redis',
    server: 'Сервер',
    memory: 'Оперативная память',
    stats: 'Статистика',
    settings: 'Настройки',
    confirm_to_delete_row_data: 'Подтвердить удаление данной строки?',
    delete_success: 'Успешно удалено',
    delete_failed: 'Удалить не удалось',
    modify_success: 'Успешно изменено',
    modify_failed: 'Измененить не удалось',
    add_success: 'Успешно добавлено',
    add_failed: 'Добавить не удалось',
    value_exists: 'Значение существует',
    refresh_success: 'Успешно обновлено',
    click_enter_to_rename: 'Нажмите сюда или нажмите Enter, чтобы переименовать ключ.',
    click_enter_to_ttl: 'Нажмите сюда или нажмите Enter, чтобы изменить время жизни ключа.',
    confirm_to_delete_key: 'Подтвердите удаление {key} ?',
    edit_line: 'Редактировать строку',
    auto_refresh: 'Автоматическое обновление',
    auto_refresh_tip: 'Автоматическое обновление, обновление каждые {interval} секунды',
    key_not_exists: 'Ключ не существует',
    collapse_all: 'Свернуть все',
    expand_all: 'Развернуть все',
    json_format_failed: 'Не удалось форматировать в JSON',
    php_unserialize_format_failed: 'PHP Unserialize форматирование не удалось',
    clean_up: 'Очистить',
    redis_console: 'Redis console',
    confirm_to_delete_connection: 'Вы уверены, что хотите удалили подключение?',
    connection_exists: 'Настройка с таким подключением уже существует',
    close_to_edit_connection: 'Вы должны закрыть соединение перед редактированием. Вы уверены, что хотите продолжить?',
    close_to_connection: 'Подтверждение закрытия соединения?',
    ttl_delete: 'Установка TTL <= 0 удалит ключ. Вы уверены?',
    max_page_reached: 'Достигнуто максимальное количество страниц',
    add_new_key: 'Новый ключ',
    enter_new_key: 'Пожалуйста, сначала введите новое имя ключа',
    key_type: 'Тип ключа',
    save: 'Сохранить',
    enter_to_search: 'Введите ключ для поиска',
    export_success: 'Успешно экспортировано',
    select_import_file: 'Выберите файл',
    import_success: 'Успешно импортировано',
    put_file_here: 'Перетащите файлы сюда или нажмите, чтобы выбрать',
    config_connections: 'Настройки подключения',
    import: 'Импорт',
    export: 'Экспорт',
    open: 'Открыть',
    close: 'Закрыть',
    open_new_tab: 'Открыть в новом окне',
    exact_search: 'Точный поиск',
    enter_to_exec: 'После ввода команды Redis нажмите клавишу Enter для выполнения, клавиши вверх и вниз для переключения истории команд',
    pre_version: 'Версия',
    manual_update: 'Страница для скачивания',
    retry_too_many_times: 'Слишком много попыток переподключения. Пожалуйста, проверьте состояние сервера',
    key_to_search: 'Поиск по ключевым словам',
    begin_update: 'Обновить',
    check_update: 'Проверить обновление',
    update_checking: 'Проверка обновлений, пожалуйста, подождите...',
    update_available: 'Найдена новая версия',
    update_not_available: 'У Вас последняя версия приложения',
    update_error: 'Обновление не удалось',
    update_downloading: 'Загрузка...',
    update_download_progress: 'Прогресс загрузки',
    update_downloaded: 'Обновление завершено, перезапустите приложение, пожалуйста',
    mac_not_support_auto_update: 'Mac не поддерживает автоматическое обновление, скачайте и переустановите приложение вручную,\
    Или выполните комманду "brew cask reinstall another-redis-desktop-manager"',
    font_family: 'Семейство шрифтов',
    font_faq_title: 'Инструкции по настройке шрифта',
    font_faq: '1. Можно установить несколько шрифтов.<br>\
    2. Выбор шрифта происходит в последовательном порядке, рекомендуется сначала выбрать английский шрифт, а затем выбрать русский шрифт.<br>\
    3. В некоторых исключительных случаях, когда список системных шрифтов не может быть загружен , вы можете вручную ввести имя установленного шрифта.',
    private_key_faq: 'В настоящее время поддерживаются закрытые ключи формата RSA, начинающиеся с <pre>-----BEGIN RSA PRIVATE KEY-----</pre>\
    Если ключ начинается с <pre>-----BEGIN OPENSSH PRIVATE KEY-----</pre> Вам нужно конвертировать его через <pre>ssh-keygen -p -m pem -f ~/.ssh/id_rsa</pre> Эта операция не повлияет на предыдущий вход в систему с закрытым ключом.',
    dark_mode: 'Темная тема',
    load_more_keys: 'загрузить ещё',
    key_name: 'Имя ключа',
    project_home: 'Страница приложения',
    cluster_faq: 'Выберите любой узел в кластере и заполните его, он автоматически определит другие узлы.',
    redis_status: 'Информация Redis',
    confirm_flush_db: 'Вы уверены, что удалили все ключи в db {db}?',
    flushdb: 'Удалить все ключи',
    info_disabled: 'Исключение при выполнении команды Info (возможно, было отключено), информация о Redis не может быть отображена.',
    page_zoom: 'Масштаб страницы',
    scan_disabled: 'Исключение при выполнении команды Scan (возможно, было отключено), невозможно отобразить список ключей.',
  },
};

export default ru;
