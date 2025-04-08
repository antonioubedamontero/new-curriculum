import { of } from 'rxjs';

export const mockActivatedRoute = {
  snapshot: {
    paramMap: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      get: (key: string) => 'es'
    }
  },
  queryParams: of({})
};
