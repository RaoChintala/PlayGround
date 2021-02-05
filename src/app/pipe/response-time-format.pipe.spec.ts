import { ResponseTimeFormatPipe } from './response-time-format.pipe';

describe('ResponseTimeFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new ResponseTimeFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
