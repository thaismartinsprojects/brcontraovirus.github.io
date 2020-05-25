const makers = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Use luvas e máscara para manusear as peças. Não ajude a espalhar mais a infecção. Caso tenha sintomas gripais, evite a fabricação.',
  },
  {
    title: 'Corte da Placa',
    icon: 'scissors.png',
    text:
      'As peças podem ser cortadas no laser com PET/PETG, na plotter e na CNC com PVA/PET/PETG/PVC. O PET/PETG suporta melhor a desinfeção química no Hospital',
  },
  {
    title: 'Limpeza e Armazenamento',
    icon: 'bubble.png',
    text:
      'Lave as peças com água, sabão e cloro. Pode-se utilizar Álcool 70%. Guarde em um saco plástico transparente.',
  },
]

const hospitals = [
  {
    title: 'Antes de TUDO',
    icon: 'shield.png',
    text:
      'Desembale o kit e lave tudo com Solução Hipoclorito/Clorexidina. Limpar apenas com alcool 70% ou isopropilico não garante a desinfecção das microfissuras provenientes da impressão 3D.',
  },
  {
    title: 'Montagem',
    icon: 'puzzle.png',
    text:
      "Encaixe a folha de PET ou Acetato transparente por dentro do arco, após isso, encaixe a liga elástica nos pinos acima da orelha. Esse vídeo mostra como montar <a href='https://abre.ai/faceshield' target='blank'>abre.ai/faceshield</a>.",
  },
  {
    title: 'Reutilização',
    icon: 'plus.png',
    text:
      'O dispositivo deve ser obrigatóriamente higienizado a cada 12h. Após uso diário, limpe o conjunto com Solução Hipoclorito/Cloxedina. Evite utilizar só álcool.',
  },
  {
    title: 'Atenção',
    icon: 'attention.png',
    text:
      'Este equipamento destina-se exclusivamente para uso emergencial, podendo sofrer alterações durante a pandemia de COVID-19. É uma proteção de uso individual.',
  },
]

module.exports = {
  title: 'Faceshield - LASER/CNC',
  slug: 'faceshield-laser',
  category: 'EPI',
  categoryType: 'epis',
  images: [
    'projects/faceshield-laser/faceshield.jpg',
    'projects/faceshield-laser/faceshield-2.jpg',
  ],
  technology: 'Laser CO2/Plotter/CNC',
  materials: 'PET/PETG/PVC/PVA',
  downloads: ['http://abre.ai/brcv-faceshield-laser'],
  designers: 'Arnaldo Kubo, Renato Boschilia Jr e Wanderley Balsalobre',
  details:
    '<p>Este modelo foi estudado e otimizado por nossa equipe multidisciplinar, com base nisso apresentamos aqui procedimentos de produção e limpeza, para utilização com segurança.</p>',
  procedures: {
    makers,
    hospitals,
  },
}
