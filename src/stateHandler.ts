/**
 * Material.App - Redux state debugger.
 *
 * @ 19.12.2019 # Aleksandr <Vorkunov.Al.Va@omega.sbrf.ru>
 */

export default function stateHandler({ getState }) {
  return next => action => {
    document.handler.debug("Will dispatch action >>");
    document.handler.debug(action);
    const returnValue = next(action);
    document.handler.debug("Redux after dispatch >>");
    document.handler.debug(getState());
    return returnValue;
  }
}