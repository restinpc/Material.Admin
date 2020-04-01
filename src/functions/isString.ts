/**
 * Material.App - функция проверки строчного типа данных
 *
 * @ 10.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

const isString = (value) => {
    return typeof value === 'string' || value instanceof String;
}

export default isString;