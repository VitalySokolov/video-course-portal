import { FilterByTitlePipe } from './filter-by-title.pipe';

describe('FilterByTitlePipe', () => {
  let pipe: FilterByTitlePipe;

  const COURSE_4_TITLE = 'Test4';
  const COURSE_4 = {
    id: 4,
    title: COURSE_4_TITLE,
    description: 'description',
    date: 12345,
    duration: 123
  };
  const courses = [
    {
      id: 1,
      title: 'Test1 Title',
      description: 'description',
      date: 12345,
      duration: 123
    },
    {
      id: 2,
      title: 'Test2 Title',
      description: 'description',
      date: 12345,
      duration: 123
    },
    {
      id: 3,
      title: 'Test3 Title',
      description: 'description',
      date: 12345,
      duration: 123
    },
    {
      id: 5,
      title: 'Test5',
      description: 'description',
      date: 12345,
      duration: 123
    },
    COURSE_4
  ];

  beforeEach(function () {
    pipe = new FilterByTitlePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filter video courses by title', () => {
    expect(pipe.transform(courses, 'title').length).toEqual(3);
  });

  it('filter video courses by empty title should result same array', () => {
    expect(pipe.transform(courses, '')).toEqual(courses);
  });

  it('should find exactly one course with unique title', () => {
    const expectedCourse = COURSE_4;

    const result = pipe.transform(courses, COURSE_4_TITLE);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual(expectedCourse);
  });
});
