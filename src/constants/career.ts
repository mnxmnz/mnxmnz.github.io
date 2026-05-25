export type CareerItem = {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
};

export const career: CareerItem[] = [
  {
    company: '비바리퍼블리카',
    role: 'Frontend Developer',
    startDate: '2025-09',
    endDate: null,
  },
  {
    company: '데이원컴퍼니',
    role: 'Frontend Developer',
    startDate: '2023-11',
    endDate: '2025-08',
  },
];
