export default {
  linkAPI: {
    getOrganisationAPI: "/organisations/?",
    filters: {}
  },
  setFilter: {
    bk: "",
    budget_level: "",
    institution_type: "",
    organisation_type: "",
    industry_typing: "",
    rubpnubp_status: "",
    egrul_status: ""
  },
  titleFilters: [
    "Бк",
    "Уровень бюджета",
    "Тип учреждения",
    "Тип организации",
    "Отраслевая типизация",
    "Статус РУБПНУБП",
    "Статус ЕГРЮЛ"
  ],
  dateForFilters: {
    bk: [
      {
        code: 1,
        name: "Министерство науки и высшего образования Российской Федерации",
        head_code: 75
      },
      {
        code: 2,
        name:
          'Федеральное государственное бюджетное образовательное учреждение высшего образования "Российская академия народного хозяйства и государственной службы при Президенте Российской Федерации"',
        head_code: 384
      },
      {
        code: 3,
        name: "Министерство просвещения Российской Федерации",
        head_code: 73
      },
      {
        code: 4,
        name:
          "Федеральная служба по гидрометеорологии и мониторингу окружающей среды",
        head_code: 169
      },
      {
        code: 5,
        name: "Федеральное медико-биологическое агентство",
        head_code: 388
      },
      {
        code: 6,
        name: "Министерство здравоохранения Российской Федерации",
        head_code: 56
      },
      {
        code: 7,
        name: "Министерство культуры Российской Федерации",
        head_code: 54
      },
      {
        code: 8,
        name: "Министерство промышленности и торговли Российской Федерации",
        head_code: 20
      },
      {
        code: 9,
        name: "Министерство сельского хозяйства Российской Федерации",
        head_code: 82
      },
      {
        code: 10,
        name: "Федеральная служба по ветеринарному и фитосанитарному надзору",
        head_code: 81
      },
      {
        code: 11,
        name:
          "Федеральная служба по надзору в сфере защиты прав потребителей и благополучия человека",
        head_code: 141
      },
      {
        code: 12,
        name:
          "Министерство строительства и жилищно-коммунального хозяйства Российской Федерации",
        head_code: 69
      },
      {
        code: 13,
        name: "Федеральное агентство по государственным резервам",
        head_code: 171
      },
      {
        code: 14,
        name: "Министерство спорта Российской Федерации",
        head_code: 777
      },
      {
        code: 15,
        name: "Федеральная служба по надзору в сфере природопользования",
        head_code: 48
      },
      {
        code: 16,
        name:
          "Федеральная служба по экологическому, технологическому и атомному надзору",
        head_code: 498
      },
      {
        code: 17,
        name: "Федеральное агентство лесного хозяйства",
        head_code: 53
      },
      {
        code: 18,
        name:
          "Министерство Российской Федерации по делам гражданской обороны, чрезвычайным ситуациям и ликвидации последствий стихийных бедствий",
        head_code: 177
      },
      {
        code: 19,
        name:
          'Федеральное государственное бюджетное учреждение "Национальный исследовательский центр "Курчатовский институт"',
        head_code: 595
      },
      {
        code: 20,
        name: "Министерство природных ресурсов и экологии Российской Федерации",
        head_code: 51
      },
      {
        code: 21,
        name: "Министерство юстиции Российской Федерации",
        head_code: 318
      },
      {
        code: 22,
        name: "Федеральное агентство по рыболовству",
        head_code: 76
      },
      {
        code: 23,
        name: "Министерство транспорта Российской Федерации",
        head_code: 103
      },
      {
        code: 24,
        name: "Министерство труда и социальной защиты Российской Федерации",
        head_code: 149
      },
      {
        code: 25,
        name: "Управление делами Президента Российской Федерации",
        head_code: 303
      },
      {
        code: 26,
        name: "Федеральная служба по интеллектуальной собственности",
        head_code: 168
      },
      {
        code: 27,
        name: "Федеральная служба по надзору в сфере образования и науки",
        head_code: 77
      },
      {
        code: 28,
        name: "Федеральное архивное агентство",
        head_code: 155
      },
      {
        code: 29,
        name: "Министерство финансов Российской Федерации",
        head_code: 92
      },
      {
        code: 30,
        name: "Федеральная служба государственной статистики",
        head_code: 157
      }
    ],
    budget_level: [
      { code: 1, name: "Федеральный бюджет" },
      { code: 2, name: "Региональный бюджет" },
      { code: 3, name: "Областной бюджет" }
    ],
    institution_type: [
      { code: 1, name: "Бюджетное" },
      { code: 2, name: "Автономное" }
    ],
    organisation_type: [{ code: 1, name: "Учреждение" }],
    industry_typing: [
      {
        code: 1,
        name: "Библиотека"
      },
      {
        code: 2,
        name: "ВУЗ"
      },
      {
        code: 3,
        name: "Детский сад"
      },
      {
        code: 4,
        name: "ДПО"
      },
      {
        code: 5,
        name: "Здравоохранение"
      },
      {
        code: 6,
        name: "Культура"
      },
      {
        code: 7,
        name: "Музей"
      },
      {
        code: 8,
        name: "Научное"
      },
      {
        code: 9,
        name: "СПО"
      },
      {
        code: 10,
        name: "Прочие"
      }
    ],
    rubpnubp_status: [
      { code: 1, name: "Действует" },
      { code: 2, name: "Специальные указания" }
    ],
    egrul_status: [
      { code: "ACT", name: "Действующее" },
      { code: "LIQ", name: "Ликвидации юридического лица" },
      { code: "ILS", name: "Находится в стадии ликвидации" },
      {
        code: "DTE",
        name: "Регистрирующим органом принято решение о предстоящем исключении"
      },
      {
        code: "AWE",
        name:
          "Юридическое лицо находится в процессе реорганизации в форме присоединения к другому юридическому лицу"
      },
      {
        code: "JTE",
        name:
          "Юридическое лицо находится в процессе реорганизации в форму присоединения к нему других юридических лиц"
      }
    ]
  },
  organisations: {
    count: "",
    next: "",
    previous: "",
    results: ""
  },
  tableHeaderNames: {},
  isUseFilter: false
};
