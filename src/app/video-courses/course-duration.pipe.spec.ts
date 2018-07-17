import { CourseDurationPipe } from './course-duration.pipe';

describe('CourseDurationPipe', () => {
  let pipe: CourseDurationPipe;

  beforeEach(() => {
    pipe = new CourseDurationPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "Unavailable"', () => {
    expect(pipe.transform(-1)).toEqual('Unavailable');
  });

  it('should return minutes', () => {
    expect(pipe.transform(39)).toEqual('39 min');
  });

  it('should return hours and minutes', () => {
    expect(pipe.transform(139)).toEqual('2 h 19 min');
  });
});
