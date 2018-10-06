const pretty = require('../../../utils/pretty-print/pretty-print');
const colors = require('../../../utils/pretty-print/dictionary.pretty-print');

describe('PrettyPrint', () => {
  const testVal = 'test';

  test('should have a system default style method', () => {
    const spy = spyOn(pretty, 'lame').and.callThrough();
    pretty.lame(testVal);
    expect(spy).toBeCalledWith(testVal);
  });

  test('should handle empty pretty.lame() statements', () => {
    const spy = spyOn(pretty, 'lame').and.callThrough();
    pretty.lame();
    expect(spy).toBeCalledWith();
  });

  test('should have a styled default method', () => {
    const spy = spyOn(pretty, 'log').and.callThrough();
    pretty.log(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a strongly styled default method', () => {
    const spy = spyOn(pretty, 'logStrong').and.callThrough();
    pretty.logStrong(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a brightly styled default method', () => {
    const spy = spyOn(pretty, 'logBright').and.callThrough();
    pretty.logBright(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a styled warning method', () => {
    const spy = spyOn(pretty, 'warn').and.callThrough();
    pretty.warn(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a strongly styled warning method', () => {
    const spy = spyOn(pretty, 'warnStrong').and.callThrough();
    pretty.warnStrong(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a brightly styled warning method', () => {
    const spy = spyOn(pretty, 'warnBright').and.callThrough();
    pretty.warnBright(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a styled success method', () => {
    const spy = spyOn(pretty, 'success').and.callThrough();
    pretty.success(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a strongly styled success method', () => {
    const spy = spyOn(pretty, 'successStrong').and.callThrough().and.callThrough();
    pretty.successStrong(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });

  test('should have a brightly styled success method', () => {
    const spy = spyOn(pretty, 'successBright').and.callThrough();
    pretty.successBright(testVal);
    expect(spy).toHaveBeenCalledWith(testVal);
  });
});
