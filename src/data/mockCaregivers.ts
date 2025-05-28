
import { CaregiverProps } from '../components/CaregiverCard';
import { CaregiverDetailProps } from '../components/CaregiverProfile';
/*
export const caregivers: CaregiverProps[] = [
  {
    id: '1',
    name: 'Maria Silva',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop',
    rating: 4.8,
    location: 'São Paulo, SP',
    specialties: ['Alzheimer', 'Parkinson', 'Pós-cirúrgico'],
    hourlyRate: 45.0
  },
  {
    id: '2',
    name: 'João Santos',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop',
    rating: 4.6,
    location: 'Rio de Janeiro, RJ',
    specialties: ['Mobilidade Reduzida', 'Fisioterapia'],
    hourlyRate: 40.0
  },
  {
    id: '3',
    name: 'Ana Oliveira',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop',
    rating: 4.9,
    location: 'Belo Horizonte, MG',
    specialties: ['Demência', 'Acamados', 'Diabetes'],
    hourlyRate: 50.0
  },
  {
    id: '4',
    name: 'Ricardo Pereira',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop',
    rating: 4.7,
    location: 'Salvador, BA',
    specialties: ['Pós-AVC', 'Terapia Ocupacional'],
    hourlyRate: 47.0
  },
  {
    id: '5',
    name: 'Fernanda Lima',
    imageUrl: 'https://images.unsplash.com/photo-1502767882403-636aee14f873?w=500&auto=format&fit=crop',
    rating: 4.5,
    location: 'Fortaleza, CE',
    specialties: ['Alzheimer', 'Parkinson'],
    hourlyRate: 42.0
  },
  {
    id: '6',
    name: 'Paulo Mendes',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop',
    rating: 4.4,
    location: 'Campinas, SP',
    specialties: ['Fisioterapia', 'Pós-cirúrgico', 'Idosos ativos'],
    hourlyRate: 39.0
  }
];*/

export const caregiverDetails: Record<string, CaregiverDetailProps> = {
  '1': {
    id: '1',
    name: 'Maria Silva',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop',
    rating: 4.8,
    reviewsCount: 32,
    location: 'São Paulo, SP',
    specialties: ['Alzheimer', 'Parkinson', 'Pós-cirúrgico', 'Medicação'],
    hourlyRate: 45.0,
    bio: 'Sou uma cuidadora com mais de 10 anos de experiência no atendimento a idosos com Alzheimer e Parkinson. Meu objetivo é proporcionar dignidade e qualidade de vida aos meus pacientes, com muito carinho e dedicação. Tenho formação técnica em enfermagem e diversos cursos de especialização em cuidados geriátricos.',
    experience: {
      years: 10,
      description: 'Trabalhei em residenciais para idosos por 5 anos e como cuidadora particular por mais 5 anos, atendendo principalmente pacientes com doenças neurodegenerativas como Alzheimer e Parkinson.'
    },
    availability: ['Manhã', 'Tarde', 'Noite', 'Pernoite'],
    education: [
      'Técnico em Enfermagem - Escola Técnica de Saúde, 2012',
      'Especialização em Cuidados Geriátricos - Instituto de Saúde, 2014'
    ],
    certifications: [
      'Certificação em Primeiros Socorros - Cruz Vermelha, 2018',
      'Curso de Cuidador de Idosos - SENAC, 2013',
      'Especialização em Doença de Alzheimer - Instituto de Geriatria, 2016'
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Carlos Ferreira',
        date: '12/04/2023',
        rating: 5,
        comment: 'A Maria cuidou da minha mãe com Alzheimer por 6 meses e foi excepcional. Muito atenciosa, carinhosa e profissional. Recomendo!'
      },
      {
        id: 'r2',
        author: 'Lúcia Mendonça',
        date: '03/02/2023',
        rating: 5,
        comment: 'Excelente profissional. Cuidou do meu pai após uma cirurgia de quadril com muita dedicação e competência.'
      },
      {
        id: 'r3',
        author: 'Roberto Alves',
        date: '17/11/2022',
        rating: 4,
        comment: 'Muito competente e pontual. Ajudou muito no cuidado com a minha avó com Parkinson.'
      }
    ]
  },
  '2': {
    id: '2',
    name: 'João Santos',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop',
    rating: 4.6,
    reviewsCount: 28,
    location: 'Rio de Janeiro, RJ',
    specialties: ['Mobilidade Reduzida', 'Fisioterapia', 'Exercícios'],
    hourlyRate: 40.0,
    bio: 'Sou formado em fisioterapia e trabalho como cuidador especializado em reabilitação e mobilidade. Tenho experiência com pacientes que sofreram AVC, cirurgias ortopédicas e idosos com dificuldades de locomoção. Acredito que o cuidado vai além dos procedimentos técnicos, incluindo atenção ao bem-estar emocional dos pacientes.',
    experience: {
      years: 8,
      description: 'Atuei em clínicas de reabilitação e como cuidador domiciliar, ajudando pacientes a recuperarem sua independência por meio de exercícios específicos e cuidados diários.'
    },
    availability: ['Manhã', 'Tarde'],
    education: [
      'Bacharel em Fisioterapia - Universidade Federal do Rio de Janeiro, 2015',
      'Especialização em Reabilitação Geriátrica - IBRAGES, 2017'
    ],
    certifications: [
      'Certificação em Mobilização e Transporte de Pacientes - CREFITO, 2018',
      'Curso de Cuidador de Idosos - SENAC, 2016'
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Mariana Costa',
        date: '25/05/2023',
        rating: 5,
        comment: 'O João é incrível! Ajudou meu pai a recuperar a mobilidade após uma fratura no fêmur. Muito paciente e profissional.'
      },
      {
        id: 'r2',
        author: 'Pedro Monteiro',
        date: '14/03/2023',
        rating: 4,
        comment: 'Excelente profissional. Sempre pontual e muito atencioso com minha mãe.'
      }
    ]
  },
  '3': {
    id: '3',
    name: 'Ana Oliveira',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop',
    rating: 4.9,
    reviewsCount: 45,
    location: 'Belo Horizonte, MG',
    specialties: ['Demência', 'Acamados', 'Diabetes', 'Alimentação Especial'],
    hourlyRate: 50.0,
    bio: 'Cuidadora com formação em enfermagem e nutrição clínica, especializada no acompanhamento de idosos com demência e diabéticos. Ofereço um atendimento humanizado, com foco no bem-estar físico e emocional. Tenho experiência com alimentação especial para diversas condições de saúde.',
    experience: {
      years: 12,
      description: 'Trabalhei em hospitais na área de geriatria e como cuidadora domiciliar, com foco em pacientes que necessitam de cuidados contínuos e monitoramento de saúde.'
    },
    availability: ['Manhã', 'Tarde', 'Noite', 'Pernoite', 'Final de semana'],
    education: [
      'Técnica em Enfermagem - Escola Técnica de Saúde de Minas Gerais, 2010',
      'Especialização em Nutrição Clínica - Faculdade de Ciências da Saúde, 2013'
    ],
    certifications: [
      'Certificação em Cuidados Paliativos - Hospital Albert Einstein, 2017',
      'Curso de Administração de Medicamentos - Conselho de Enfermagem, 2015',
      'Especialização em Cuidados com Pacientes Diabéticos - Associação Brasileira de Diabetes, 2019'
    ],
    reviews: [
      {
        id: 'r1',
        author: 'Sônia Ribeiro',
        date: '10/06/2023',
        rating: 5,
        comment: 'A Ana é um anjo. Cuidou da minha mãe com demência avançada com tanto carinho e dedicação. Ótima profissional.'
      },
      {
        id: 'r2',
        author: 'Marcos Souza',
        date: '22/04/2023',
        rating: 5,
        comment: 'Excelente profissional, muito organizada e atenciosa. Fez toda a diferença no cuidado com meu pai diabético.'
      },
      {
        id: 'r3',
        author: 'Júlia Torres',
        date: '05/03/2023',
        rating: 5,
        comment: 'A melhor cuidadora que já contratamos. Extremamente competente e carinhosa.'
      }
    ]
  }
};

export const getCaregiverById = (id: string): CaregiverDetailProps | undefined => {
  return caregiverDetails[id] || undefined;
};
