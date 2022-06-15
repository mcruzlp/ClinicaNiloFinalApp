import { DoctorsPipe } from './doctors.pipe';

describe('DoctorsPipe', () => {
  it('create an instance', () => {
    const pipe = new DoctorsPipe();
    expect(pipe).toBeTruthy();
  });
});
