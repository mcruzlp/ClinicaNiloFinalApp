import { PatientsPipe } from './patients.pipe';

describe('PatientsPipe', () => {
  it('create an instance', () => {
    const pipe = new PatientsPipe();
    expect(pipe).toBeTruthy();
  });
});
