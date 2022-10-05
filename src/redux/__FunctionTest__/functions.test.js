import Reducer, { Search } from '../search/searchSlice';

const payload = [
  {
    category: {},
    id: 1,
    __CLASS__: {},
    adref: '',
    contarct_time: 'full_time',
    location: {},
    company: {},
    redirect_url: 'https://www.net.com',
    salary_is_predicted: '0',
    created: '',
    longitude: 0,
    latitude: 0,
    title: 'Job Title',
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  },
];

describe('testing for slice functions', () => {
  const initialState = {
    jobs: [],
    search: [],
    status: 'idle',
  };

  const pendingJobState = { type: Search.pending };
  const fulfilledJobState = { type: Search.fulfilled, payload };

  it('Test for thunk pending state', () => {
    expect(Reducer(initialState, pendingJobState)).toEqual({
      jobs: [],
      search: [],
      status: 'searching',
    });
  });
  it('Test for thunk fulfiled state', () => {
    expect(Reducer(initialState, fulfilledJobState)).toEqual({
      jobs: payload.result,
      search: [],
      status: 'idle',
    });
  });
});
