const { format_date } = require('../utils/helpers');
test('format_date() returns a date string', () => {
    const date = new Date('2022-01-01 12:12:12');
    expect(format_date(date)).toBe('1/1/2022');
});