export interface IDoctor {
  id: number;
  name: string;
  img: string;
  job: string;
  phone: number;
}

const inforDoctor: IDoctor[] = [
  {
    id: 0,
    name: 'Bac Si Hai',
    img: require('../../zau.jpg'),
    job: 'Pulmonologist',
    phone: 0973471150,
  },
  {
    id: 1,
    name: 'Bac Si Link',
    img: require('../../zau.jpg'),
    job: 'Pulmonologist',

    phone: 0973471150,
  },
  {
    id: 2,
    name: 'Bac Si Hieu',
    img: require('../../zau.jpg'),
    job: 'Pulmonologist',

    phone: 0973471150,
  },
  {
    id: 3,
    name: 'Bac Si Dung',
    img: require('../../zau.jpg'),
    job: 'Pulmonologist',

    phone: 0973471150,
  },
  {
    id: 4,
    name: 'Bac Si Damn son',
    img: require('../../zau.jpg'),
    job: 'Pulmonologist',

    phone: 0973471150,
  },
];
