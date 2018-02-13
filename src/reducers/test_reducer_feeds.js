import { FETCH_FEEDS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_FEEDS:
      return {
        "feed_items": [
          {
            "id": "n06o73vje680c0ockc4804g4ksw8oc0",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T14:24:51+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "n06o73vje680c0ockc4804g4ksw8oc0",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T14:24:51+0000",
              "date_modified": "2018-02-13T14:24:51+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "provideup",
              "poster": {
                "slug": "provideup",
                "type": "COMPANY",
                "displayName": "Provideup"
              },
              "company": {
                "_id": "provideup",
                "slug": "provideup",
                "date_created": "2016-09-15T13:53:25+0000",
                "date_modified": "2017-12-11T14:06:42+0000",
                "status": "PRIVE",
                "state": "visible",
                "name": "Provideup",
                "tag_line": "Trouvez vos prochaines opportunités sur ProvideUP ! CDI, CDD, stages, alternances, missions freelance !",
                "is_client": false,
                "employees_number": "10",
                "is_autocomplete": true,
                "industry": "recrutement",
                "location": {
                  "type": "city",
                  "city_place_id": "2df4ad147da934e7e8db8c55cd5edb2d5a0d1c1c",
                  "display_value": "Paris",
                  "city": "Paris",
                  "department": "Paris",
                  "department_short": "75",
                  "state": "Île-de-France",
                  "state_short": "IDF",
                  "country": "France",
                  "country_short": "FR",
                  "points": {
                    "center": {
                      "lat": 48.856614,
                      "lon": 2.3522219
                    }
                  },
                  "geo": {
                    "lat": 48.856614,
                    "lon": 2.3522219
                  },
                  "extra": {}
                },
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "ProvideUP",
                    "date_created": "2017-12-05T22:48:42+0000",
                    "date_modified": "2017-12-05T22:48:42+0000"
                  }, {
                    "type": "TWITTER",
                    "url": "@ProvideUP",
                    "date_created": "2017-12-05T22:48:42+0000",
                    "date_modified": "2017-12-05T22:48:42+0000"
                  }, {
                    "type": "BLOG",
                    "url": "http://blog.provideup.com/",
                    "date_created": "2017-12-05T22:48:42+0000",
                    "date_modified": "2017-12-05T22:48:42+0000"
                  }, {
                    "type": "INSTAGRAM",
                    "url": "ProvideUP",
                    "date_created": "2017-12-05T22:48:42+0000",
                    "date_modified": "2017-12-05T22:48:42+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "Notre site",
                    "url": "https://provideup.com/",
                    "date_created": "2017-12-05T22:48:42+0000",
                    "date_modified": "2017-12-05T22:48:42+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/lu/j0a/luj0alxvpayjbvttyvuoywz48pf2g0f5_company_large.png",
                "banner": "https://images.wizbii.com/uploads/lh/qm4/lhqm4y57fcnmnrtfhg6t5tptkc4xaj09_company_banner_large.png",
                "banner_info": {
                  "offset": {
                    "x": -71.25,
                    "y": -11
                  },
                  "zoom": 0.278
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p><strong><a href=\"https://provideup.com/\" target=\"_blank\">ProvideUP</a>&nbsp;</strong>vous aide&nbsp;dans vos recherches de CDI, CDD, stages, alternances ou missions freelances.&nbsp;</p>\n<p>De nombreuses entreprises nous confient leurs recherches de candidats.&nbsp;</p>\n<p><strong><a href=\"https://provideup.com/need/catalog\" target=\"_blank\">▶ N'h&eacute;sitez pas &agrave; consulter nos annonces</a>&nbsp;!</strong></p>\n<p><strong><a href=\"https://provideup.com/security/create-account\" target=\"_blank\">▶ Cliquez ici pour vous cr&eacute;er une alerte</a>&nbsp;!</strong></p>\n<p><em>Le petit + ? Une formation gratuite en ligne d'un mois &agrave; l'inscription !&nbsp;</em> 🤓</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p><strong><a href=\"https://provideup.com/\" target=\"_blank\">ProvideUP</a> </strong>vous aide&nbsp;dans vos recherches de CDI, CDD, stages, alternances ou missions freelances.&nbsp;</p>\n<p>De nombreuses entreprises nous confient leurs recherches de candidats.&nbsp;</p>\n<p><strong>=&gt;&nbsp;<a href=\"https://provideup.com/need/catalog\" target=\"_blank\">N'h&eacute;sitez pas &agrave; consulter nos annonces</a>&nbsp;!!</strong></p>\n<p><strong>=&gt; <a href=\"https://provideup.com/security/create-account\" target=\"_blank\">Cliquez ici pour vous cr&eacute;er une alerte</a> !</strong></p>\n<p><em>Le petit + ? Une formation gratuite en ligne d'un mois &agrave; l'inscription :)&nbsp;</em></p>",
                  "nb_jobs": 0
                },
                "tabs": [],
                "recruiters": [],
                "aliases": [],
                "subsidiaries": [],
                "should_redirect": false,
                "twitter_username": "ProvideUP",
                "website": "https://provideup.com/",
                "followers": [],
                "followed": false,
                "high_res_logo": "https://images.wizbii.com/uploads/lu/j0a/luj0alxvpayjbvttyvuoywz48pf2g0f5_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/lh/qm4/lhqm4y57fcnmnrtfhg6t5tptkc4xaj09_company_banner_large@2x.png",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "https://blog.emploi.provideup.com/7-idees-ameliorer-lespace-carriere-de-site/",
              "tags": [
                {
                  "_id": "espace-carriere",
                  "slug": "espace-carriere",
                  "name": "Espace carrière",
                  "type": "TAG",
                  "date_created": "2018-02-13T14:24:51+0000",
                  "date_modified": "2018-02-13T14:24:51+0000"
                }, {
                  "_id": "entreprise",
                  "slug": "entreprise",
                  "name": "Entreprise",
                  "type": "TAG",
                  "date_created": "2018-02-13T14:24:51+0000",
                  "date_modified": "2018-02-13T14:24:51+0000"
                }, {
                  "_id": "dynamiser",
                  "slug": "dynamiser",
                  "name": "Dynamiser",
                  "type": "TAG",
                  "date_created": "2018-02-13T14:24:51+0000",
                  "date_modified": "2018-02-13T14:24:51+0000"
                }
              ],
              "attachment_link": "https://blog.emploi.provideup.com/7-idees-ameliorer-lespace-carriere-de-site/",
              "attachment_title": "7 conseils pour dynamiser l'espace carrière de votre entreprise ! · BlogEmploi",
              "attachment_picture": "https://images.wizbii.com/uploads/3g/np8/3gnp8fzy21iwafm27033l43prjbc37jk_publication_large.png",
              "attachment_picture_width": 1176,
              "attachment_picture_height": 668,
              "attachment_content": "Pour attirer « le bon candidat », votre site ou espace de \"carrière/recrutement\" doit être le plus attractif possible.",
              "comments": [
                {
                  "name": "Taylor Otwell",
                  "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                  "name": "John Papa",
                  "content": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                },
                {
                  "name": "Emilie Bounet",
                  "content": "LAt vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias."
                }
              ],
              "likes": [],
              "reports": [],
              "delta": 1982686,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "1t3uopxye0g04k0ksg4kc4kos0gkgok",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T13:39:45+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "1t3uopxye0g04k0ksg4kc4kos0gkgok",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T13:39:45+0000",
              "date_modified": "2018-02-13T13:39:46+0000",
              "language": "en",
              "locale": "en_GB",
              "poster_type": "PROFILE",
              "poster_slug": "andres-felipe-rivera-diaz",
              "poster": {
                "slug": "andres-felipe-rivera-diaz",
                "type": "PROFILE",
                "displayName": "Andres Felipe Rivera Diaz"
              },
              "profile": {
                "_id": "andres-felipe-rivera-diaz",
                "name": "Andres Felipe Rivera Diaz",
                "slug": "andres-felipe-rivera-diaz",
                "deleted": false,
                "language": "en",
                "locale": "en_GB",
                "first_name": "Andres Felipe",
                "last_name": "Rivera Diaz",
                "date_birthday": "1996-11-13T14:57:53+0000",
                "location": {
                  "type": "city",
                  "display_value": "Bogotá",
                  "city": "Bogotá",
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "educations": [],
                "experiences_pro": [],
                "experiences_extra_pro": [],
                "counters": {
                  "like": 0
                },
                "registration_interests": [],
                "connection_source_from_profile": "none",
                "networks": {
                  "networks": {
                    "full": {
                      "type": "full",
                      "result_set": {
                        "rows": 10,
                        "offset": 0,
                        "hits": 0,
                        "results": []
                      }
                    }
                  }
                },
                "is_proxy": true,
                "data_bag": []
              },
              "content": "Mí e",
              "tags": [
                {
                  "_id": "commerce",
                  "slug": "commerce",
                  "name": "Commerce",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:39:45+0000",
                  "date_modified": "2018-02-13T13:39:45+0000"
                }
              ],
              "attachment_picture": "https://images.wizbii.com/uploads/tz/ln8/tzln8zg267aaj13e9ysm66qbzh1i5c7d_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/h6nkxyef051u1ovdf30aqwtwfweu19qv.jpeg",
              "attachment_picture_width": 2448,
              "attachment_picture_height": 3264,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 4688687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "odw9me91g9w0c0k4s4wwsogwocsocog",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T13:15:08+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "odw9me91g9w0c0k4s4wwsogwocsocog",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T13:15:08+0000",
              "date_modified": "2018-02-13T13:15:11+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "credit-agricole-nord-de-france",
              "poster": {
                "slug": "credit-agricole-nord-de-france",
                "type": "COMPANY",
                "displayName": "Crédit Agricole Nord De France"
              },
              "company": {
                "_id": "credit-agricole-nord-de-france",
                "slug": "credit-agricole-nord-de-france",
                "guid": "1530840",
                "date_created": "2013-11-25T10:33:31+0100",
                "date_modified": "2018-01-04T15:47:04+0000",
                "date_client": "2017-06-16T09:00:00+0200",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Crédit Agricole Nord De France",
                "tag_line": "Nous vous mettons en relation avec des entreprises qui recrutent sur le territoire",
                "is_client": true,
                "employees_number": "2900",
                "is_autocomplete": true,
                "industry": "banques",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [],
                "logo": "https://images.wizbii.com/uploads/dr/1fc/dr1fcjdxa1i24ojowunaq3upqo4jv8wt_company_large.png",
                "banner": "https://images.wizbii.com/uploads/d9/tm3/d9tm32oivpnkbb1kfyiz0v9p70qoc1lm_company_banner_large.png",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p class=\"inline-title Sans-17px-black-85%-semibold mb3\" dir=\"ltr\" style=\"text-align: left;\">Le Cr&eacute;dit Agricole Nord de France est une banque mutualiste implant&eacute;e dans le Nord et le Pas-de-Calais.&nbsp;</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<h4 class=\"inline-title Sans-17px-black-85%-semibold mb3\" dir=\"ltr\">Tout commence ici, au Cr&eacute;dit Agricole Nord de France</h4>\n<p>1&egrave;re banque du Nord-Pas de Calais avec ses 2800 collaborateurs, le Cr&eacute;dit Agricole Nord de France recrute plus de 200 nouveaux talents par an. &nbsp;</p>\n<p>NOUS REJOINDRE, c&rsquo;est participer au d&eacute;veloppement de la Banque Multicanal de demain et vous ouvrir des perspectives d&rsquo;&eacute;volution au sein du Groupe. &nbsp;</p>\n<p>NOUS REJOINDRE, c&rsquo;est porter nos valeurs de proximit&eacute; et de solidarit&eacute;, et vous engager avec nous dans le d&eacute;veloppement d&rsquo;actions utiles et responsables sur notre territoire.</p>\n<h4 class=\"inline-title Sans-17px-black-85%-semibold mb3\" dir=\"ltr\">Une banque 100% humaine, 100% digitale</h4>\n<p class=\"org-custom-modules-module__inline-body Sans-17px-black-70%\" dir=\"ltr\">La digitalisation du secteur bancaire ne s&rsquo;arr&ecirc;te pas aux process de recrutements, bien au contraire. Les collaborateurs du Cr&eacute;dit Agricole &eacute;voluent dans des environnements de travail &agrave; la pointe de la technologie, toujours dans l&rsquo;optique de faciliter leur mission et d'apporter de la valeur ajout&eacute;e aux relations qu&rsquo;ils instaurent et d&eacute;veloppent avec leurs clients.</p>",
                  "nb_jobs": 34
                },
                "tabs": [
                  {
                    "slug": "evenement-cafe-de-la-creation-lille",
                    "inner_title": "Venez échanger avec des professionnels de l'entrepreneuriat !",
                    "description": "<p><img src=\"https://images.wizbii.com/api/image/v1/024304a9691c1dc62dcd894b707bc026.png\" alt=\"\" /></p>\n<p>&nbsp;</p>\n<p style=\"text-align: center;\">Vous avez un projet de start up ou d'activit&eacute; en cours de cr&eacute;ation et avez besoin de conseils pour vous lancer rapidement?&nbsp;</p>\n<p style=\"text-align: center;\">Nous vous donnons rendez-vous&nbsp;le <strong>jeudi 1er d&eacute;cembre&nbsp;</strong>de <strong>9h00 &agrave; 11h30</strong> &agrave; <strong>Lille</strong>&nbsp;pour une nouvelle &eacute;dition du Caf&eacute; de la Cr&eacute;ation, organis&eacute; par le Cr&eacute;dit Agricole Nord de France.</p>\n<p style=\"text-align: center;\">Les Caf&eacute;s de la Cr&eacute;ation vous donnent l'opportunit&eacute; de rencontrer, autour d'un caf&eacute;, d'autres entrepreneurs et porteurs de projets dans votre r&eacute;gion et d'&eacute;changer avec des professionnels du d&eacute;velopement entrepreneurial dans une ambiance chaleureuse et d&eacute;contract&eacute;e.</p>\n<p style=\"text-align: center;\"><em>(Les inscriptions seront bient&ocirc;t ouvertes!)</em></p>\n<p>%form%</p>",
                    "online": false
                  }, {
                    "slug": "job-meeting",
                    "title": "1er Stage 1er Job",
                    "inner_title": "L'initiative pour l'emploi des jeunes !",
                    "description": "<p style=\"text-align: center;\"><img src=\"https://images.wizbii.com/api/image/v1/572kljmzl9bp61ff0za9ahlbukc9sb9v.jpeg\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><strong>L&rsquo;emploi des jeunes sur notre territoire ? Une v&eacute;ritable priorit&eacute; !</strong></p>\n<p>En 2017, le Cr&eacute;dit Agricole Nord de France&nbsp;s&rsquo;engage dans une initiative de taille : accompagner les 18-30 ans dans le lancement de leur carri&egrave;re &agrave; travers&nbsp;<strong>1er Stage 1er Job</strong>.</p>\n<p><em>Des offres d&rsquo;emploi, de stage et d&rsquo;alternance</em></p>\n<p>Au programme, un large panel de jobs...et pourquoi pas le v&ocirc;tre ! En partenariat avec Wizbii, le Cr&eacute;dit Agricole Nord de France vous permet de postuler aux offres diffus&eacute;es par des entreprises de votre r&eacute;gion : du CDD au CDI en passant par le stage ou encore l&rsquo;alternance, retrouvez ces annonces dans la rubrique &ldquo;Recrutement&rdquo; !</p>\n<p><em>Des &eacute;v&eacute;nements de recrutement originaux</em></p>\n<p><strong>1er Stage 1er Job</strong>, c&rsquo;est aussi l&rsquo;occasion d&rsquo;&eacute;changer avec ces recruteurs autour d&rsquo;un verre ! Que diriez-vous de passer votre entretien dans un cadre informel et convivial ? Inscrivez-vous &agrave; l&rsquo;un de nos Job Dating. Pour cela, rien de plus simple : rendez-vous directement sur l&rsquo;onglet &ldquo;<a href=\"https://www.wizbii.com/company/credit-agricole-nord-de-france#job-dating\" target=\"_blank\">Job Dating</a>&rdquo; et abonnez-vous &agrave; notre page &ldquo;Entreprise&rdquo; pour &ecirc;tre tenu au courant des prochains &eacute;v&eacute;nements.</p>",
                    "online": true
                  }, {
                    "slug": "job-dating",
                    "title": "Job Dating du 19/04",
                    "inner_title": "Venez rencontrer les recruteurs de votre région !",
                    "description": "<p style=\"text-align: center;\"><img src=\"https://images.wizbii.com/api/image/v1/9dg13v0wrueq9to7pie0k9eunx86vrxk.png\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><em>Vous &ecirc;tes &agrave; la recherche d'un emploi, d'un stage ou d'une alternance ?</em></p>\n<p style=\"text-align: center;\"><em>Un&nbsp;<strong>Job Dating</strong>&nbsp;rassemblant des entreprises de la r&eacute;gion aura lieu le <strong>19 avril &agrave; Arras.</strong></em></p>\n<p style=\"text-align: center;\"><em>Pour vous inscrire :</em></p>\n<p style=\"text-align: center;\"><em>%form%</em></p>",
                    "online": true,
                    "date_begin": "2018-01-04T00:00:00+0100",
                    "date_end": "2018-04-19T23:59:00+0200"
                  }
                ],
                "aliases": [],
                "subsidiaries": [],
                "twitter_username": "ca_ndf",
                "website": "https://www.ca-norddefrance.fr/",
                "followed": false,
                "high_res_logo": "https://images.wizbii.com/uploads/dr/1fc/dr1fcjdxa1i24ojowunaq3upqo4jv8wt_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/d9/tm3/d9tm32oivpnkbb1kfyiz0v9p70qoc1lm_company_banner_large@2x.png",
                "options": ["activate_partners"],
                "partner_banner": "r2s5836b23aog4jw0buuu7rmacxskmxc.png",
                "partners_validator_emails": []
              },
              "content": "Nous étions présents le 7 février 2018 à l'ISA Lille pour y recruter nos futurs alternants. Nous y avons rencontré une trentaine d'étudiants ingénieur motivés par les métiers de la Banque.\nRappelons que le Crédit Agricole Nord de France accueille cette année plus de 90 alternants sur ses différents métiers !\n",
              "tags": [
                {
                  "_id": "alternance",
                  "slug": "alternance",
                  "name": "Alternance",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:15:11+0000",
                  "date_modified": "2018-02-13T13:15:11+0000"
                }, {
                  "_id": "recrutement",
                  "slug": "recrutement",
                  "name": "recrutement",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:15:11+0000",
                  "date_modified": "2018-02-13T13:15:11+0000"
                }, {
                  "_id": "relations-ecoles",
                  "slug": "relations-ecoles",
                  "name": "relations ecoles",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:15:11+0000",
                  "date_modified": "2018-02-13T13:15:11+0000"
                }
              ],
              "attachment_picture": "https://images.wizbii.com/uploads/yl/zrm/ylzrmxpk0gadwbaplocpf997a7oloqb2_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/q1mptk8f627fkfygwv6hdg85pstz8loa.jpeg",
              "attachment_picture_width": 5472,
              "attachment_picture_height": 3648,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 6165687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "epf64a38u6g40kk0c0884kgck4w4gsc",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T13:05:25+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "epf64a38u6g40kk0c0884kgck4w4gsc",
              "external_id": "17942eb432a83350df706b876e486d03",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T13:05:25+0000",
              "date_modified": "2018-02-13T14:00:41+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "amadeus",
              "poster": {
                "slug": "amadeus",
                "type": "COMPANY",
                "displayName": "Amadeus Nice",
                "guid": "390307"
              },
              "company": {
                "_id": "amadeus",
                "slug": "amadeus",
                "guid": "390307",
                "date_created": "2012-11-20T12:51:46+0100",
                "date_modified": "2017-09-05T13:27:53+0000",
                "date_client": "2015-07-21T09:00:00+0200",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Amadeus Nice",
                "tag_line": "Let’s shape the future of travel",
                "is_client": true,
                "employees_number": "14000",
                "is_autocomplete": true,
                "industry": "technologies_et_services_de_l_information",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "AmadeusNice",
                    "date_created": "2016-05-10T09:59:55+0000",
                    "date_modified": "2016-05-10T09:59:55+0000"
                  }, {
                    "type": "TWITTER",
                    "url": "amadeusnice",
                    "date_created": "2016-05-10T09:59:55+0000",
                    "date_modified": "2016-05-10T09:59:55+0000"
                  }, {
                    "type": "YOUTUBE",
                    "url": "https://www.youtube.com/channel/UCQhvSnXCfU1OLKNfbbH7UOw",
                    "date_created": "2016-05-10T09:59:55+0000",
                    "date_modified": "2016-05-10T09:59:55+0000"
                  }, {
                    "type": "BLOG",
                    "url": "http://blogamadeus.com/",
                    "date_created": "2016-05-10T09:59:55+0000",
                    "date_modified": "2016-05-10T09:59:55+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/1e/ece/1eece213b4df8829658e2fcedeab7fec_company_large.png",
                "banner": "https://images.wizbii.com/uploads/jf/qj0/jfqj0kfjpwlov5sgxzit3gwtdrq8wtk5_company_banner_large.png",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": -92.3913
                  },
                  "zoom": 1.0869565217391
                },
                "banner_link": "http://www.amadeus.com/careers",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p class=\"h3\"><strong>Nous connaitre</strong></p>\n<p><iframe style=\"width: 560px; height: 315px;\" src=\"//www.youtube.com/embed/IfraygERegI?controls=0&amp;showinfo=0\" width=\"300\" height=\"150\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></p>\n<p>Amadeus est le leader mondial de solutions technologiques pour l'industrie du voyage.</p>\n<p>Nos solutions simplifient les d&eacute;placements de centaines de millions de voyageurs par an. C'est une grande responsabilit&eacute; dont nous sommes tr&egrave;s fiers. Amadeus est pr&eacute;sent &agrave; chaque &eacute;tape du voyage. Nous fournissons la technologie qui fait progresser l'industrie, de la recherch&eacute; initiale &agrave; la r&eacute;servation, de la tarification &agrave; l'&eacute;mission des billets, de la gestion des r&eacute;servations &agrave; la coordination des proc&eacute;dures d'enregistrement et de d&eacute;part.</p>\n<p>Amadeus Nice est le principal centre de R&amp;D du Groupe et une plateforme cl&eacute; pour les services commerciaux et le support client. Install&eacute; au c&oelig;ur du plus grand p&ocirc;le technologique d'Europe, entre mer et montagne, notre campus offre un environnement multiculturel exceptionnel o&ugrave; plus de 3 400 personnes d'une soixantaine de nationalit&eacute;s diff&eacute;rentes travaillent ensemble.</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p class=\"h3\"><strong> Rejoignez-nous et devenez un Amadeus Travel Shaper</strong></p>\n<p class=\"h3\"><strong>&nbsp;</strong></p>\n<p><iframe style=\"width: 560px; height: 315px;\" src=\"//www.youtube.com/embed/5FpMChhwOuY?controls=0&amp;showinfo=0\" width=\"300\" height=\"150\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></p>\n<p>L'ensemble de nos collaborateurs partage le m&ecirc;me esprit d'innovation et l'ambition de dessiner le futur du voyage.</p>\n<p>Amadeus encourage ses collaborateurs &agrave; donner le meilleur d'eux-m&ecirc;mes, &agrave; d&eacute;velopper leurs comp&eacute;tences et &agrave; progresser. En nous rejoignant, vous aurez la possibilit&eacute; d'&eacute;largir vos horizons de carri&egrave;re, ici ou ailleurs.</p>\n<p>Amadeus est une entreprise ou il fait bon travailler. Notre approche est flexible et notre succ&egrave;s bas&eacute; sur l'esprit d'&eacute;quipe et la collaboration. Si vous souhaitez contribuer &agrave; une culture dynamique qui encourage l'ouverture et l'innovation, Amadeus est fait pour vous.</p>",
                  "nb_jobs": 0
                },
                "tabs": [
                  {
                    "id": "spc4t5evt9wcooc040cs44kwowo4sc4",
                    "slug": "pourquoi-amadeus",
                    "title": "Pourquoi Amadeus ?",
                    "inner_title": "Découvrez pourquoi vous devez nous rejoindre !",
                    "description": "<h2><strong>Une entreprise o&ugrave; il fait bon travailler</strong></h2>\n<p>Amadeus encourage ses collaborateurs &agrave; donner le meilleur d&rsquo;eux-m&ecirc;mes. En nous rejoignant,&nbsp;vous aurez la possibilit&eacute; d&rsquo;&eacute;largir vos horizons de carri&egrave;re. Si vous souhaitez contribuer &agrave; une <strong>culture dynamique&nbsp;qui encourage l&rsquo;ouverture et l&rsquo;innovation</strong>, Amadeus est fait pour vous.</p>\n<p><img src=\"https://images.wizbii.com/api/image/v1/e25c0cf29d600e8338ace551d9ac1990.png\" alt=\"\" /></p>\n<h2>Travaillez dans une&nbsp;atmosph&egrave;re stimulante&nbsp;</h2>\n<p>Amadeus est&nbsp;une <strong>entreprise&nbsp;passionnante&nbsp;et stimulante</strong>.&nbsp;Nos collaborateurs&nbsp;disent souvent qu&rsquo;aucune&nbsp;journ&eacute;e ne ressemble&nbsp;&agrave; une autre.&nbsp;Vos id&eacute;es sont entendues&nbsp;et votre travail aura un impact&nbsp;sur les voyages qu&rsquo;effectuent&nbsp;chaque ann&eacute;e des centaines&nbsp;de millions de personnes.</p>\n<p>&Agrave; Nice Sophia Antipolis,&nbsp;nous encourageons&nbsp;l&rsquo;agilit&eacute; et la collaboration.&nbsp;Nous avons mis en oeuvre<br />une <strong>fa&ccedil;on de travailler&nbsp;plus flexible</strong>.</p>\n<p><img src=\"http://www.jobteaser.com/system/company/undefined/Amadeus01.png\" alt=\"\" /></p>\n<h2>D&eacute;couvrez une&nbsp;entreprise internationale&nbsp;et multiculturelle&nbsp;</h2>\n<p>Amadeus offre de r&eacute;elles&nbsp;opportunit&eacute;s &agrave; l&rsquo;international.&nbsp;Votre carri&egrave;re peut vous mener&nbsp;partout dans le monde.&nbsp;<strong>Pr&eacute;sents sur 195 march&eacute;s,&nbsp;nous op&eacute;rons &agrave; travers 8 sites&nbsp;centraux et r&eacute;gionaux ainsi&nbsp;que 71 agences commerciales locales r&eacute;partis sur 5 continents</strong>.</p>\n<p>&Agrave; Nice Sophia Antipolis, vous&nbsp;trouverez :<br />&bull; des collaborateurs de plus&nbsp;de 80 nationalit&eacute;s diﬀ&eacute;rentes<br />&bull; l&rsquo;ambiance d&rsquo;un campus&nbsp;international<br />&bull; des collaborateurs&nbsp;qui parlent tous&nbsp;anglais<br />&bull; des &eacute;quipes&nbsp;multi-sites</p>\n<h2>Chaque jour, d&eacute;veloppez vos&nbsp;comp&eacute;tences et progressez</h2>\n<p>Chez Amadeus,&nbsp;nous sommes en perp&eacute;tuelle&nbsp;&eacute;volution. Chaque&nbsp;jour, vous pouvez&nbsp;apprendre aupr&egrave;s de professionnels&nbsp;talentueux. Que ce soit par le biais&nbsp;d&rsquo;une <strong>formation, d&rsquo;un e-learning,&nbsp;d&rsquo;un tutorat, de nouvelles&nbsp;responsabilit&eacute;s, d&rsquo;une mobilit&eacute;&nbsp;interne ou internationale</strong>, nous&nbsp;favorisons votre d&eacute;veloppement&nbsp;professionnel et l&rsquo;&eacute;volution&nbsp;de votre carri&egrave;re.&nbsp;</p>\n<p>&Agrave; Nice Sophia Antipolis,&nbsp;86&nbsp;% de nos collaborateurs&nbsp;b&eacute;n&eacute;ficient chaque ann&eacute;e de&nbsp;formations. Nous investissons&nbsp;massivement dans un&nbsp;programme de qualit&eacute;, bien&nbsp;au-del&agrave; des simples exigences&nbsp;r&egrave;glementaires.</p>\n<p><img src=\"http://www.jobteaser.com/system/company/undefined/Amadeus02.png\" alt=\"\" /></p>\n<h2>Notre programme de&nbsp;Responsabilit&eacute; Soci&eacute;tale</h2>\n<p>Depuis plusieurs ann&eacute;es&nbsp;et avec la participation active&nbsp;de ses collaborateurs,&nbsp;<strong>Amadeus int&egrave;gre les dimensions&nbsp;sociales, environnementales&nbsp;et humanitaires au coeur&nbsp;de ses activit&eacute;s</strong> et contribue<br />ainsi &agrave; relever les d&eacute;fis&nbsp;du d&eacute;veloppement durable.&nbsp;Notre politique locale&nbsp;en mati&egrave;re de ressources&nbsp;humaines inclut&nbsp;des programmes et des&nbsp;accords sp&eacute;ciﬁques sur :&nbsp;<br />&bull; l&rsquo;&eacute;galit&eacute; hommes/femmes,<br />&bull; l&rsquo;accueil des collaborateurs&nbsp;en situation de handicap,<br />&bull; l&rsquo;int&eacute;gration des plus jeunes&nbsp;et des s&eacute;niors,<br />&bull; le bien-&ecirc;tre au travail,<br />&bull; la ﬂexibilit&eacute; des horaires&nbsp;de travail</p>\n<p>&nbsp;</p>",
                    "online": true
                  }
                ],
                "aliases": [],
                "subsidiaries": [],
                "twitter_username": "amadeusnice",
                "website": "http://www.amadeus.com",
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "https://www.facebook.com/AmadeusNice"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/1e/ece/1eece213b4df8829658e2fcedeab7fec_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/jf/qj0/jfqj0kfjpwlov5sgxzit3gwtdrq8wtk5_company_banner_large@2x.png",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Ambiance accueillante chez Amadeus Nice : nous sommes ravis de vous présenter nos nouvelles recrues. Welcome ! 😉",
              "tags": [],
              "attachment_title": "Ambiance accueillante chez Amadeus Nice : nous sommes ravis de vous présenter nos nouvelles recrues. Welcome ! 😉",
              "attachment_picture": "https://images.wizbii.com/uploads/rs/z6p/rsz6ps0gjwihhkvi2jgh6tymuzhbipkl_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/rsz6ps0gjwihhkvi2jgh6tymuzhbipkl.jpeg",
              "attachment_picture_width": 720,
              "attachment_picture_height": 396,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 6748687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "fglqstnc9zc4osks08o84s8s8ccw4o4",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T12:54:47+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "fglqstnc9zc4osks08o84s8s8ccw4o4",
              "external_id": "b4e8497fd1381af37120c87c9fc78eb0",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T12:54:47+0000",
              "date_modified": "2018-02-13T13:00:19+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "frizbiz",
              "poster": {
                "slug": "frizbiz",
                "type": "COMPANY",
                "displayName": "Frizbiz",
                "guid": "1518452"
              },
              "company": {
                "_id": "frizbiz",
                "slug": "frizbiz",
                "guid": "1518452",
                "date_created": "2013-11-25T10:10:51+0100",
                "date_modified": "2018-01-24T13:07:17+0000",
                "status": "PRIVE",
                "state": "visible",
                "name": "Frizbiz",
                "tag_line": "Rejoignez une communauté dédiée aux services entre particuliers de bricolage et autres services à la personne.",
                "is_client": true,
                "is_autocomplete": false,
                "industry": "services_a_la_personne",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "FrizBiz-333802493371602/",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }, {
                    "type": "TWITTER",
                    "url": "@FRIZBIZ_COM",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }, {
                    "type": "GOOGLE_PLUS",
                    "url": "https://plus.google.com/+Frizbiz-jobbing",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }, {
                    "type": "BLOG",
                    "url": "http://blog.frizbiz.com/",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }, {
                    "type": "INSTAGRAM",
                    "url": "frizbiz_com/",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }, {
                    "type": "APPLE_STORE",
                    "url": "https://itunes.apple.com/fr/app/frizbiz/id1071087083?mt=8",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }, {
                    "type": "GOOGLE_STORE",
                    "url": "https://play.google.com/store/apps/details?id=com.frizbiz&hl=fr",
                    "date_created": "2016-12-28T16:33:24+0000",
                    "date_modified": "2016-12-28T16:33:24+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/5j/3pj/5j3pjbg7qye1dmn6kiuemmgw1ih6ae2k_company_large.jpeg",
                "banner": "https://images.wizbii.com/uploads/tz/pqx/tzpqxzhc4sluz9gckxdhyspa8z649hys_company_banner_large.jpeg",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": 0
                  },
                  "zoom": 0.37313432835821
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p style=\"text-align: justify;\"><a href=\"https://www.frizbiz.com/fr\" target=\"_blank\">Frizbiz</a> est une communaut&eacute; permettant &agrave; des particuliers de se faire aider dans la r&eacute;alisation de&nbsp;<strong>leurs projets</strong> de <a href=\"https://www.frizbiz.com/fr/categories/\" target=\"_blank\">bricolage</a>&nbsp;(Peinture, pose de sol, r&eacute;novations, montage de meuble,...), de <a href=\"https://www.frizbiz.com/fr/categories/jardinier\" target=\"_blank\">jardinage</a>&nbsp;(tonte de pelouse, taille de haie, debroussaillage, &nbsp;am&eacute;nagement,...) ou bien de <strong>trouver de l'aide</strong> pour de simples services (d&eacute;m&eacute;nagement, repassage, m&eacute;nage et bien d'autres). Rejoignez Frizbiz pour <a href=\"https://www.frizbiz.com/fr/users/sign_up?type=jobber\" target=\"_blank\">proposer vos comp&eacute;tences</a> et gagner de l'argent.&nbsp;</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p><strong>VOUS RECHERCHEZ UN MOYEN DE GAGNER DE L'ARGENT ET D'EXPLOITER VOTRE SAVOIR FAIRE?</strong></p>\n<p>Nous sommes &agrave; la recherche de personnes comp&eacute;tentes dans les domaines du bricolage, du jardinage ou autres petits services &agrave; la personne,dans le but d'alimenter notre communaut&eacute;&nbsp;</p>\n<p><a href=\"https://www.frizbiz.com/fr/users/sign_up?type=jobber\" target=\"_blank\">Rejoignez-nous</a> !&nbsp;</p>"
                },
                "tabs": [
                  {
                    "slug": "jeu-concours",
                    "title": "Jeu Concours",
                    "inner_title": "Remporte une Samsung Galaxy TAB !",
                    "description": "<p style=\"text-align: center;\"><strong><img src=\"https://images.wizbii.com/api/image/v1/7vb53rij8fyi1bedcf8v7fy6p9sfoa3s.png\" alt=\"\" /></strong></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\"><strong>Frizbiz : K&eacute;sako? </strong></p>\n<p>Vous &ecirc;tes &eacute;tudiant, salari&eacute; ou encore entrepreneur ? Vous avez du temps et des comp&eacute;tences que vous souhaitez mettre &agrave; disposition des autres ? Devenez jobber et proposez vos services aux particuliers ! Petits boulots, appels d'offres... Bien plus qu&rsquo;un simple site de jobbing, Frizbiz est avant tout une grande communaut&eacute; de clients et jobbers de qualit&eacute; &agrave; travers lesquels on retrouve la confiance, l&rsquo;&eacute;change et le partage.</p>\n<p style=\"text-align: center;\"><strong>Jeu Concours</strong></p>\n<p>Pour cette nouvelle ann&eacute;e, Frizbiz r&eacute;serve une surprise aux membres Wizbii : la plateforme lance un grand Jeu Concours !</p>\n<p>&Agrave; la clef : une&nbsp;<strong>Samsung Galaxy Tab</strong> ! C'est simple comme un clic ;)</p>\n<p><strong>Alors inscris-toi et tente ta chance !</strong></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\"><strong>Le Jeu concours est termin&eacute;. Nous reviendrons vers vous tr&egrave;s vite avec le nom du grand gagnant !</strong></p>\n<h5 style=\"text-align: left;\">&nbsp;</h5>\n<h5 style=\"text-align: left;\"><em>R&eacute;glement disponible <a href=\"https://www.frizbiz.com/fr/p/Frizbiz-Wizbii-jeu-concours\" target=\"_blank\">ICI</a></em></h5>",
                    "online": true
                  }
                ],
                "aliases": [],
                "subsidiaries": [],
                "twitter_username": "FRIZBIZ_COM",
                "website": "https://www.frizbiz.com/fr",
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "https://www.facebook.com/333802493371602/"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/5j/3pj/5j3pjbg7qye1dmn6kiuemmgw1ih6ae2k_company_large@2x.jpeg",
                "high_res_banner": "https://images.wizbii.com/uploads/tz/pqx/tzpqxzhc4sluz9gckxdhyspa8z649hys_company_banner_large@2x.jpeg",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Si vous pensiez qu'aménager une suite parentale était insurmontable, Shake My Blog vous démontre le contraire en 5 astuces faciles à réaliser 💫",
              "tags": [],
              "attachment_link": "http://shakemyblog.fr/deco/5-astuces-transformer-chambre-suite-parentale/",
              "attachment_title": "Si vous pensiez qu'aménager une suite parentale était insurmontable, Shake My Blog vous démontre le contraire en 5 astuces faciles à réaliser 💫",
              "attachment_picture": "https://images.wizbii.com/uploads/ng/kvi/ngkvi5uh9oksboqbljb1l67lu863ibkd_publication_large.png",
              "attachment_picture_width": 800,
              "attachment_picture_height": 450,
              "attachment_content": "[ DECO ] Découvrez 5 astuces pour transformer votre chambre en suite parentale !\nhttp://shakemyblog.fr/deco/5-astuces-transformer-chambre-suite-parentale/\n#deco FrizBiz",
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 7386687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "f55lx8wela80cwgogwcwcgggkgggggg",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T12:48:13+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "f55lx8wela80cwgogwcwcgggkgggggg",
              "external_id": "d64078af78e4027d4c4e6a1dd9d7bd90",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T12:48:13+0000",
              "date_modified": "2018-02-13T13:00:36+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "credit-maritime-littoral-du-sud-ouest",
              "poster": {
                "slug": "credit-maritime-littoral-du-sud-ouest",
                "type": "COMPANY",
                "displayName": "Crédit Maritime Littoral Du Sud-Ouest"
              },
              "company": {
                "_id": "credit-maritime-littoral-du-sud-ouest",
                "slug": "credit-maritime-littoral-du-sud-ouest",
                "date_created": "2016-09-06T10:06:21+0000",
                "date_modified": "2017-01-16T14:13:46+0000",
                "date_client": "2016-11-15T09:00:00+0100",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Crédit Maritime Littoral Du Sud-Ouest",
                "tag_line": "Le littoral a sa banque",
                "is_client": true,
                "employees_number": "0",
                "is_autocomplete": true,
                "industry": "banques",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "LesAmoureuxDuLittoral",
                    "date_created": "2016-11-21T10:55:27+0000",
                    "date_modified": "2016-11-21T10:55:27+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "Youtube",
                    "url": "https://www.youtube.com/channel/UCFYy9j6Pi8SM6XxBKQqnLfQ",
                    "date_created": "2016-11-21T10:55:27+0000",
                    "date_modified": "2016-11-21T10:55:27+0000"
                  }, {
                    "type": "INSTAGRAM",
                    "url": "lesamoureuxdulittoral"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/k9/xd7/k9xd7c84dnit940rh0qpch7oohoiyxub_company_large.png",
                "banner": "https://images.wizbii.com/uploads/96/0js/960jsgbicco593ryghd3j0wy0z6g4844_company_banner_large.jpeg",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": 0
                  },
                  "zoom": 0.5
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p>Cr&eacute;&eacute; par et pour les entrepreneurs, le Cr&eacute;dit Maritime Littoral du Sud-Ouest est une banque coop&eacute;rative de proximit&eacute;, &agrave; taille humaine, affili&eacute;e au Groupe BPCE.</p>\n<p>Le Cr&eacute;dit Maritime soutient et encourage l&rsquo;audace de tous ceux qui entreprennent.&nbsp;</p>\n<p>S&rsquo;engager au service des projets personnels et professionnels de ses clients et soci&eacute;taires, leur donner &laquo; envie d&rsquo;agir &raquo;, et les accompagner dans la dur&eacute;e, tel est l&rsquo;esprit Cr&eacute;dit Maritime.</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "nb_jobs": 0
                },
                "tabs": [],
                "recruiters": [],
                "aliases": [],
                "subsidiaries": [],
                "should_redirect": false,
                "twitter_username": "",
                "website": "http://www.littoralsudouest.creditmaritime.fr",
                "followers": [],
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "https://www.facebook.com/LesAmoureuxDuLittoral"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/k9/xd7/k9xd7c84dnit940rh0qpch7oohoiyxub_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/96/0js/960jsgbicco593ryghd3j0wy0z6g4844_company_banner_large@2x.jpeg",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Port de Capbreton Hossegor par @laurinda40 #lesamoureuxdulittoral #laphotodujour #hossegor #capbreton #sudouest",
              "tags": [
                {
                  "_id": "lesamoureuxdulittoral",
                  "slug": "lesamoureuxdulittoral",
                  "name": "lesamoureuxdulittoral",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:00:36+0000",
                  "date_modified": "2018-02-13T13:00:36+0000"
                }, {
                  "_id": "laphotodujour",
                  "slug": "laphotodujour",
                  "name": "laphotodujour",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:00:36+0000",
                  "date_modified": "2018-02-13T13:00:36+0000"
                }, {
                  "_id": "hossegor",
                  "slug": "hossegor",
                  "name": "hossegor",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:00:36+0000",
                  "date_modified": "2018-02-13T13:00:36+0000"
                }, {
                  "_id": "capbreton",
                  "slug": "capbreton",
                  "name": "capbreton",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:00:36+0000",
                  "date_modified": "2018-02-13T13:00:36+0000"
                }, {
                  "_id": "sudouest",
                  "slug": "sudouest",
                  "name": "sudouest",
                  "type": "TAG",
                  "date_created": "2018-02-13T13:00:36+0000",
                  "date_modified": "2018-02-13T13:00:36+0000"
                }
              ],
              "attachment_title": "Port de Capbreton Hossegor par @laurinda40 #lesamoureuxdulittoral #laphotodujour #hossegor #capbreton #sudouest",
              "attachment_picture": "https://images.wizbii.com/uploads/l1/4gn/l14gnpq1svshlxzljyoe9ieod1m3cgf7_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/l14gnpq1svshlxzljyoe9ieod1m3cgf7.jpeg",
              "attachment_picture_width": 593,
              "attachment_picture_height": 720,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 7780687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "9yrxv3n2ezkk4oo40scwgwgkcgc8804",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T11:57:12+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "9yrxv3n2ezkk4oo40scwgwgkcgc8804",
              "external_id": "cb89463c9100a663240c18f972d3f6fe",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T11:57:12+0000",
              "date_modified": "2018-02-13T12:00:32+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "formaposte-mediterranee",
              "poster": {
                "slug": "formaposte-mediterranee",
                "type": "COMPANY",
                "displayName": "Formaposte Méditerranée"
              },
              "company": {
                "_id": "formaposte-mediterranee",
                "slug": "formaposte-mediterranee",
                "date_created": "2015-07-21T09:21:41+0000",
                "date_modified": "2018-02-02T15:49:54+0000",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Formaposte Méditerranée",
                "tag_line": "Avec Formaposte Méditerranée, Le Groupe La Poste recherche des alternants dans tout le sud de la France",
                "is_client": true,
                "employees_number": "17",
                "is_autocomplete": true,
                "industry": "formation_professionnelle",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "formaposte",
                    "date_created": "2016-12-02T10:32:21+0000",
                    "date_modified": "2016-12-02T10:32:21+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "site internet",
                    "url": "http://www.formaposte-mediterranee.fr",
                    "date_created": "2016-12-02T10:32:21+0000",
                    "date_modified": "2016-12-02T10:32:21+0000"
                  }, {
                    "type": "INSTAGRAM",
                    "url": "formapostemed",
                    "date_created": "2016-12-02T10:32:21+0000",
                    "date_modified": "2016-12-02T10:32:21+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/3d/2f6/3d2f685af389b66b9d88bbe393d464ee_company_large.jpeg",
                "banner": "https://images.wizbii.com/uploads/da/cad/dacad4c167163ea547828ea513eaeb30_company_banner_large.jpeg",
                "banner_link": "http://www.formaposte-mediterranee.fr/",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p><strong>Formaposte M&eacute;diterran&eacute;e est un Centre de Formation par Apprentissage</strong> (CFA) cr&eacute;e en 1996 par Le Groupe La Poste, en r&eacute;gion PACA et Languedoc-Roussillon. Chaque ann&eacute;e, nous accueillons en moyenne <strong>450 alternants du CAP au Master, dans trois fili&egrave;res professionnelles : services &amp; livraisons, commerce &amp;banque, gestion &amp;&nbsp;management.</strong></p>\n<p>Gr&acirc;ce &agrave; notre r&eacute;seau de partenaires &eacute;ducatifs (lyc&eacute;es, universit&eacute;s, &eacute;coles),<strong> nous proposons notre offre de formation en alternance &agrave; Aix/Marseille, Nice, Toulon, Montpellier et N&icirc;mes.</strong></p>\n<p>En fonction du dipl&ocirc;me pr&eacute;par&eacute;, nos apprentis rejoignent un service ou un &eacute;tablissement du Groupe La Poste. Ils sont accompagn&eacute;s par un ma&icirc;tre d'apprentissage et un tuteur pour monter en comp&eacute;tence sur un m&eacute;tier : facteur, charg&eacute;(e) d'accueil, charg&eacute;(e) de client&egrave;le bancaire, charg&eacute;(e) d'affaires entreprises, charg&eacute;(e) de communication, chef d'&eacute;quipe, manager commercial, manager production &amp; distribution, charg&eacute;(e) de mission ressources humaines, contr&ocirc;leur de gestion animateur qualit&eacute;,&hellip;</p>\n<p><iframe style=\"width: 560px; height: 315px;\" src=\"//www.youtube.com/embed/4tmh0bT_RME?controls=0&amp;showinfo=0\" width=\"300\" height=\"150\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p><strong>En 2018, Formaposte M&eacute;diterran&eacute;e et Le Groupe La Poste proposent 500 contrats en alternance du CAP&nbsp;au Master, de Nice &agrave; Perpignan.</strong></p>\n<p>Des contrats en alternance dans une grande diversit&eacute; de m&eacute;tiers (services, commercial B-to-B, bancaire, communication, RH, gestion,&nbsp;management)</p>\n<p>Des formations 100% gratuites pr&eacute;parant &agrave; des dipl&ocirc;mes/Bachelors/titres professionnels reconnus par l'Etat</p>\n<p>Un esprit &laquo; promo &raquo; avec des classes d&eacute;di&eacute;es &agrave; effectifs r&eacute;duits, des s&eacute;minaires d'int&eacute;gration, des temps d'&eacute;change et de partage</p>\n<p>Un accompagnement individualis&eacute; par Formaposte M&eacute;diterran&eacute;e aupr&egrave;s de chacun de nos apprentis.</p>\n<p>94% de r&eacute;ussite au dipl&ocirc;me (toutes fili&egrave;res confondues)</p>\n<p>90 % de nos apprentis ont un emploi 6 mois apr&egrave;s la fin de leur formation</p>\n<p><iframe style=\"width: 560px; height: 315px;\" src=\"//www.youtube.com/embed/xrzOLdcr84E?controls=0&amp;showinfo=0\" width=\"300\" height=\"150\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"></iframe></p>",
                  "nb_jobs": 0
                },
                "tabs": [
                  {
                    "slug": "formation-alternance",
                    "title": "Bac+3 Manager",
                    "inner_title": "Bac+3 Manager",
                    "description": "<h1 style=\"font-weight: 400; text-align: left;\"><strong>Futurs managers, Le Groupe La Poste vous forme en alternance</strong></h1>\n<p style=\"font-weight: 400;\">Titulaire d&lsquo;un bac+ 2, vous avez envie de poursuivre vos &eacute;tudes en alternance et de vous professionnaliser avec une exp&eacute;rience valorisante&nbsp; en management op&eacute;rationnel. Formaposte M&eacute;diterran&eacute;e, centre de formation par apprentissage du Groupe La Poste, vous propose de pr&eacute;parer un &nbsp;titre professionnel bac+3 &laquo;&nbsp;Responsable Performance Industrielle et Innovation &raquo; en partenariat avec le CESI (Aix-en-Provence, Nice, Montpellier).</p>\n<p style=\"font-weight: 400;\">&nbsp;</p>\n<h3 style=\"font-weight: 400; text-align: center;\"><strong>35 contrats en alternance &agrave; pourvoir de Nice &agrave; Perpignan !</strong></h3>\n<p style=\"font-weight: 400; text-align: center;\"><strong><iframe src=\"//www.youtube.com/embed/F1ZAnPNZYfs\" width=\"560\" height=\"314\" allowfullscreen=\"allowfullscreen\"></iframe></strong></p>",
                    "online": true
                  }, {
                    "slug": "bac-2-3-banque",
                    "title": "Bac +2/+3 Banque",
                    "inner_title": "",
                    "description": "<p class=\"p1\"><strong><span class=\"s1\">Vous allez aimer la banque avec Le Groupe La Poste et Formaposte M&eacute;diterran&eacute;e</span></strong></p>\n<p class=\"p1\">&nbsp;</p>\n<p class=\"p2\"><span class=\"s1\">Vous &ecirc;tes attir&eacute;(e) par la banque et avez envie de vous professionnaliser dans le m&eacute;tier de charg&eacute;(e) de client&egrave;le. Vous justifiez d&eacute;j&agrave; d&rsquo;une premi&egrave;re exp&eacute;rience commerciale/relation clients gr&acirc;ce &agrave; vos stages en entreprise.&nbsp;</span><span class=\"s1\">Vous aimez vendre tout en apportant du conseil et en pr&eacute;servant l&rsquo;int&eacute;r&ecirc;t du client.&nbsp;</span><span class=\"s1\">Formaposte M&eacute;diterran&eacute;e, vous propose de pr&eacute;parer le &nbsp;<strong>BTS ou la licence professionnelle banque en alternance.</strong></span></p>\n<p class=\"p1\"><span class=\"s1\">&nbsp;</span></p>\n<p class=\"p1\" style=\"text-align: center;\"><span class=\"s1\"><strong>70 contrats en alternance (BTS + licence pro banque) &agrave; pourvoir de Nice &agrave; Perpignan !</strong></span></p>\n<p class=\"p1\" style=\"text-align: center;\"><a href=\"http://www.formaposte-mediterranee.fr/nos-formations-detail/36/banque-conseiller-de-clientele-cursus-24-mois.html\" target=\"_blank\">D&eacute;couvrir la formation BTS BANQUE - CONSEILLER DE CLIENT&Egrave;LE</a></p>\n<p class=\"p1\" style=\"text-align: center;\"><a href=\"http://www.formaposte-mediterranee.fr/nos-formations-detail/75/assurance-banque-finance.html\" target=\"_blank\">et LICENCE PROFESSIONNELLE ASSURANCE, BANQUE, FINANCE</a></p>\n<p class=\"p1\" style=\"text-align: center;\"><span class=\"s1\"><strong><iframe src=\"//www.youtube.com/embed/iYR1n6utyic\" width=\"560\" height=\"314\" allowfullscreen=\"allowfullscreen\"></iframe></strong></span></p>",
                    "online": false
                  }, {
                    "slug": "cap-facteur",
                    "title": "CAP Facteur",
                    "description": "<p class=\"p1\"><span class=\"s1\"><strong>Le Groupe La Poste forme des facteurs en alternance</strong></span></p>\n<p class=\"p1\"><span class=\"s1\">Vous avez un niveau CAP et une 1&egrave;re exp&eacute;rience professionnelle (stages, jobs). Vous voulez vous r&eacute;orienter et acqu&eacute;rir de l&rsquo;exp&eacute;rience dans le domaine de la relation client et des services. Vous recherchez un m&eacute;tier qui bouge, utile, polyvalent et dans lequel vous pouvez d&eacute;montrer vos qualit&eacute;s relationnelles. En 1 an, Formaposte M&eacute;diterran&eacute;e, Centre de Formation d&rsquo;Apprentis du Groupe La Poste, vous propose de pr&eacute;parer un CAP services &amp; livraison pour vous former au (nouveau&nbsp;!) m&eacute;tier de facteur.</span></p>\n<p class=\"p1\" style=\"text-align: center;\"><span class=\"s1\"><strong>100 contrats en alternance &agrave; pourvoir de Nice &agrave; Perpignan !</strong></span></p>\n<p class=\"p1\" style=\"text-align: center;\"><a href=\"http://www.formaposte-mediterranee.fr/nos-formations-detail/34/distribution-objets-et-services-a-la-clientele.html\" target=\"_blank\"><span class=\"s3\">D&eacute;couvrir la formation&nbsp;<span class=\"s4\">CAP</span></span><span class=\"s2\"> services et livraison</span></a></p>\n<p class=\"p1\" style=\"text-align: center;\"><span class=\"s2\"><iframe src=\"//www.youtube.com/embed/ljUDQ-Y1OEM\" width=\"560\" height=\"314\" allowfullscreen=\"allowfullscreen\"></iframe></span></p>",
                    "online": false
                  }, {
                    "slug": "master-management",
                    "title": "Master Management",
                    "inner_title": "",
                    "description": "<h1 style=\"font-weight: 400;\"><strong>Futurs managers, Le Groupe La Poste vous forme en alternance</strong></h1>\n<p style=\"font-weight: 400;\"><strong>&nbsp;</strong>Titulaire d&lsquo;un bac+ 2, vous avez envie de poursuivre vos &eacute;tudes en alternance et de vous professionnaliser avec une exp&eacute;rience valorisante&nbsp; en management op&eacute;rationnel. Formaposte M&eacute;diterran&eacute;e, centre de formation par apprentissage du Groupe La Poste, vous propose de pr&eacute;parer un &nbsp;titre professionnel bac+3 &laquo;&nbsp;Responsable Performance Industrielle et Innovation &raquo; en partenariat avec le CESI (Aix-en-Provence, Nice, Montpellier).</p>\n<p style=\"font-weight: 400;\">&nbsp;</p>\n<p style=\"font-weight: 400;\"><strong>35 contrats en alternance &agrave; pourvoir de Nice &agrave; Perpignan !</strong></p>\n<p style=\"font-weight: 400;\"><strong><iframe src=\"//www.youtube.com/embed/F1ZAnPNZYfs\" width=\"560\" height=\"314\" allowfullscreen=\"allowfullscreen\"></iframe></strong></p>",
                    "online": false
                  }
                ],
                "recruiters": [],
                "aliases": [],
                "subsidiaries": [],
                "should_redirect": false,
                "website": "http://www.formaposte-mediterranee.fr",
                "followers": [],
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "https://www.facebook.com/formaposte"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/3d/2f6/3d2f685af389b66b9d88bbe393d464ee_company_large@2x.jpeg",
                "high_res_banner": "https://images.wizbii.com/uploads/da/cad/dacad4c167163ea547828ea513eaeb30_company_banner_large@2x.jpeg",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Nous vous attendons nombreux ce samedi 17 février à La Cité des Métiers de Marseille et de Provence-Alpes-Côte d'Azur pour vous informer sur nos 13 cursus en apprentissage du CAP au master. En 2018, Le Groupe La Poste propose près de 250 contrats en alternance dans toute la région PACA.",
              "tags": [],
              "attachment_title": "Nous vous attendons nombreux ce samedi 17 février à La Cité des Métiers de Marseille et de Provence-Alpes-Côte d'Azur pour vous informer sur nos 13 cursus en apprentissage du CAP au master. En 2018, Le Groupe La Poste propose près de 250 contrats en alternance dans toute la région PACA.",
              "attachment_picture": "https://images.wizbii.com/uploads/y6/joj/y6joj7mgcoansy0w7nbfbbtstm6o530i_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/y6joj7mgcoansy0w7nbfbbtstm6o530i.jpeg",
              "attachment_picture_width": 509,
              "attachment_picture_height": 720,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 10841687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "cn66dxbvpog0o8k4w8gsgw004044gcs",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T11:15:49+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "cn66dxbvpog0o8k4w8gsgw004044gcs",
              "external_id": "40846540125651a8744ee0ec6f220250",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T11:15:49+0000",
              "date_modified": "2018-02-13T12:00:17+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "wizbii",
              "poster": {
                "slug": "wizbii",
                "type": "COMPANY",
                "displayName": "Wizbii"
              },
              "company": {
                "_id": "wizbii",
                "slug": "wizbii",
                "date_created": "2015-05-06T08:17:36+0200",
                "date_modified": "2018-02-13T09:54:41+0000",
                "status": "PRIVE",
                "state": "visible",
                "name": "Wizbii",
                "siren": "233 333 333",
                "is_client": true,
                "creation_year": "2010",
                "employees_number": "50",
                "is_autocomplete": true,
                "industry": "internet",
                "location": {
                  "type": "city",
                  "city_place_id": "ChIJb76J1ov0ikcRmFOZbs0QjGE",
                  "display_value": "Grenoble",
                  "city": "Grenoble",
                  "department": "Isère",
                  "department_short": "38",
                  "state": "Rhône-Alpes",
                  "state_short": "RA",
                  "country": "France",
                  "country_short": "FR",
                  "geo": {
                    "lat": 45.188529,
                    "lon": 5.724524
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "wizbii",
                    "date_created": "2016-01-11T15:15:40+0000",
                    "date_modified": "2016-01-11T15:15:40+0000"
                  }, {
                    "type": "TWITTER",
                    "url": "wizbii",
                    "date_created": "2016-01-11T15:15:40+0000",
                    "date_modified": "2016-01-11T15:15:40+0000"
                  }, {
                    "type": "INSTAGRAM",
                    "url": "wizbii",
                    "date_created": "2016-01-11T15:15:40+0000",
                    "date_modified": "2016-01-11T15:15:40+0000"
                  }, {
                    "type": "BLOG",
                    "url": "http://laruche.wizbii.com",
                    "date_created": "2016-01-11T15:15:40+0000",
                    "date_modified": "2016-01-11T15:15:40+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/bu/nty/buntynaf5kmmqswqqb58ixcwislrpxdb_company_large.png",
                "banner": "https://images.wizbii.com/uploads/f4/d35/f4d35aa1fa44638ea81557b139619a04_company_banner_large.png",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p class=\"h3\"><strong>Qui sommes-nous ?</strong></p>\n<p>Wizbii est la 1&egrave;re plateforme professionnelle pour l'emploi et l'entrepreneuriat des jeunes.</p>\n<p class=\"h3\"><strong>Notre mission :</strong></p>\n<p>\"Favoriser l'emploi et l'entrepreneuriat des jeunes autour du monde\"</p>\n<p>En 2010, Wizbii voit le jour pour que les jeunes puissent se rencontrer, donner vie &agrave; des projets ensemble ou trouver un emploi.</p>\n<p><strong>La Wiz'Team</strong> compte aujourd'hui 65 collaborateurs passionn&eacute;s pr&eacute;sents sur trois bureaux &agrave; Grenoble, Paris et Pau.<br /><strong>Nos valeurs :</strong> Exemplarit&eacute; et D&eacute;passement de soi, Initiative et Cr&eacute;ativit&eacute;, Passion et Optimisme, Humilit&eacute; et Entraide.</p>\n<p>En quelques chiffres, Wizbii c'est plus d'<strong>1 Million de&nbsp;membres</strong> avec une croissance de 2 000 nouveaux membres/jour, 1500 projets de start-up n&eacute;s sur le r&eacute;seau, et 10 000 entreprises qui recrutent leurs talents gr&acirc;ce &agrave; notre plateforme.</p>\n<p>Labellis&eacute;e Frenchtech et Talent INPI, Wizbii a r&eacute;alis&eacute; une lev&eacute;e de fonds de 3 millions d'euros en septembre 2016.</p>\n<p>Aujourd'hui, Wizbii est le m&eacute;dia social professionnel qui conna&icirc;t la plus forte acquisition de nouveaux membres en France sur le segment des 18-30 ans.</p>\n<p>Nous avons des projets excitants &agrave; confier &agrave; nos futurs talents. Vous partagez notre envie ? <strong>Et si c'&eacute;tait vous ?</strong></p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p class=\"h3\"><strong>Wizbii recherche ses futurs talents&nbsp;</strong></p>\n<p class=\"h3\"><strong><img src=\"https://images.wizbii.com/api/image/v1/aysnnv40gpg7e05fqyhgmfd7vp4fsn1o.jpeg\" /></strong></p>\n<p>D&eacute;veloppeurs, Marketeux, Commerciaux...</p>\n<p>L'univers du Web vous passionne et l'ambiance Start-Up vous s&eacute;duit?</p>\n<p>Avec une moyenne d'&acirc;ge de 28 ans, notre &eacute;quipe est compos&eacute;e de 65 collaborateurs. Nous favorisons la prise d'initiative, l'engagement et la cr&eacute;ativit&eacute;. <br />Bas&eacute;s &agrave; Grenoble, Paris et Pau, la Wiz'team travaille en open space pour mieux avancer ensemble. Si vous &ecirc;tes passionn&eacute; et voulez avoir des responsabilit&eacute;s, Wizbii est l'entreprise qu'il vous faut !</p>\n<p>Wizbii recrute en ce moment en CDD, CDI et stages. Nous privil&eacute;gions les stages de fin d'&eacute;tudes avec r&eacute;elle possibilit&eacute; d'embauche en CDI. Nous aimons garder les talents que nous identifions !</p>\n<p>A tr&egrave;s vite ;)</p>",
                  "nb_jobs": 5
                },
                "tabs": [
                  {
                    "slug": "jobrun-grenoble",
                    "title": "JobRun Grenoble",
                    "description": "<h2>JobRun, 1er&nbsp;run network pour la carri&egrave;re des jeunes</h2>\n<p>JobRun est le 1er run network pour la carri&egrave;re des jeunes, une&nbsp;initiative pour <strong>aider les 18-30 ans</strong>&nbsp;&agrave; accroitre leur r&eacute;seau professionnel dans un cadre <strong>ludique</strong>,&nbsp;<strong>convivial</strong> et bien s&ucirc;r<strong> sportif !&nbsp;</strong></p>\n<p><strong><strong>JobRun Grenoble&nbsp;a lieu le 18&nbsp;mars &agrave; 11H au Parc &icirc;le d'Amour.</strong></strong></p>\n<h3><img src=\"https://images.wizbii.com/api/image/v1/mb1h9jr4ucnbvqf1n4nilgdt0be068ju.png\" alt=\"\" />- D&eacute;veloppe ton r&eacute;seau</h3>\n<p>Etudiants et professionnels courent ensemble pour &eacute;changer retours d'exp&eacute;riences et bons contacts.</p>\n<p>JobRun, c'est une fa&ccedil;on unique d'augmenter ton cercle de connaissances dans ta ville et de partager un bon moment autour des valeurs de Wizbii&nbsp;: l'entraide et le d&eacute;passement de soi.</p>\n<h3>- B&eacute;n&eacute;ficie de conseils et contacts</h3>\n<p>Echange de fa&ccedil;on d&eacute;contract&eacute;e&nbsp;sur ton orientation et ta carri&egrave;re avec des personnes d'horizons diff&eacute;rents. &nbsp;</p>\n<h4>-&gt; Des professionnels de grandes entreprises et start-up</h4>\n<p>Les grandes entreprises et start-up de Grenoble ont r&eacute;pondu OUI au JobRun, vous pourrez y retrouver par exemple<strong> HP Inc, Leroy Merlin, Schneider Electric, EDF, Hipcom, j'AACc&eacute;l&egrave;re, Wizbii.</strong>... et bien d'autres !</p>\n<p><strong>Ces entreprises auront de belles opportunit&eacute;s de jobs ou stages !&nbsp;</strong>&nbsp;</p>\n<h3>- Sois accompagn&eacute;(e) par des coachs</h3>\n<p>Les meilleurs coachs t'accompagnent sur ce running ! Echauffement, exercices, motivation... Tout sera fait pour que la course se d&eacute;roule dans les meilleurs conditions.Benjamin Brun,&nbsp;<a title=\"marion\" href=\"https://www.facebook.com/m.gaypageon/\" target=\"_blank\" rel=\"noopener noreferrer\">Marion Gaypageon</a>&nbsp; et Christophe Bouille seront les Rockets qui vont t'accompagner !&nbsp;</p>\n<p class=\"p2\">&nbsp;</p>\n<h3><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://images.wizbii.com/api/image/v1/k8zbez2xunbgosnc0z1ejn1lopz2v2ge.png\" alt=\"\" width=\"517\" height=\"291\" /></h3>\n<p>&nbsp;</p>\n<p><strong>Ev&egrave;nement gratuit et sur inscription (dans la limite des places disponibles).</strong></p>",
                    "online": false
                  }, {
                    "slug": "conference",
                    "title": "Conférence",
                    "inner_title": "",
                    "description": "<h2 class=\"h1-conference\">Conf&eacute;rence au Salon des Entrepreneurs PARIS le 1er F&eacute;vrier &agrave; 9H30</h2>\n<h2 style=\"text-align: center;\"><a href=\"https://wiz.bi/conf&eacute;rencewizbiiSDE\" target=\"_blank\">Je m'inscris</a></h2>\n<h3 class=\"h1-conference\">Lever des fonds : comment convaincre un investisseur ?</h3>\n<div class=\"lead\"><strong>Quand lever des fonds ? </strong></div>\n<div class=\"lead\"><strong>Vers qui se tourner ? </strong></div>\n<div class=\"lead\"><strong>Comment prendre contact ? </strong></div>\n<div class=\"lead\"><strong>R&eacute;ussir son pitch. </strong></div>\n<div class=\"lead\"><strong>Comment n&eacute;gocier sa term sheet ? </strong></div>\n<div class=\"lead\">&nbsp;</div>\n<p>Wizbii a r&eacute;uni 5 figures fran&ccedil;aises de l&rsquo;entrepreneuriat et de la finance au Salon des Entrepreneurs pour &eacute;changer sur le sujet.&nbsp;</p>\n<p><a href=\"https://wiz.bi/conf&eacute;rencewizbiiSDE\" target=\"_blank\">Inscrivez-vous gratuitement juste ici </a>d&egrave;s maintenant !&nbsp;</p>\n<p><img src=\"https://images.wizbii.com/api/image/v1/rufferp5ybsn1b8lnt47ojefv0lzfa1y.png\" alt=\"\" />&nbsp;</p>",
                    "online": false
                  }, {
                    "slug": "jobrun-lyon",
                    "title": "JobRun Lyon",
                    "description": "<h2>JobRun, 1er&nbsp;run network pour la carri&egrave;re des jeunes</h2>\n<p>JobRun est le 1er run network pour la carri&egrave;re des jeunes, une&nbsp;initiative pour <strong>aider les 18-30 ans</strong>&nbsp;&agrave; accroitre leur r&eacute;seau professionnel dans un cadre <strong>ludique</strong>,&nbsp;<strong>convivial</strong> et bien s&ucirc;r<strong> sportif !&nbsp;</strong></p>\n<p><strong>JobRun Lyon a lieu le 25 mars &agrave; 11H au Parc de la T&ecirc;te d'Or.</strong></p>\n<p><img src=\"https://images.wizbii.com/api/image/v1/salwxmc1egqlzepu3y234zhhwwji591f.png\" alt=\"\" /></p>\n<h3>- D&eacute;veloppe ton r&eacute;seau</h3>\n<p>Etudiants et professionnels courent ensemble pour &eacute;changer retours d'exp&eacute;riences et bons contacts.</p>\n<p>JobRun, c'est une fa&ccedil;on unique d'augmenter ton cercle de connaissances dans ta ville et de partager un bon moment autour&nbsp;des valeurs de Wizbii&nbsp;: l'entraide et le d&eacute;passement de soi.</p>\n<h3>- B&eacute;n&eacute;ficie de conseils et contacts</h3>\n<p>Echange de fa&ccedil;on d&eacute;contract&eacute;e&nbsp;sur ton orientation et ta carri&egrave;re avec des personnes d'horizons diff&eacute;rents. &nbsp;</p>\n<h4>-&gt; Des professionnels de grandes entreprises et start-up</h4>\n<p>Les entreprises&nbsp;de Lyon&nbsp;ont r&eacute;pondu OUI au JobRun (SMA France, Urban Linker, Tilkee, Digischool group...)</p>\n<p><strong>Ces entreprises auront pour la plupart de belles opportunit&eacute;s de jobs ou stages !&nbsp;</strong>&nbsp;</p>\n<h3>- Sois accompagn&eacute;(e) par des coachs</h3>\n<p>Des&nbsp;coachs certifi&eacute;s <a href=\"http://www.bemysport.fr/\" target=\"_blank\">BeMySport </a>t'accompagnent sur ce running !&nbsp;<span class=\"s1\"><strong>Les&nbsp;coachs BeeFit BeMySport</strong>, sont&nbsp;des experts dipl&ocirc;m&eacute;s du sport qu'ils enseignent. S&eacute;lectionn&eacute;s&nbsp;et&nbsp;certifi&eacute;s&nbsp;pour leurs&nbsp;comp&eacute;tences sportives mais aussi humaines&nbsp;: ils sauront &ecirc;tre &agrave; ton &eacute;coute et te conseiller pour r&eacute;pondre &agrave; 100% &agrave; tes envies.&nbsp;</span></p>\n<p><strong>Ev&egrave;nement gratuit et sur inscription (dans la limite des places disponibles).&nbsp;</strong></p>\n<p>&nbsp;</p>\n<p>%form%</p>",
                    "online": false
                  }, {
                    "slug": "jobrun-paris",
                    "title": "JobRun",
                    "description": "<h2>JobRun, 1er&nbsp;run network pour la carri&egrave;re des jeunes</h2>\n<p>JobRun est le 1er run network pour l'emploi des jeunes, une&nbsp;initiative pour <strong>aider les 18-30 ans</strong>&nbsp;&agrave; accroitre leur r&eacute;seau professionnel et &agrave; trouver un stage / job dans un cadre <strong>ludique</strong>,&nbsp;<strong>convivial</strong> et bien s&ucirc;r<strong> sportif !&nbsp;</strong></p>\n<p><strong><strong>Pour &ecirc;tre inform&eacute;(e) des prochaines &eacute;ditions, envoie tes coordonn&eacute;es &agrave; Sophie : <a href=\"mailto:sophie.lebel@wizbii.com\">sophie.lebel@wizbii.com</a>&nbsp;</strong></strong></p>\n<p style=\"padding-left: 30px;\"><strong><strong><iframe src=\"//www.youtube.com/embed/RPpxYtMaDy8\" width=\"560\" height=\"314\" allowfullscreen=\"allowfullscreen\"></iframe></strong></strong></p>\n<h3>&nbsp;</h3>\n<h3>&nbsp;</h3>",
                    "online": true
                  }
                ],
                "aliases": [
                  "wizbiisas", "wizbii-sas", "wizbii2", "wizbiiiii"
                ],
                "subsidiaries": [],
                "should_redirect": false,
                "twitter_username": "wizbii_FR",
                "website": "https://www.wizbii.com",
                "followers": [],
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "http://www.facebook.com/wizbii"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/bu/nty/buntynaf5kmmqswqqb58ixcwislrpxdb_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/f4/d35/f4d35aa1fa44638ea81557b139619a04_company_banner_large@2x.png",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Wizbii et le Crédit agricole Champagne Bourgogne t’invitent à leur 2ème Job Dating  le 14 mars  à Troyes : jobs, stages, alternances… 10 entreprises de la région seront présentes pour recruter ! Infos et inscriptions :  https://wiz.bi/emploitroyesF",
              "tags": [],
              "attachment_title": "Wizbii et le Crédit agricole Champagne Bourgogne t’invitent à leur 2ème Job Dating  le 14 mars  à Troyes : jobs, stages, alternances… 10 entreprises de la région seront présentes pour recruter ! Infos et inscriptions :  https://wiz.bi/emploitroyesF",
              "attachment_picture": "https://images.wizbii.com/uploads/x6/v25/x6v2551jsnocdz80wh643sry52vzizas_publication_large.png",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/x6v2551jsnocdz80wh643sry52vzizas.png",
              "attachment_picture_width": 720,
              "attachment_picture_height": 376,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 13324687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "14bemut33j8gg4c4okc8ckk8k8owcc4",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T11:07:12+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "14bemut33j8gg4c4okc8ckk8k8owcc4",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T11:07:12+0000",
              "date_modified": "2018-02-13T11:07:13+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "credit-agricole-du-morbihan",
              "poster": {
                "slug": "credit-agricole-du-morbihan",
                "type": "COMPANY",
                "displayName": "Crédit Agricole Du Morbihan"
              },
              "company": {
                "_id": "credit-agricole-du-morbihan",
                "slug": "credit-agricole-du-morbihan",
                "guid": "1528446",
                "date_created": "2013-11-25T10:28:59+0100",
                "date_modified": "2018-01-12T09:19:21+0000",
                "date_client": "2017-06-16T09:00:00+0200",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Crédit Agricole Du Morbihan",
                "tag_line": "Nous vous mettons en relation avec des entreprises qui recrutent sur le territoire",
                "is_client": true,
                "employees_number": "1100",
                "is_autocomplete": true,
                "industry": "banques",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "AUTRE",
                    "title": "Site de recrutement",
                    "url": "http://www.ca-bretagne-recrute.fr/html/front/index.php",
                    "date_created": "2017-08-02T09:49:03+0000",
                    "date_modified": "2017-08-02T09:49:03+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "LinkedIn",
                    "url": "https://www.linkedin.com/company-beta/6705659/",
                    "date_created": "2017-08-02T09:49:03+0000",
                    "date_modified": "2017-08-02T09:49:03+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "Viadeo",
                    "url": "http://fr.viadeo.com/fr/company/credit-agricole-en-bretagne",
                    "date_created": "2017-08-02T09:49:03+0000",
                    "date_modified": "2017-08-02T09:49:03+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "YouTube",
                    "url": "https://www.youtube.com/channel/UCA-Q1UmEKYY85f649zX3AGw",
                    "date_created": "2017-08-02T09:49:03+0000",
                    "date_modified": "2017-08-02T09:49:03+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/g4/7py/g47pygu0dfr8dmxo9t3macod08udzfzz_company_large.png",
                "banner": "https://images.wizbii.com/uploads/uv/zos/uvzosvf5wfix5p1ah36a2tr1bn1g6spe_company_banner_large.png",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<h3>Entit&eacute; de rattachement</h3>\n<p>Le groupe Cr&eacute;dit Agricole est le premier financeur de l'&eacute;conomie fran&ccedil;aise et l'un des tout premiers acteurs bancaires en Europe.</p>\n<p>Le <strong>Cr&eacute;dit Agricole du Morbihan</strong> fait partie des 39 Caisses r&eacute;gionales du Cr&eacute;dit Agricole. Compos&eacute;e de plus de 90 points de vente, 400 000 clients et pr&egrave;s de 1 050 collaborateurs &agrave; la disposition de ces derniers, la Caisse du Morbihan s'impose comme un <strong>acteur &eacute;conomique majeur </strong>du territoire, <strong>leader bancaire</strong> sur son march&eacute;.</p>\n<p>Vous partagez nos valeurs mutualistes de proximit&eacute;, responsabilit&eacute; et solidarit&eacute;, Rejoignez-nous !</p>\n<p>&nbsp;</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p>Le <strong>Cr&eacute;dit Agricole du Morbihan</strong> recherche les talents de demain pour accompagner son d&eacute;veloppement. Notre &eacute;quipe intervient sur le sourcing et la recherche de candidats motiv&eacute;s, souhaitant construire un <strong>parcours de carri&egrave;re &eacute;volutif</strong> et <strong>pr&ecirc;ts &agrave; relever les challenges</strong> d'une banque r&eacute;gionale de proximit&eacute; tourn&eacute;e vers le multicanal.</p>\n<p>&nbsp;</p>\n<p>Titulaire d'un Bac + 3 &agrave; Bac + 5,&nbsp;</p>\n<ul>\n<li>Vous avez le go&ucirc;t durable de la relation client&egrave;le,&nbsp;</li>\n<li>Vous avez la fibre commerciale,&nbsp;</li>\n<li>\n<p>Vous recherchez le challenge&nbsp;et les succ&egrave;s d'&eacute;quipe,&nbsp;</p>\n</li>\n</ul>\n<p>Votre profil nous int&eacute;resse !&nbsp;</p>"
                },
                "tabs": [
                  {
                    "slug": "job-meeting",
                    "title": "1er Stage 1er Job",
                    "inner_title": "L'initiative pour l'emploi des jeunes!",
                    "description": "<p><img src=\"https://images.wizbii.com/api/image/v1/31t5ia5mcbnujudc1mu4lc17yayak727.jpeg\" alt=\"\" /></p>\n<p>&nbsp;</p>\n<p style=\"text-align: center;\"><strong>L&rsquo;emploi des jeunes sur notre territoire ? Une v&eacute;ritable priorit&eacute; !</strong></p>\n<p>En 2017, le Cr&eacute;dit Agricole Morbihan&nbsp;s&rsquo;engage dans une initiative de taille : accompagner les 18-30 ans dans le lancement de leur carri&egrave;re &agrave; travers&nbsp;1er Stage 1er Job.</p>\n<p><em>Des offres d&rsquo;emploi, de stage et d&rsquo;alternance</em></p>\n<p>Au programme, un large panel de jobs...et pourquoi pas le v&ocirc;tre ! En partenariat avec Wizbii, le Cr&eacute;dit Agricole Morbihan vous permet de postuler aux offres diffus&eacute;es par des entreprises de votre r&eacute;gion : du CDD au CDI en passant par le stage ou encore l&rsquo;alternance, retrouvez ces annonces dans la rubrique &ldquo;Recrutement&rdquo; !</p>\n<p><em>Des &eacute;v&eacute;nements de recrutement originaux</em></p>\n<p><strong>1er Stage 1er Job</strong>, c&rsquo;est aussi l&rsquo;occasion d&rsquo;&eacute;changer avec ces recruteurs autour d&rsquo;un verre ! Que diriez-vous de passer votre entretien dans un cadre informel et convivial ? Inscrivez-vous &agrave; l&rsquo;un de nos Job Dating !&nbsp;Pour cela, rien de plus simple : rendez-vous directement sur l&rsquo;onglet &ldquo;Job Dating&rdquo; et abonnez-vous &agrave; notre page &ldquo;Entreprise&rdquo; pour &ecirc;tre tenu au courant des prochains &eacute;v&eacute;nements.</p>",
                    "online": true
                  }, {
                    "slug": "job-dating",
                    "title": "Job Dating 21/03/18",
                    "inner_title": "Venez rencontrer les recruteurs de votre région!",
                    "description": "<p>&nbsp;<img src=\"https://images.wizbii.com/api/image/v1/zkgys3fcw9k30zsl4m4dlq7vg6mpng08.png\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><em>Vous &ecirc;tes &agrave; la recherche d'un emploi, d'un stage ou d'une alternance?</em></p>\n<p style=\"text-align: center;\"><em>Un&nbsp;<strong>Job Dating</strong>&nbsp;rassemblant 10&nbsp;entreprises locales&nbsp;est organis&eacute; &agrave;<strong> Lorient le 21 mars prochain&nbsp;!</strong></em></p>\n<p style=\"text-align: center;\"><em>Pour vous inscrire :</em></p>\n<p style=\"text-align: center;\"><em>%form%</em></p>\n<p style=\"text-align: center;\">&nbsp;</p>",
                    "online": true
                  }
                ],
                "aliases": [],
                "subsidiaries": [],
                "website": "http://www.ca-morbihan.fr",
                "followed": false,
                "high_res_logo": "https://images.wizbii.com/uploads/g4/7py/g47pygu0dfr8dmxo9t3macod08udzfzz_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/uv/zos/uvzosvf5wfix5p1ah36a2tr1bn1g6spe_company_banner_large@2x.png",
                "options": ["activate_partners"],
                "partner_banner": "dyurrt5asgjwqoliiwjxiei3vwhuyo6a.png",
                "partner_of": "",
                "partners_validator_emails": []
              },
              "content": "J-4 avant notre jobdating spécial alternance !\nDe niveau bac+3 à bac+5, dans les métiers de la finance ou de la gestion en alternance, venez-nous rencontrer le samedi 17 février à notre siège de Vannes !",
              "tags": [
                {
                  "_id": "jobdating",
                  "slug": "jobdating",
                  "name": "jobdating",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:07:13+0000",
                  "date_modified": "2018-02-13T11:07:13+0000"
                }, {
                  "_id": "2018",
                  "slug": "2018",
                  "name": "2018",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:07:13+0000",
                  "date_modified": "2018-02-13T11:07:13+0000"
                }, {
                  "_id": "alternance",
                  "slug": "alternance",
                  "name": "alternance",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:07:13+0000",
                  "date_modified": "2018-02-13T11:07:13+0000"
                }
              ],
              "attachment_picture": "https://images.wizbii.com/uploads/ev/vug/evvugdyg8epslg2axetu5nere31a8mhk_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/cb1b6jl27cxcedqn1c1e0mkqsoky3rps.jpeg",
              "attachment_picture_width": 1346,
              "attachment_picture_height": 458,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 13841687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "rm729dzcrrk8socs00kwg0ss488g4ck",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T10:58:46+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "rm729dzcrrk8socs00kwg0ss488g4ck",
              "external_id": "eb3b057e60e4c132a4df5ce4ad4072e1",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T10:58:46+0000",
              "date_modified": "2018-02-13T11:00:31+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "credit-agricole-ile-de-france",
              "poster": {
                "slug": "credit-agricole-ile-de-france",
                "type": "COMPANY",
                "displayName": "Crédit Agricole d'Ile-de-France"
              },
              "company": {
                "_id": "credit-agricole-ile-de-france",
                "slug": "credit-agricole-ile-de-france",
                "date_created": "2015-05-27T14:51:57+0200",
                "date_modified": "2017-10-02T15:17:25+0000",
                "date_client": "2015-07-02T09:00:00+0200",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Crédit Agricole d'Ile-de-France",
                "tag_line": "La banque assurance coopérative et active en Ile-de-France !",
                "is_client": true,
                "employees_number": "3600",
                "is_autocomplete": true,
                "industry": "banques",
                "location": {
                  "type": "city",
                  "city_place_id": "ChIJD7fiBh9u5kcRYJSMaMOCCwQ",
                  "display_value": "Paris",
                  "city": "Paris",
                  "department": "Paris",
                  "department_short": "75",
                  "state": "Île-de-France",
                  "state_short": "IDF",
                  "country": "France",
                  "country_short": "FR",
                  "geo": {
                    "lat": 48.856614,
                    "lon": 2.3522219
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "CreditAgricoleIDF"
                  }, {
                    "type": "TWITTER",
                    "url": "CA_IDF"
                  }, {
                    "type": "AUTRE",
                    "title": "Site Web",
                    "url": "http://www.jeunes.ca-paris.fr/"
                  }, {
                    "type": "VIADEO",
                    "url": "http://www.viadeo.com/fr/company/credit-agricole-d-ile-de-france1"
                  }, {
                    "type": "GOOGLE_PLUS",
                    "url": "http://plus.google.com/b/113121102109410911483/"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/c5/807/c5807bf6d738722381a18505e19df587_company_large.png",
                "banner": "https://images.wizbii.com/uploads/dk/6a5/dk6a5sgcrbvspp5enlsa88glpfzt0k3e_company_banner_large.png",
                "banner_link": "http://www.jeunes.ca-paris.fr/",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p class=\"h3\"><strong><br />La Banque ACTIVE</strong></p>\n<p>Acteur majeur du d&eacute;veloppement de son territoire, le Cr&eacute;dit Agricole d'Ile-de-France accompagne chaque jour les Franciliens dans la r&eacute;alisation de leurs projets et finance l'&eacute;conomie r&eacute;elle de la r&eacute;gion capitale.</p>\n<p>Banquier et assureur pr&eacute;sent sur tous les march&eacute;s de la banque de d&eacute;tail, le Cr&eacute;dit Agricole d'Ile-de-France place la satisfaction de ses clients au c&oelig;ur de ses enjeux et fonde son d&eacute;veloppement sur l'innovation relationnelle, produits et technologique et sur le professionnalisme de ses 3 600 collaborateurs.</p>\n<p>&nbsp;</p>\n<p><strong>6 bonnes raisons de venir nous rejoindre :</strong></p>\n<p><img src=\"https://assets.wizbii.com/api/image/v1/65dfaee40d7e1d6d92840497cfcaf1ec.png?size=company_description_banner_medium\" srcset=\"https://assets.wizbii.com/api/image/v1/65dfaee40d7e1d6d92840497cfcaf1ec.png?size=company_description_banner_medium@2x 2x\" alt=\"\" /></p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p class=\"h3\"><strong><br /></strong><img src=\"https://assets.wizbii.com/api/image/v1/4b8f9ad4539a57e604e1d12a8538efb2.jpeg?size=company_description_banner_medium\" srcset=\"https://assets.wizbii.com/api/image/v1/4b8f9ad4539a57e604e1d12a8538efb2.jpeg?size=company_description_banner_medium@2x 2x\" alt=\"\" /></p>\n<p class=\"h3\"><strong>Nous recherchons des Talents en Ile-de-France !</strong></p>\n<p>Etudiants ou jeunes dipl&ocirc;m&eacute;s d'une grande &eacute;cole ou d'une universit&eacute;, rejoignez les 3600 collaborateurs du Cr&eacute;dit Agricole d'Ile-de-France, 1&egrave;re Caisse r&eacute;gionale du Cr&eacute;dit Agricole et acteur majeur de l'&eacute;conomie francilienne.</p>\n<p>Vous accordez de l'importance &agrave; votre &eacute;volution professionnelle ? Nous aussi !<br /> Au Cr&eacute;dit Agricole d'Ile-de-France, vous pouvez &ecirc;tre l'acteur d'un parcours professionnel riche en exp&eacute;riences et d&eacute;couvertes.<br /> &Agrave; l'&eacute;coute des projets et des motivations de nos collaborateurs, nous agissons pour assurer une gestion dynamique de leur &eacute;volution. <br /> &Agrave; la cl&eacute; : de r&eacute;elles opportunit&eacute;s de mobilit&eacute; interne pour vous permettre d'&eacute;voluer.</p>\n<p>D&eacute;couvrez en image notre politique RH et nos processus de recrutement : <a href=\"http://bit.ly/1IFF30w\">http://bit.ly/1IFF30w</a></p>\n<p class=\"h3\"><strong>Suivez sur cette page notre actualit&eacute; recrutement, participez &agrave; nos Jobdatings et consultez nos offres !</strong></p>"
                },
                "tabs": [
                  {
                    "slug": "job-dating",
                    "title": "Job Dating",
                    "inner_title": "Recrutement conseillers",
                    "description": "<p><img src=\"https://assets.wizbii.com/api/image/v1/9a226c8811720fd8b0b77312c7e05d77.jpeg?size=company_description_banner_medium\" srcset=\"https://assets.wizbii.com/api/image/v1/9a226c8811720fd8b0b77312c7e05d77.jpeg?size=company_description_banner_medium@2x 2x\" alt=\"\" /></p>",
                    "online": true
                  }
                ],
                "aliases": [
                  "credit-agricole-ile-de-france", "credit-agricole-d-ile-de-france"
                ],
                "subsidiaries": [],
                "should_redirect": false,
                "url_custom": "",
                "twitter_username": "CA_IDF",
                "website": "https://www.ca-paris.fr/",
                "followers": [],
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "http://www.facebook.com/CreditAgricoleIDF"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/c5/807/c5807bf6d738722381a18505e19df587_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/dk/6a5/dk6a5sgcrbvspp5enlsa88glpfzt0k3e_company_banner_large@2x.png",
                "options": ["activate_partners"],
                "partner_banner": "51kozrcf4gsw14wv0ho2olom7dj60jf2.png",
                "partners_validator_emails": []
              },
              "content": "[Voix Off] Avec 370 recrutements en 2017, nous continuons d'investir dans les Talents. \n100% humain 100% digital",
              "tags": [],
              "attachment_title": "[Voix Off] Avec 370 recrutements en 2017, nous continuons d'investir dans les Talents. \n100% humain 100% digital",
              "attachment_picture": "https://images.wizbii.com/uploads/kw/xnm/kwxnmgbr4j0d394exg79wvzisp3d8u95_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/kwxnmgbr4j0d394exg79wvzisp3d8u95.jpeg",
              "attachment_picture_width": 720,
              "attachment_picture_height": 378,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 14347687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "k4o7i8yashswooogsg8k0o04kw4040o",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T10:43:55+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "k4o7i8yashswooogsg8k0o04kw4040o",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T10:43:55+0000",
              "date_modified": "2018-02-13T10:43:55+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "ahsp-togo",
              "poster": {
                "slug": "ahsp-togo",
                "type": "COMPANY",
                "displayName": "Ahsp-Togo"
              },
              "company": {
                "_id": "ahsp-togo",
                "slug": "ahsp-togo",
                "date_created": "2018-01-25T15:25:12+0000",
                "date_modified": "2018-02-02T14:58:04+0000",
                "status": "PRIVE",
                "state": "visible",
                "name": "Ahsp-Togo",
                "tag_line": "humanitaire.ahsp.togo@gmail.com",
                "is_client": false,
                "employees_number": "12",
                "is_autocomplete": true,
                "industry": "humanitaire",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "https://www.facebook.com/pg/Association-AHSP-Togo-177803172343682",
                    "date_created": "2018-01-25T16:13:27+0000",
                    "date_modified": "2018-01-25T16:13:27+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/r0/j9d/r0j9dvs0z4jln206j7u6dzxqo5eyyybl_company_large.png",
                "banner": "https://images.wizbii.com/uploads/26/92x/2692xn37niynqdsoictl5o1aie7ktzq2_company_banner_large.jpeg",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": -343
                  },
                  "zoom": 1.25
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "Ahsp-togo est une association à but non lucratif et de volontariat basant ses activités sur la coopération et la solidarité réciproques, elle intervient dans divers domaines notamment: la santé, l'éducation, l'environnement, l'art et la culture "
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p>Notre recrutement est disponible &agrave; tout le monde sans distinction de race, de culture&nbsp; ni de religion</p>",
                  "nb_jobs": 0
                },
                "tabs": [],
                "recruiters": [],
                "aliases": [],
                "subsidiaries": [],
                "should_redirect": false,
                "website": "http://www.asso-ahsp-togo.onlc.fr",
                "followers": [],
                "followed": false,
                "high_res_logo": "https://images.wizbii.com/uploads/r0/j9d/r0j9dvs0z4jln206j7u6dzxqo5eyyybl_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/26/92x/2692xn37niynqdsoictl5o1aie7ktzq2_company_banner_large@2x.jpeg",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Osez une mission humanitaire,  un stage avec l'association  AHSP-TOGO\nAkpé nami.  ( merci en langue locale )",
              "tags": [
                {
                  "_id": "humanitaire-stage-solidaire",
                  "slug": "humanitaire-stage-solidaire",
                  "name": "Humanitaire,  stage solidaire ,",
                  "type": "TAG",
                  "date_created": "2018-02-13T10:43:55+0000",
                  "date_modified": "2018-02-13T10:43:55+0000"
                }
              ],
              "attachment_picture": "https://images.wizbii.com/uploads/y3/hay/y3hay9vytm81p02vrqcp2ebhjmginw5t_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/n5w8ix1ijdgjxol1y6i00l4i3j26unw6.jpeg",
              "attachment_picture_width": 1071,
              "attachment_picture_height": 599,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 15238687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "fyywiiud0f4k4wwgg808c84gkwksw4s",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T10:38:05+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "fyywiiud0f4k4wwgg808c84gkwksw4s",
              "external_id": "d43627759a6b751ae6d346a30ff26cc0",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T10:38:05+0000",
              "date_modified": "2018-02-13T11:00:23+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "credit-agricole",
              "poster": {
                "slug": "credit-agricole",
                "type": "COMPANY",
                "displayName": "Crédit Agricole",
                "guid": "390261"
              },
              "company": {
                "_id": "credit-agricole",
                "slug": "credit-agricole",
                "guid": "390261",
                "date_created": "2012-11-20T12:51:46+0100",
                "date_modified": "2018-02-06T14:16:31+0000",
                "status": "PUBLIC",
                "state": "visible",
                "name": "Crédit Agricole",
                "tag_line": "Nous vous mettons en relation avec des entreprises qui recrutent sur le territoire",
                "is_client": true,
                "is_autocomplete": true,
                "industry": "banques",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "TWITTER",
                    "title": "Twitter",
                    "url": "https://twitter.com/CreditAgricole"
                  }, {
                    "type": "FACEBOOK",
                    "title": "Facebook",
                    "url": "https://www.facebook.com/CreditAgricole"
                  }, {
                    "type": "LINKEDIN",
                    "title": "LinkedIn",
                    "url": "https://fr.linkedin.com/company/credit-agricole"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/e0/878/e0878c99f05b07f05f6e5db1ee69a473_company_large.jpeg",
                "banner": "https://images.wizbii.com/uploads/14/9hk/149hk6ix3vrzqnjpyxrj7kurukg0l9dv_company_banner_large.png",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p>Le groupe Cr&eacute;dit Agricole est l'un des tout premiers acteurs bancaires en Europe et notamment en France ou il est leader de la banque universelle de proximit&eacute; et premier financeur de l'&eacute;conomie fran&ccedil;aise. Le groupe accompagne ses clients dans leur projet qu'il soit local ou international, et ce dans tous les m&eacute;tiers de la banque et les m&eacute;tiers sp&eacute;cialis&eacute;s qui lui sont associ&eacute;s.</p>\n<p>Le groupe Cr&eacute;dit Agricole recense 150 000 collaborateurs et 32 administrateurs des caisses r&eacute;gionales et locales. La banque est au service de 51 millions de clients, 6,9 millions de soci&eacute;taire et 1,2 million d'actionnaire, elle se retrouve ainsi dans le top 3 du classement sur la communication responsable parmi les 31 plus grandes banques et compagnies d'assurance europ&eacute;ennes.</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "nb_jobs": 235
                },
                "tabs": [
                  {
                    "slug": "job-dating",
                    "title": "Job Dating",
                    "inner_title": "Retrouvez tous les Job Dating de la rentrée !",
                    "description": "<p><img src=\"https://images.wizbii.com/api/image/v1/icht4bygizjliv79dbu2qnifg119i7ar.jpeg\" alt=\"\" width=\"860\" height=\"454\" /></p>\n<p>Le Cr&eacute;dit Agricole et Wizbii vous proposent de nombreux JobDating pour cette rentr&eacute;e 2017 !&nbsp;</p>\n<p>En effet, le Cr&eacute;dit Agricole et de nombreuses entreprises du territoire seront pr&eacute;sents lors de ces soir&eacute;es in&eacute;dites afin de rencontrer et recruter de nouveaux talents.&nbsp;</p>\n<p>Vous &ecirc;tes actuellement &agrave; la recherche d'un poste et vous avez envie de participer &agrave; un &eacute;v&eacute;nement de rencontres et d'&eacute;changes professionnels ? N'h&eacute;sitez plus et inscrivez vous au prochain Job Dating de votre ville ! Dans un cadre informel et d&eacute;contract&eacute; nous nous ferons un plaisir de vous rencontrer !&nbsp;<br /><br /></p>\n<p style=\"text-align: center;\">&nbsp;<a href=\"https://www.wizbii.com/company/credit-agricole-atlantique-vendee?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=la-roche-sur-yon-caav-6-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">LA ROCHE-SUR-YON</a>&nbsp;- 6 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-finistere1430866102?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=quimper-caf-7-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">QUIMPER</a>&nbsp;- 7 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-lorraine1430865994?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=metz-cal-13-fevrier-2018&amp;utm_content=page+entreprise+CA#job-dating\" target=\"_blank\">SAINT-JULIEN-L&Egrave;S-METZ</a>&nbsp;- 13 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-nord-midi-pyrenees?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=albi-canmp-13-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">ALBI</a>&nbsp;- 13 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-provence-cote-d-azur?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=toulon-capca-13-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">TOULON</a>&nbsp;- 13 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-alpes-provence1430866055?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=aix-en-provence-caap-20-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">AIX-EN-PROVENCE</a>&nbsp;- 20 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-normandie-seine?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=le-havre-cans-21-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">LE HAVRE</a>&nbsp;- 21 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-charente-maritime-deux-sevres?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=la-rochelle-camds-6-fevrier-2018-1&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">LA ROCHELLE</a>&nbsp;- 27 F&eacute;vrier</p>\n<p style=\"text-align: center;\"><a href=\"https://www.wizbii.com/company/credit-agricole-sud-rhone-alpes?utm_source=wizbii&amp;utm_medium=web&amp;utm_campaign=valence-casra-27-fevrier-2018&amp;utm_term=page+entreprise+CA#job-dating\" target=\"_blank\">VALENCE</a>&nbsp;- 27 F&eacute;vrier</p>",
                    "online": true
                  }, {
                    "slug": "job-meeting",
                    "title": "1er Stage 1er Job",
                    "inner_title": "L'initiative pour l'emploi des jeunes !",
                    "description": "<p style=\"text-align: center;\"><img src=\"https://images.wizbii.com/api/image/v1/xne95pj6x46ai7zkswl61eqgj9oi5rut.png\" alt=\"\" /></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\"><strong>L&rsquo;emploi des jeunes sur notre territoire ? Une v&eacute;ritable priorit&eacute; !</strong></p>\n<p>En 2017, le Cr&eacute;dit Agricole s&rsquo;engage dans une initiative de taille : accompagner les 18-30 ans dans le lancement de leur carri&egrave;re &agrave; travers l'initiative \"1er Stage, 1er Job\".</p>\n<p><em>Des offres d&rsquo;emploi, de stage et d&rsquo;alternance</em></p>\n<p>Au programme, un large panel de jobs...et pourquoi pas le v&ocirc;tre ! En partenariat avec Wizbii, le Cr&eacute;dit Agricole vous permet de postuler aux offres diffus&eacute;es par des entreprises de votre r&eacute;gion : du CDD au CDI en passant par le stage ou encore l&rsquo;alternance, retrouvez ces annonces dans la rubrique &ldquo;Recrutement&rdquo; !</p>\n<p><em>Des &eacute;v&eacute;nements de recrutement originaux</em></p>\n<p><strong>1er Stage, 1er Job</strong>, c&rsquo;est aussi l&rsquo;occasion d&rsquo;&eacute;changer avec ces recruteurs autour d&rsquo;un verre ! Que diriez-vous de passer votre entretien dans un cadre informel et convivial ? Inscrivez-vous &agrave; l&rsquo;un de nos Job Dating !&nbsp;Pour cela, rien de plus simple : rendez-vous directement sur l&rsquo;onglet &ldquo;Job Dating&rdquo; (en ligne prochainement) et abonnez-vous &agrave; notre page &ldquo;Entreprise&rdquo; pour &ecirc;tre tenu au courant des prochains &eacute;v&eacute;nements.</p>",
                    "online": true
                  }
                ],
                "aliases": [
                  "banque-credit-agricole", "crdit-agricole-1", "crdit-agricole"
                ],
                "subsidiaries": [
                  "credit-agricole-alpes-provence1430866055",
                  "credit-agricole-alsace-vosges1430866107",
                  "credit-agricole-alsace-vosges1430866145",
                  "credit-agricole-de-l-anjou-et-du-maine",
                  "credit-agricole-d-aquitaine",
                  "credit-agricole-atlantique-vendee",
                  "credit-agricole-brie-picardie",
                  "credit-agricole-centre-est",
                  "credit-agricole-centre-france",
                  "credit-agricole-centre-loire",
                  "credit-agricole-centre-ouest",
                  "credit-agricole-champagne-bourgogne",
                  "credit-agricole-charente-perigord",
                  "crdit-agricole-corse",
                  "credit-agricole-finistere1430866102",
                  "credit-agricole-franche-comte1430866048",
                  "credit-agricole-ile-de-france",
                  "credit-agricole-d-ille-et-vilaine",
                  "credit-agricole-languedoc",
                  "credit-agricole-loire-haute-loire",
                  "credit-agricole-lorraine1430865994",
                  "credit-agricole-du-morbihan",
                  "credit-agricole-nord-de-france",
                  "credit-agricole-nord-est1430866147",
                  "credit-agricole-nord-midi-pyrenees",
                  "credit-agricole-normandie",
                  "credit-agricole-normandie-seine",
                  "credit-agricole-provence-cote-d-azur",
                  "campg",
                  "credit-agricole-des-savoie",
                  "credit-agricole-sud-rhone-alpes",
                  "credit-agricole-toulouse-31",
                  "credit-agricole-touraine-poitou",
                  "credit-agricole-val-de-france"
                ],
                "twitter_username": "CreditAgricole",
                "website": "http://www.credit-agricole.fr/",
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "https://www.facebook.com/CreditAgricole"
                  }, {
                    "type": "linkedin",
                    "url": "https://fr.linkedin.com/company/credit-agricole"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/e0/878/e0878c99f05b07f05f6e5db1ee69a473_company_large@2x.jpeg",
                "high_res_banner": "https://images.wizbii.com/uploads/14/9hk/149hk6ix3vrzqnjpyxrj7kurukg0l9dv_company_banner_large@2x.png",
                "options": ["activate_partners"],
                "partners_validator_emails": []
              },
              "content": "Attention, préparez-vous !! Demain Hugoposay va tenter de maitriser l’impossible… #FailNoFail #EKObyCA",
              "tags": [
                {
                  "_id": "failnofail",
                  "slug": "failnofail",
                  "name": "FailNoFail",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:23+0000",
                  "date_modified": "2018-02-13T11:00:23+0000"
                }, {
                  "_id": "ekobyca",
                  "slug": "ekobyca",
                  "name": "EKObyCA",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:23+0000",
                  "date_modified": "2018-02-13T11:00:23+0000"
                }
              ],
              "attachment_title": "Attention, préparez-vous !! Demain Hugoposay va tenter de maitriser l’impossible… #FailNoFail #EKObyCA",
              "attachment_picture": "https://images.wizbii.com/uploads/8o/qa6/8oqa63snh1vcsqike6osnwru286geb64_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/8oqa63snh1vcsqike6osnwru286geb64.jpeg",
              "attachment_picture_width": 720,
              "attachment_picture_height": 404,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 15588687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "khpfatmkm68w8w44o0w4skgg8co04kg",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T10:32:55+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "khpfatmkm68w8w44o0w4skgg8co04kg",
              "external_id": "cea2a31a567e46cfb5deb52a0b7f36f8",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T10:32:55+0000",
              "date_modified": "2018-02-13T11:00:23+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "envoimoinschercom",
              "poster": {
                "slug": "envoimoinschercom",
                "type": "COMPANY",
                "displayName": "EnvoiMoinsCher com",
                "guid": "4871587"
              },
              "company": {
                "_id": "envoimoinschercom",
                "slug": "envoimoinschercom",
                "guid": "4871587",
                "date_created": "2014-07-09T17:53:47+0200",
                "date_modified": "2017-02-15T10:25:40+0000",
                "date_client": "2014-11-03T09:00:00+0100",
                "status": "PUBLIC",
                "state": "visible",
                "name": "EnvoiMoinsCher com",
                "tag_line": "Rejoignez une start-up dynamique et en pleine croissance !",
                "is_client": false,
                "employees_number": "24",
                "is_autocomplete": true,
                "industry": "transports_routiers_et_ferroviaires",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "boxtalfr"
                  }, {
                    "type": "TWITTER",
                    "url": "Envoimoinscher"
                  }, {
                    "type": "GOOGLE_PLUS",
                    "url": "https://plus.google.com/u/0/b/113039774563126800503/+envoimoinscher/posts"
                  }, {
                    "type": "BLOG",
                    "url": "http://blog.envoimoinscher.com"
                  }, {
                    "type": "AUTRE",
                    "title": "Linkedin",
                    "url": "https://www.linkedin.com/company/envoimoinscher"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/99/945/9994588a85cc0cb802e7b06798a49288_company_large.png",
                "banner": "https://images.wizbii.com/uploads/83/b1c/83b1c8e3bcb6a48c714904eef654b6b7_company_banner_large.png",
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p class=\"h3\">Vous avez le go&ucirc;t du challenge et souhaitez rejoindre une start-up solide ?</p>\n<p class=\"\">Envoimoinscher.com c'est :</p>\n<p>&middot; 2,6 millions lev&eacute;s en 2013</p>\n<p>&middot; Une croissance de 20% par mois</p>\n<p>&middot; 100 000 clients</p>\n<p>&middot; D&eacute;j&agrave; 2 campagnes de publicit&eacute; sur France T&eacute;l&eacute;vision en 2014</p>\n<p>&nbsp;</p>\n<h3>&nbsp;</h3>\n<h3>Qui sommes-nous ?</h3>\n<p><strong><br /> </strong>Une &eacute;quipe, compos&eacute;e de 24 personnes, d&eacute;veloppant un site internet innovant, devenu leader de son propre march&eacute; cr&eacute;&eacute; il y a 5 ans. Notre ambition est de r&eacute;volutionner notre secteur en apportant un outil cl&eacute; en main &agrave; nos clients.</p>\n<p>L'ADN de l'&eacute;quipe ? Pulv&eacute;riser chaque mois de nouveaux records tout en offrant un haut niveau de qualit&eacute; de service et un tr&egrave;s grand professionnalisme.</p>\n<p>&nbsp;</p>\n<p><a href=\"http://www.envoimoinscher.com\"><img src=\"http://laruche.wizbii.com/wp-content/uploads/2014/10/EMC_logo_baseline_HD-e1412259564452.jpg\" alt=\"\" /></a></p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "description": "<p><img src=\"../api/image/v1/8686da766570f4c06050f1665dbd62dd.jpeg?size=company_description_banner_medium\" srcset=\"/api/image/v1/8686da766570f4c06050f1665dbd62dd.jpeg?size=company_description_banner_medium@2x 2x\" alt=\"\" /></p>\n<h3><strong>EnvoiMoinsCher.com, qu'est-ce que c'est ? </strong></h3>\n<ul>\n<li>2,6 millions d'euros lev&eacute;s en 2013</li>\n<li>Une croissance de 20% par mois</li>\n<li>100 000 clients</li>\n<li>D&eacute;j&agrave; deux campagnes de publicit&eacute; sur France T&eacute;l&eacute;vision en 2014</li>\n</ul>\n<h3><strong>Pourquoi nous rejoindre ?</strong></h3>\n<p>S'il vous fallait une bonne raison pour rejoindre l'&eacute;quipe d'EnvoiMoinsCher.com, nous vous en donnons 3 :</p>\n<ul>\n<li>Int&eacute;grez une &eacute;quipe dynamique et pluridisciplinaire, dont la moiti&eacute; est arriv&eacute;e depuis moins de 6 mois.</li>\n<li>Rejoignez une start-up leader du march&eacute; qu'elle a cr&eacute;&eacute; il y a 5 ans</li>\n<li>Participez au d&eacute;veloppement d'une entreprise innovante</li>\n</ul>\n<h3><strong>Nos m&eacute;tiers :</strong></h3>\n<p><strong><em data-redactor-tag=\"em\">Technique :</em></strong> vous inventez les solutions de demain pour am&eacute;liorer nos produits et services, en travaillant sur notre architecture.</p>\n<p><strong><em data-redactor-tag=\"em\">Commercial :</em> </strong>vous participerez au d&eacute;veloppement commercial de la soci&eacute;t&eacute; en mettant en place des partenariats divers et d&eacute;veloppez l'&eacute;cosyst&egrave;me e-commerce d'EnvoiMoinsCher.com.</p>\n<p><strong><em data-redactor-tag=\"em\">Marketing :</em> </strong>vous participerez &agrave; l'am&eacute;lioration de l'exp&eacute;rience utilisateur sur notre site grand public (B2B et B2C) et au d&eacute;veloppement de notre pr&eacute;sence sur le web, &agrave; l'international ainsi que sur le mobile.</p>\n<h3><strong>Notre engagement :</strong></h3>\n<ul>\n<li>Int&eacute;grer des profils vari&eacute;s, juniors avec pour objectif de les faire monter en comp&eacute;tences rapidement.</li>\n<li>Former nos collaborateurs &agrave; mieux appr&eacute;hender les probl&eacute;matiques de la logistique dans le e-commerce.</li>\n<li>Bonus de participation aux objectifs annuels de la soci&eacute;t&eacute;.</li>\n</ul>",
                  "nb_jobs": 0
                },
                "tabs": [],
                "aliases": [
                  "envoimoinscher-com", "envoimoinscher"
                ],
                "subsidiaries": [],
                "url_custom": "envoimoinschercom",
                "twitter_username": "envoimoinscher",
                "website": "http://www.envoimoinscher.com/",
                "followed": false,
                "external_feeds": [
                  {
                    "type": "linkedin",
                    "url": "https://www.linkedin.com/company/1023447"
                  }, {
                    "type": "facebook",
                    "url": "https://www.facebook.com/boxtalfr"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/99/945/9994588a85cc0cb802e7b06798a49288_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/83/b1c/83b1c8e3bcb6a48c714904eef654b6b7_company_banner_large@2x.png",
                "options": [],
                "partners_validator_emails": []
              },
              "content": "Ce jeudi 15 février à 10h30, ne ratez pas notre webinaire express organisé en collaboration avec PrestaShop !\n\n📦 Maximisez vos ventes grâce à votre politique de livraison\n\nInscrivez-vous dès maintenant ➡ goo.gl/hzqJZD",
              "tags": [],
              "attachment_title": "Ce jeudi 15 février à 10h30, ne ratez pas notre webinaire express organisé en collaboration avec PrestaShop !\n\n📦 Maximisez vos ventes grâce à votre politique de livraison\n\nInscrivez-vous dès maintenant ➡ goo.gl/hzqJZD",
              "attachment_picture": "https://images.wizbii.com/uploads/r1/w69/r1w69n0t93n5iwq14caarx7h4e2ekomr_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/r1w69n0t93n5iwq14caarx7h4e2ekomr.jpeg",
              "attachment_picture_width": 720,
              "attachment_picture_height": 404,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 15898687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "s0a5qi700i88k8gcswc0ow08gos4wsg",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T10:24:00+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "s0a5qi700i88k8gcswc0ow08gos4wsg",
              "external_id": "543a139b4d2ec7939612867c115c2ee0",
              "type": "FACEBOOK",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T10:24:00+0000",
              "date_modified": "2018-02-13T11:00:35+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "credit-agricole-finistere1430866102",
              "poster": {
                "slug": "credit-agricole-finistere1430866102",
                "type": "COMPANY",
                "displayName": "Crédit Agricole Du Finistère",
                "guid": "4509949"
              },
              "company": {
                "_id": "credit-agricole-finistere1430866102",
                "slug": "credit-agricole-finistere1430866102",
                "guid": "4509949",
                "date_created": "2014-06-27T23:15:30+0200",
                "date_modified": "2018-02-12T08:53:34+0000",
                "date_client": "2017-06-16T09:00:00+0200",
                "status": "PUBLIC",
                "state": "copy",
                "name": "Crédit Agricole Du Finistère",
                "tag_line": "Nous vous mettons en relation avec des entreprises qui recrutent sur le territoire",
                "is_client": true,
                "employees_number": "1350",
                "is_autocomplete": false,
                "industry": "banques",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [
                  {
                    "type": "FACEBOOK",
                    "url": "https://www.facebook.com/CreditAgricoleFinistere/",
                    "date_created": "2017-08-31T15:09:45+0000",
                    "date_modified": "2017-08-31T15:09:45+0000"
                  }, {
                    "type": "TWITTER",
                    "url": "https://twitter.com/ca_finistere",
                    "date_created": "2017-08-31T15:09:45+0000",
                    "date_modified": "2017-08-31T15:09:45+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "CA Bretagne Recrute",
                    "url": "http://www.ca-bretagne-recrute.fr",
                    "date_created": "2017-08-31T15:09:45+0000",
                    "date_modified": "2017-08-31T15:09:45+0000"
                  }, {
                    "type": "AUTRE",
                    "title": "Linkedin",
                    "url": "https://fr.linkedin.com/company/crédit-agricole-du-finistère",
                    "date_created": "2017-08-31T15:09:45+0000",
                    "date_modified": "2017-08-31T15:09:45+0000"
                  }
                ],
                "logo": "https://images.wizbii.com/uploads/ay/s9p/ays9pgvyf0pl9se6f1nv9uz00hu8k2bp_company_large.png",
                "banner": "https://images.wizbii.com/uploads/xv/5pz/xv5pzu2jqbzzsy0205prneczfwsurzjl_company_banner_large.png",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": 0
                  },
                  "zoom": 1
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<h3>Entit&eacute; de rattachement</h3>\n<p>Le groupe Cr&eacute;dit Agricole est le premier financeur de l'&eacute;conomie fran&ccedil;aise et l'un des tout premiers acteurs bancaires en Europe.</p>\n<p><br /><strong>Notre gouvernance : Coop&eacute;rative et Mutualiste</strong></p>\n<p>Le Cr&eacute;dit Agricole du Finist&egrave;re est une entreprise mutualiste, une coop&eacute;rative. C&rsquo;est sur cette identit&eacute;, les finalit&eacute;s, les valeurs et l&rsquo;organisation qui la portent, que le Cr&eacute;dit Agricole du Finist&egrave;re a fond&eacute; son d&eacute;veloppement. Il s&rsquo;est construit de fa&ccedil;on d&eacute;centralis&eacute;e en s&rsquo;appuyant sur 40 Caisses locales et plus de 215 000 soci&eacute;taires.</p>\n<p>&nbsp;</p>\n<p><strong>Notre exigence : l&rsquo;excellence dans la relation avec nos clients</strong></p>\n<p>La coop&eacute;rative bancaire du Cr&eacute;dit Agricole du Finist&egrave;re s&rsquo;attache &agrave; satisfaire chaque client et soci&eacute;taire en affirmant sa proximit&eacute; et son expertise, tout en prenant des engagements relationnels forts. Pour &ecirc;tre une banque de demain, la premi&egrave;re coop&eacute;rative bancaire du d&eacute;partement met aussi en place des outils et des solutions innovantes.</p>\n<p>&nbsp;</p>\n<p><strong>Notre ADN : le d&eacute;veloppement &eacute;conomique de notre territoire</strong></p>\n<p>Cr&eacute;er de la valeur &eacute;conomique, soutenir la cr&eacute;ation et le d&eacute;veloppement des entreprises, investir dans les domaines d&rsquo;excellence, consacrer l&rsquo;essentiel de l&rsquo;&eacute;pargne bancaire aux financements locaux, toutes ces formes de contribution sont autant de priorit&eacute;s pour le Cr&eacute;dit Agricole du Finist&egrave;re, acteur majeur du d&eacute;veloppement de l&rsquo;&eacute;conomie.</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment"
                },
                "tabs": [
                  {
                    "slug": "job-meeting",
                    "title": "1er Stage 1er Job",
                    "inner_title": "L'initiative pour l'emploi des jeunes !",
                    "description": "<p><img src=\"https://images.wizbii.com/api/image/v1/a5qvsgmqjjsjuaphmkbltrjwnmckxi24.jpeg\" alt=\"\" /></p>\n<p style=\"text-align: center;\"><strong>L&rsquo;emploi des jeunes sur notre territoire ? Une v&eacute;ritable priorit&eacute; !</strong></p>\n<p>En 2017, le Cr&eacute;dit Agricole Finist&egrave;re&nbsp;s&rsquo;engage dans une initiative de taille : accompagner les 18-30 ans dans le lancement de leur carri&egrave;re &agrave; travers&nbsp;<strong>1er Stage 1er Job</strong>.</p>\n<p><em>Des offres d&rsquo;emploi, de stage et d&rsquo;alternance</em></p>\n<p>Au programme, un large panel de jobs...et pourquoi pas le v&ocirc;tre ! En partenariat avec Wizbii, le Cr&eacute;dit Agricole Finist&egrave;re&nbsp;vous permet de postuler aux offres diffus&eacute;es par des entreprises de votre r&eacute;gion : du CDD au CDI en passant par le stage ou encore l&rsquo;alternance, retrouvez ces annonces dans la rubrique &ldquo;Recrutement&rdquo; !</p>\n<p><em>Des &eacute;v&eacute;nements de recrutement originaux</em></p>\n<p><strong>1er Stage&nbsp;</strong><strong>1er Job</strong>, c&rsquo;est aussi l&rsquo;occasion d&rsquo;&eacute;changer avec ces recruteurs autour d&rsquo;un verre ! Que diriez-vous de passer votre entretien dans un cadre informel et convivial ? Inscrivez-vous &agrave; l&rsquo;un de nos Job Dating! Pour cela, rien de plus simple : rendez-vous directement sur l&rsquo;onglet &ldquo;Job Dating&rdquo; et abonnez-vous &agrave; notre page &ldquo;Entreprise&rdquo; pour &ecirc;tre tenu au courant des prochains &eacute;v&eacute;nements.</p>",
                    "online": true
                  }, {
                    "slug": "job-dating",
                    "title": "Job Dating 18/04/18",
                    "inner_title": "Venez rencontrer les recruteurs de votre région!",
                    "description": "<p style=\"text-align: center;\"><img src=\"https://images.wizbii.com/api/image/v1/8b3n7dv5nn7to0ldzbq3w4l60wb11xeg.png\" alt=\"\" /></p>\n<p style=\"text-align: center;\">&nbsp;</p>\n<p style=\"text-align: center;\"><em>Vous &ecirc;tes &agrave; la recherche d'un emploi, d'un stage ou d'une alternance?</em></p>\n<p style=\"text-align: center;\"><em>Un&nbsp;<strong>Job Dating</strong>&nbsp;rassemblant 10&nbsp;entreprises locales&nbsp;est organis&eacute; &agrave; <strong>Morlaix&nbsp;le&nbsp;18 avril prochain !</strong></em></p>\n<p style=\"text-align: center;\">Pour s'inscrire :</p>\n<p style=\"text-align: center;\">%form%</p>\n<p style=\"text-align: center;\">&nbsp;</p>",
                    "online": true,
                    "date_begin": "2018-02-12T00:00:00+0100",
                    "date_end": "2018-04-19T23:59:00+0200"
                  }
                ],
                "aliases": [
                  "2013-a-ce-jour-animateur-de-vente-terrain-attribue-au-cabinet-de-conseil-booster-game-oise-et-val-d-oise-d-organiser-participer-a-des-animations-commerciales-salons-seminaires-clients-grandes-surfaces-de-relayer-les-operations-marketing-plv-promotions-campagnes-etc-de-relayer-les-operations-de-stimulation-de-la-force-de-vente", "credit-agricole-cotes-finistere", "credit-agricole-finistere", "credit-agricole-finistere"
                ],
                "subsidiaries": [],
                "twitter_username": "ca_finistere",
                "website": "http://www.ca-finistere.fr",
                "followed": false,
                "external_feeds": [
                  {
                    "type": "facebook",
                    "url": "https://www.facebook.com/CreditAgricoleFinistere"
                  }
                ],
                "high_res_logo": "https://images.wizbii.com/uploads/ay/s9p/ays9pgvyf0pl9se6f1nv9uz00hu8k2bp_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/xv/5pz/xv5pzu2jqbzzsy0205prneczfwsurzjl_company_banner_large@2x.png",
                "options": ["activate_partners"],
                "partner_banner": "43kw1062qvqidaixwarz2bzr1dnrovls.png",
                "partners_validator_emails": []
              },
              "content": "Si ce n'est déjà fait, inscrivez-vous au Forum des #AgriNovateurs 2018. Vendredi 16 février (13h30-17h), au Centre de Formation de Saint-Ségal (donc en #Finistère), venez découvrir les travaux des Agri’Novateurs sur les thématiques suivantes (inscription, ici : http://bit.ly/2DWiRZK ) :\n- Impact du semis direct sur la vie biologique du sol\n- Complémentarité des races et efficacité technico-économique pour différents croisements laitiers\n- TraPhyLeg : Réduire la pénibilité du travail et l’utilisation des produits phytosanitaires en légumes\n- Apprendre à piloter le sol et les cultures avec l’expérience des Agri’tuteurs\n- Pour la maitrise de l’érosion, des fuites d’azote et du phosphore sur le Sulon entre agriculteurs et syndicat d’eau\n\nOrganisé par les Chambres d'agriculture de Bretagne et #Résagri. Avec Crédit Agricole du Finistère partenaire.\n#innovations #agriculture #environnement #social #",
              "tags": [
                {
                  "_id": "agrinovateurs",
                  "slug": "agrinovateurs",
                  "name": "AgriNovateurs",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:34+0000",
                  "date_modified": "2018-02-13T11:00:34+0000"
                }, {
                  "_id": "finistere",
                  "slug": "finistere",
                  "name": "Finistère",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:34+0000",
                  "date_modified": "2018-02-13T11:00:34+0000"
                }, {
                  "_id": "resagri",
                  "slug": "resagri",
                  "name": "Résagri",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:34+0000",
                  "date_modified": "2018-02-13T11:00:34+0000"
                }, {
                  "_id": "innovations",
                  "slug": "innovations",
                  "name": "innovations",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:34+0000",
                  "date_modified": "2018-02-13T11:00:34+0000"
                }, {
                  "_id": "agriculture",
                  "slug": "agriculture",
                  "name": "agriculture",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:34+0000",
                  "date_modified": "2018-02-13T11:00:34+0000"
                }, {
                  "_id": "environnement",
                  "slug": "environnement",
                  "name": "environnement",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:34+0000",
                  "date_modified": "2018-02-13T11:00:34+0000"
                }, {
                  "_id": "social",
                  "slug": "social",
                  "name": "social",
                  "type": "TAG",
                  "date_created": "2018-02-13T11:00:35+0000",
                  "date_modified": "2018-02-13T11:00:35+0000"
                }
              ],
              "attachment_title": "Si ce n'est déjà fait, inscrivez-vous au Forum des #AgriNovateurs 2018. Vendredi 16 février (13h30-17h), au Centre de Formation de Saint-Ségal (donc en #Finistère), venez découvrir les travaux des Agri’Novateurs sur les thématiques suivantes (inscription, ici : http://bit.ly/2DWiRZK ) :\n- Impact du semis direct sur la vie biologique du sol\n- Complémentarité des races et efficacité technico-économique pour différents croisements laitiers\n- TraPhyLeg : Réduire la pénibilité du travail et l’utilisation des produits phytosanitaires en légumes\n- Apprendre à piloter le sol et les cultures avec l’expérience des Agri’tuteurs\n- Pour la maitrise de l’érosion, des fuites d’azote et du phosphore sur le Sulon entre agriculteurs et syndicat d’eau\n\nOrganisé par les Chambres d'agriculture de Bretagne et #Résagri. Avec Crédit Agricole du Finistère partenaire.\n#innovations #agriculture #environnement #social #",
              "attachment_picture": "https://images.wizbii.com/uploads/an/clx/anclxmf1c3fznicpyikjnnzqxyelp0we_publication_large.png",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/anclxmf1c3fznicpyikjnnzqxyelp0we.png",
              "attachment_picture_width": 720,
              "attachment_picture_height": 342,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 16433687,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "7xh9tlds8m4g4gcgwckw088wo04wsg8",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T10:10:41+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "7xh9tlds8m4g4gcgwckw088wo04wsg8",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T10:10:41+0000",
              "date_modified": "2018-02-13T10:10:41+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "cobat",
              "poster": {
                "slug": "cobat",
                "type": "COMPANY",
                "displayName": "Cobat"
              },
              "company": {
                "_id": "cobat",
                "slug": "cobat",
                "date_created": "2017-03-28T11:20:55+0000",
                "date_modified": "2018-01-15T11:31:02+0000",
                "status": "PRIVE",
                "state": "visible",
                "name": "Cobat",
                "siren": "434 802 260",
                "tag_line": "Une équipe au service de ses Adhérents.",
                "is_client": false,
                "employees_number": "38",
                "is_autocomplete": true,
                "industry": "commerce_de_gros",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "links": [],
                "logo": "https://images.wizbii.com/uploads/d6/e9v/d6e9vtxuv7o3lzobi87nvi4mkocdlego_company_large.png",
                "banner": "https://images.wizbii.com/uploads/fm/9av/fm9avmryvbz9wqrgd52lmj5omh62ccol_company_banner_large.jpeg",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": 0
                  },
                  "zoom": 0.1953125
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p>La Coop&eacute;rative COBAT regroupant 160 artisans du b&acirc;timent sur toute la Sarthe et le Loir et Cher est membre du groupement ORCAB qui compte 50 coop&eacute;ratives en France. </p>\n<p>Au service de ses adh&eacute;rents, elle leurs permet de :&nbsp;</p>\n<ul style=\"list-style-type: circle;\">\n<li>Optimiser leurs approvisionnements,</li>\n<li>d&eacute;velopper &eacute;conomique et socialement leurs entreprises,</li>\n<li>Rencontrer et Echanger avec d'autres artisans,</li>\n<li>Se sp&eacute;cialiser sur les techniques produits...</li>\n</ul>\n<p>COBAT compte actuellement 38 collaborateurs au service quotidiennement pour leurs artisans coop&eacute;rateurs.</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "nb_jobs": 0
                },
                "tabs": [],
                "recruiters": [],
                "aliases": [],
                "subsidiaries": [],
                "should_redirect": false,
                "website": "http://www.orcab.coop/cooperatives/cobat",
                "followers": [],
                "followed": false,
                "high_res_logo": "https://images.wizbii.com/uploads/d6/e9v/d6e9vtxuv7o3lzobi87nvi4mkocdlego_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/fm/9av/fm9avmryvbz9wqrgd52lmj5omh62ccol_company_banner_large@2x.jpeg",
                "options": [],
                "partner_of": "credit-agricole-de-l-anjou-et-du-maine",
                "partners_validator_emails": []
              },
              "content": "",
              "tags": [
                {
                  "_id": "job",
                  "slug": "job",
                  "name": "job",
                  "type": "TAG",
                  "date_created": "2018-02-13T10:10:41+0000",
                  "date_modified": "2018-02-13T10:10:41+0000"
                }, {
                  "_id": "informatique",
                  "slug": "informatique",
                  "name": "informatique",
                  "type": "TAG",
                  "date_created": "2018-02-13T10:10:41+0000",
                  "date_modified": "2018-02-13T10:10:41+0000"
                }, {
                  "_id": "logisticien",
                  "slug": "logisticien",
                  "name": "LOGISTICIEN",
                  "type": "TAG",
                  "date_created": "2018-02-13T10:10:41+0000",
                  "date_modified": "2018-02-13T10:10:41+0000"
                }
              ],
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 17232687,
              "shared_object_id": "assistant-responsable-logistique-1",
              "shared_object_type": "job",
              "shared_job": {
                "_id": "assistant-responsable-logistique-1",
                "slug": "assistant-responsable-logistique-1",
                "creator_slug": "marie-laure-rebouilleau",
                "state": "visible",
                "company_slug": "cobat",
                "start_date": "2018-02-13T14:57:53+0000",
                "contract": {
                  "_id": "cdi",
                  "slug": "cdi",
                  "title": "Contrat à durée indéterminée",
                  "title_short": "CDI",
                  "order": 7,
                  "date_created": "2017-08-10T16:12:14+0000",
                  "date_modified": "2017-08-10T16:12:14+0000",
                  "language": "fr",
                  "locale": "fr_FR",
                  "duration": false
                },
                "location": {
                  "type": "city",
                  "city_place_id": "ChIJMarzFNKI4kcRf-B9akxdAmk",
                  "display_value": "Le Mans",
                  "city": "Le Mans",
                  "address": "Le Mans, France",
                  "department": "Sarthe",
                  "department_short": "Sarthe",
                  "state": "Pays de la Loire",
                  "state_short": "Pays de la Loire",
                  "country": "France",
                  "country_short": "FR",
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 48.00611000000001,
                    "lon": 0.199556
                  },
                  "extra": {}
                },
                "date_created": "2018-02-13T10:10:34+0000",
                "date_modified": "2018-02-13T10:10:41+0000",
                "language": "fr",
                "locale": "fr_FR",
                "title": "ASSISTANT RESPONSABLE LOGISTIQUE",
                "mission": "Votre mission : <br />\n<br />\nSous la responsabilité du Responsable Logistique vous aurez la charge : <br />\n \tContrôler la conformité et la qualité des opérations de préparation, de chargement des commandes<br />\n \tRéaliser des préparations de commandes et réception des marchandises <br />\n \tSuivre et optimiser des opérations de livraison<br />\n \tDiffuser, suivre et s’assurer du respect des règles de qualité, hygiène et sécurité.<br />\n \tInformer les adhérents des dates et conditions de livraison <br />\n \tPréparation, organisation et planification du travail au sein de l’équipe<br />\n \tDiffuser les consignes de travail et contrôler leur application<br />\n \tAnimer et motiver votre équipe<br />\n",
                "profile": "Vos atouts : <br />\n<br />\n \tVous êtes autonome, dynamique et enthousiaste.<br />\n \tVous êtes à l’aise avec l’outil informatique.<br />\n \tVous avez une bonne condition physique, et êtes à l’aise avec le calcul.<br />\n \tVous avez de bonnes connaissances géographiques territoriales.<br />\n \tVous avez un bon sens relationnel. <br />\n \tVous avez des connaissances des matériaux de construction.<br />\n \tVous êtes idéalement titulaire des permis CACESS 1, 3 et 5.<br />\n \tVous aimez travailler en équipe et souhaitez évoluer dans une structure où l’autonomie et la dimension humaines sont des valeurs prioritaires. <br />\n",
                "source": "wizbii",
                "source_type": "human",
                "online": true,
                "domaine": "LOGISTIQUE",
                "skills": [
                  {
                    "_id": "informatique",
                    "slug": "informatique",
                    "name": "informatique",
                    "type": "TAG",
                    "date_created": "2018-02-13T10:10:34+0000",
                    "date_modified": "2018-02-13T10:10:34+0000"
                  }, {
                    "_id": "logisticien",
                    "slug": "logisticien",
                    "name": "LOGISTICIEN",
                    "type": "TAG",
                    "date_created": "2018-02-13T10:10:34+0000",
                    "date_modified": "2018-02-13T10:10:34+0000"
                  }
                ],
                "languages": [],
                "company": {
                  "_id": "cobat",
                  "slug": "cobat",
                  "date_created": "2017-03-28T11:20:55+0000",
                  "date_modified": "2018-01-15T11:31:02+0000",
                  "status": "PRIVE",
                  "state": "visible",
                  "name": "Cobat",
                  "siren": "434 802 260",
                  "tag_line": "Une équipe au service de ses Adhérents.",
                  "is_client": false,
                  "employees_number": "38",
                  "is_autocomplete": true,
                  "industry": "commerce_de_gros",
                  "location": {
                    "points": {
                      "center": {
                        "lat": 0,
                        "lon": 0
                      }
                    },
                    "geo": {
                      "lat": 0,
                      "lon": 0
                    },
                    "extra": {}
                  },
                  "links": [],
                  "logo": "https://images.wizbii.com/uploads/d6/e9v/d6e9vtxuv7o3lzobi87nvi4mkocdlego_company_large.png",
                  "banner": "https://images.wizbii.com/uploads/fm/9av/fm9avmryvbz9wqrgd52lmj5omh62ccol_company_banner_large.jpeg",
                  "banner_info": {
                    "offset": {
                      "x": 0,
                      "y": 0
                    },
                    "zoom": 0.1953125
                  },
                  "home_tab": {
                    "id": "home",
                    "slug": "wizbii-company-messages-message-tab-home",
                    "title": "wizbii.company.messages.message.tab.home",
                    "description": "<p>La Coop&eacute;rative COBAT regroupant 160 artisans du b&acirc;timent sur toute la Sarthe et le Loir et Cher est membre du groupement ORCAB qui compte 50 coop&eacute;ratives en France. </p>\n<p>Au service de ses adh&eacute;rents, elle leurs permet de :&nbsp;</p>\n<ul style=\"list-style-type: circle;\">\n<li>Optimiser leurs approvisionnements,</li>\n<li>d&eacute;velopper &eacute;conomique et socialement leurs entreprises,</li>\n<li>Rencontrer et Echanger avec d'autres artisans,</li>\n<li>Se sp&eacute;cialiser sur les techniques produits...</li>\n</ul>\n<p>COBAT compte actuellement 38 collaborateurs au service quotidiennement pour leurs artisans coop&eacute;rateurs.</p>"
                  },
                  "recruitment_tab": {
                    "id": "recruitment",
                    "slug": "wizbii-company-messages-message-tab-recruitment",
                    "title": "wizbii.company.messages.message.tab.recruitment",
                    "nb_jobs": 0
                  },
                  "tabs": [],
                  "recruiters": [],
                  "aliases": [],
                  "subsidiaries": [],
                  "should_redirect": false,
                  "website": "http://www.orcab.coop/cooperatives/cobat",
                  "followers": [],
                  "followed": false,
                  "high_res_logo": "https://images.wizbii.com/uploads/d6/e9v/d6e9vtxuv7o3lzobi87nvi4mkocdlego_company_large@2x.png",
                  "high_res_banner": "https://images.wizbii.com/uploads/fm/9av/fm9avmryvbz9wqrgd52lmj5omh62ccol_company_banner_large@2x.jpeg",
                  "options": [],
                  "partner_of": "credit-agricole-de-l-anjou-et-du-maine",
                  "partners_validator_emails": []
                },
                "is_index": true,
                "project": false,
                "duplicates": [],
                "description_company": "<p>La Coop&eacute;rative COBAT regroupant 160 artisans du b&acirc;timent sur toute la Sarthe et le Loir et Cher est membre du groupement ORCAB qui compte 50 coop&eacute;ratives en France. </p><br />\n<p>Au service de ses adh&eacute;rents, elle leurs permet de :&nbsp;</p><br />\n<ul style=\"list-style-type: circle;\"><br />\n<li>Optimiser leurs approvisionnements,</li><br />\n<li>d&eacute;velopper &eacute;conomique et socialement leurs entreprises,</li><br />\n<li>Rencontrer et Echanger avec d'autres artisans,</li><br />\n<li>Se sp&eacute;cialiser sur les techniques produits...</li><br />\n</ul><br />\n<p>COBAT compte actuellement 38 collaborateurs au service quotidiennement pour leurs artisans coop&eacute;rateurs.</p>",
                "right_now": true,
                "unique_key": "assistant-responsable-logistique-cobat",
                "shares": [
                  {
                    "sharer_type": "company",
                    "sharer_id": "cobat",
                    "share_date": "2018-02-13T10:10:41+0000",
                    "share_id": "7xh9tlds8m4g4gcgwckw088wo04wsg8",
                    "company": {
                      "_id": "cobat",
                      "slug": "cobat",
                      "date_created": "2017-03-28T11:20:55+0000",
                      "date_modified": "2018-01-15T11:31:02+0000",
                      "status": "PRIVE",
                      "state": "visible",
                      "name": "Cobat",
                      "siren": "434 802 260",
                      "tag_line": "Une équipe au service de ses Adhérents.",
                      "is_client": false,
                      "employees_number": "38",
                      "is_autocomplete": true,
                      "industry": "commerce_de_gros",
                      "location": {
                        "points": {
                          "center": {
                            "lat": 0,
                            "lon": 0
                          }
                        },
                        "geo": {
                          "lat": 0,
                          "lon": 0
                        },
                        "extra": {}
                      },
                      "links": [],
                      "logo": "https://images.wizbii.com/uploads/d6/e9v/d6e9vtxuv7o3lzobi87nvi4mkocdlego_company_large.png",
                      "banner": "https://images.wizbii.com/uploads/fm/9av/fm9avmryvbz9wqrgd52lmj5omh62ccol_company_banner_large.jpeg",
                      "banner_info": {
                        "offset": {
                          "x": 0,
                          "y": 0
                        },
                        "zoom": 0.1953125
                      },
                      "home_tab": {
                        "id": "home",
                        "slug": "wizbii-company-messages-message-tab-home",
                        "title": "wizbii.company.messages.message.tab.home",
                        "description": "<p>La Coop&eacute;rative COBAT regroupant 160 artisans du b&acirc;timent sur toute la Sarthe et le Loir et Cher est membre du groupement ORCAB qui compte 50 coop&eacute;ratives en France. </p>\n<p>Au service de ses adh&eacute;rents, elle leurs permet de :&nbsp;</p>\n<ul style=\"list-style-type: circle;\">\n<li>Optimiser leurs approvisionnements,</li>\n<li>d&eacute;velopper &eacute;conomique et socialement leurs entreprises,</li>\n<li>Rencontrer et Echanger avec d'autres artisans,</li>\n<li>Se sp&eacute;cialiser sur les techniques produits...</li>\n</ul>\n<p>COBAT compte actuellement 38 collaborateurs au service quotidiennement pour leurs artisans coop&eacute;rateurs.</p>"
                      },
                      "recruitment_tab": {
                        "id": "recruitment",
                        "slug": "wizbii-company-messages-message-tab-recruitment",
                        "title": "wizbii.company.messages.message.tab.recruitment",
                        "nb_jobs": 0
                      },
                      "tabs": [],
                      "recruiters": [],
                      "aliases": [],
                      "subsidiaries": [],
                      "should_redirect": false,
                      "website": "http://www.orcab.coop/cooperatives/cobat",
                      "followers": [],
                      "followed": false,
                      "high_res_logo": "https://images.wizbii.com/uploads/d6/e9v/d6e9vtxuv7o3lzobi87nvi4mkocdlego_company_large@2x.png",
                      "high_res_banner": "https://images.wizbii.com/uploads/fm/9av/fm9avmryvbz9wqrgd52lmj5omh62ccol_company_banner_large@2x.jpeg",
                      "options": [],
                      "partner_of": "credit-agricole-de-l-anjou-et-du-maine",
                      "partners_validator_emails": []
                    }
                  }
                ],
                "sponsoring_partner": "credit-agricole-de-l-anjou-et-du-maine"
              },
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "k2qxst1rsw0000008o0cc4wkg4o44oc",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T09:43:12+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "k2qxst1rsw0000008o0cc4wkg4o44oc",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T09:43:12+0000",
              "date_modified": "2018-02-13T09:43:12+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "PROFILE",
              "poster_slug": "yoann-kergoat",
              "poster": {
                "slug": "yoann-kergoat",
                "type": "PROFILE",
                "displayName": "Yoann Kergoat"
              },
              "profile": {
                "_id": "yoann-kergoat",
                "name": "Yoann Kergoat",
                "slug": "yoann-kergoat",
                "deleted": false,
                "language": "fr",
                "locale": "fr_FR",
                "first_name": "Yoann",
                "last_name": "Kergoat",
                "avatar": "https://images.wizbii.com/uploads/84/921/849219f7db6cf99b3b6492ee21881e28_profile_large.png",
                "date_birthday": "1988-11-13T14:57:53+0000",
                "title": "Startivia",
                "location": {
                  "type": "city",
                  "display_value": "Lyon",
                  "city": "Lyon",
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "educations": [],
                "experiences_pro": [],
                "experiences_extra_pro": [],
                "counters": {
                  "like": 57
                },
                "registration_interests": [],
                "connection_source_from_profile": "none",
                "networks": {
                  "networks": {
                    "full": {
                      "type": "full",
                      "result_set": {
                        "rows": 10,
                        "offset": 0,
                        "hits": 4242,
                        "results": []
                      }
                    }
                  }
                },
                "high_res_avatar": "https://images.wizbii.com/uploads/84/921/849219f7db6cf99b3b6492ee21881e28_profile_large@2x.png",
                "is_proxy": true,
                "data_bag": {
                  "avatar_uri": "https://images.wizbii.com/uploads/84/921/849219f7db6cf99b3b6492ee21881e28_profile_large@2x.png"
                }
              },
              "content": "Formation Premiere Pro Perfectionnement avec Startivia ! Contactez-nous et obtenez des financements pour une formation personnalisée !\nhttps://startivia.fr/formation/multimedia/premiere-pro-perfectionnement/",
              "tags": [
                {
                  "_id": "formation",
                  "slug": "formation",
                  "name": "Formation",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "startivia",
                  "slug": "startivia",
                  "name": "Startivia",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "adobe",
                  "slug": "adobe",
                  "name": "Adobe",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "premiere-pro",
                  "slug": "premiere-pro",
                  "name": "Premiere Pro",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "perfectionnement",
                  "slug": "perfectionnement",
                  "name": "Perfectionnement",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "individuel",
                  "slug": "individuel",
                  "name": "Individuel",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "financement",
                  "slug": "financement",
                  "name": "Financement",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "opca",
                  "slug": "opca",
                  "name": "OPCA",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "graphiste",
                  "slug": "graphiste",
                  "name": "Graphiste",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "video",
                  "slug": "video",
                  "name": "Video",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }, {
                  "_id": "montage",
                  "slug": "montage",
                  "name": "Montage",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:43:12+0000",
                  "date_modified": "2018-02-13T09:43:12+0000"
                }
              ],
              "attachment_link": "https://startivia.fr/formation/multimedia/premiere-pro-perfectionnement/",
              "attachment_title": "Formation Adobe Premiere Pro Perfectionnement - Startivia",
              "attachment_picture": "https://images.wizbii.com/uploads/k2/8la/k28la40ouuf0w6vde59drv5t9jrpgbsv_publication_large.jpeg",
              "attachment_picture_width": 1024,
              "attachment_picture_height": 576,
              "attachment_content": "Premiere Pro est un logiciel de montage vidéo gérant de nombreux formats vidéos. Voici notre formation Premiere Pro perfectionnement.",
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 18881690,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "ovbly6honc0gksosck4cok4cgswwwkw",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T09:41:08+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "ovbly6honc0gksosck4cok4cgswwwkw",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T09:41:08+0000",
              "date_modified": "2018-02-13T09:41:08+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "COMPANY",
              "poster_slug": "square-habitat-centre-loire",
              "poster": {
                "slug": "square-habitat-centre-loire",
                "type": "COMPANY",
                "displayName": "Square Habitat Centre Loire"
              },
              "company": {
                "_id": "square-habitat-centre-loire",
                "slug": "square-habitat-centre-loire",
                "date_created": "2018-02-13T09:25:13+0000",
                "date_modified": "2018-02-13T13:45:23+0000",
                "status": "PRIVE",
                "state": "visible",
                "name": "Square Habitat Centre Loire",
                "siren": "739 500 219",
                "tag_line": "Rejoignez notre réseau d'agences immobilières à taille humaine!",
                "is_client": false,
                "employees_number": "65",
                "is_autocomplete": true,
                "industry": "immobilier",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "language": "fr",
                "locale": "fr_FR",
                "links": [],
                "logo": "https://images.wizbii.com/uploads/kf/nyu/kfnyu7eirzxyoigui2uw9h0s6olyw47d_company_large.png",
                "banner": "https://images.wizbii.com/uploads/ta/67c/ta67c3kjwrngeyur7bkw8o10wycky6ke_company_banner_large.jpeg",
                "banner_info": {
                  "offset": {
                    "x": 0,
                    "y": 0
                  },
                  "zoom": 0.6928406466512702
                },
                "home_tab": {
                  "id": "home",
                  "slug": "wizbii-company-messages-message-tab-home",
                  "title": "wizbii.company.messages.message.tab.home",
                  "description": "<p>Avec plus de 690 agences immobili&egrave;res en France, Square Habitat s&rsquo;appuie sur toutes les filiales du Groupe Cr&eacute;dit Agricole pour proposer des services de transactions et de gestion immobili&egrave;res personnalis&eacute;s fond&eacute;s sur des valeurs fortes de transparence et d&rsquo;&eacute;thique.&nbsp;</p>"
                },
                "recruitment_tab": {
                  "id": "recruitment",
                  "slug": "wizbii-company-messages-message-tab-recruitment",
                  "title": "wizbii.company.messages.message.tab.recruitment",
                  "nb_jobs": 0
                },
                "tabs": [],
                "recruiters": [],
                "aliases": [],
                "subsidiaries": [],
                "should_redirect": false,
                "website": "https://www.squarehabitat.fr/espace-recrutement/",
                "followers": [],
                "followed": false,
                "high_res_logo": "https://images.wizbii.com/uploads/kf/nyu/kfnyu7eirzxyoigui2uw9h0s6olyw47d_company_large@2x.png",
                "high_res_banner": "https://images.wizbii.com/uploads/ta/67c/ta67c3kjwrngeyur7bkw8o10wycky6ke_company_banner_large@2x.jpeg",
                "options": [],
                "partner_of": "credit-agricole-val-de-france",
                "partners_validator_emails": []
              },
              "content": "Rejoignez notre réseau d'agences immobilières à taille humaine!",
              "tags": [
                {
                  "_id": "job",
                  "slug": "job",
                  "name": "job",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:41:08+0000",
                  "date_modified": "2018-02-13T09:41:08+0000"
                }, {
                  "_id": "immobilier",
                  "slug": "immobilier",
                  "name": "immobilier",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:41:08+0000",
                  "date_modified": "2018-02-13T09:41:08+0000"
                }, {
                  "_id": "copropriete",
                  "slug": "copropriete",
                  "name": "copropriété",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:41:08+0000",
                  "date_modified": "2018-02-13T09:41:08+0000"
                }, {
                  "_id": "syndic",
                  "slug": "syndic",
                  "name": "syndic",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:41:08+0000",
                  "date_modified": "2018-02-13T09:41:08+0000"
                }, {
                  "_id": "property",
                  "slug": "property",
                  "name": "property",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:41:08+0000",
                  "date_modified": "2018-02-13T09:41:08+0000"
                }, {
                  "_id": "orleans",
                  "slug": "orleans",
                  "name": "orleans",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:41:08+0000",
                  "date_modified": "2018-02-13T09:41:08+0000"
                }
              ],
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 19005690,
              "shared_object_id": "gestionnaire-de-coproprietes-1",
              "shared_object_type": "job",
              "shared_job": {
                "_id": "gestionnaire-de-coproprietes-1",
                "slug": "gestionnaire-de-coproprietes-1",
                "creator_slug": "anne-sophie-rabiller",
                "state": "visible",
                "company_slug": "square-habitat-centre-loire",
                "start_date": "2018-02-13T14:57:53+0000",
                "contract": {
                  "_id": "cdi",
                  "slug": "cdi",
                  "title": "Contrat à durée indéterminée",
                  "title_short": "CDI",
                  "order": 7,
                  "date_created": "2017-08-10T16:12:14+0000",
                  "date_modified": "2017-08-10T16:12:14+0000",
                  "language": "fr",
                  "locale": "fr_FR",
                  "duration": false
                },
                "location": {
                  "type": "city",
                  "city_place_id": "ChIJ44bzndTk5EcRKYDDeeR9uZ4",
                  "display_value": "Orléans",
                  "city": "Orléans",
                  "address": "Orléans, France",
                  "department": "Loiret",
                  "department_short": "45",
                  "state": "Centre-Val de Loire",
                  "state_short": "Centre-Val de Loire",
                  "country": "France",
                  "country_short": "FR",
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 47.902964,
                    "lon": 1.909251
                  },
                  "extra": {}
                },
                "salary": "35 à 45 k€",
                "date_created": "2018-02-13T09:30:04+0000",
                "date_modified": "2018-02-13T09:41:08+0000",
                "language": "fr",
                "locale": "fr_FR",
                "title": "Gestionnaire de Copropriété H/F",
                "mission": "Rattaché (é) directement au directeur d'agence, le (la) gestionnaire de copropriété aura pour mission d’assurer le rôle de syndic d’un ensemble d’immeubles en copropriété et de prendre en charge notamment la gestion juridique, administrative, commerciale et technique de ces immeubles, dans le respect de la réglementation en vigueur et des mandats confiés, dans un souci de qualité de service rendu aux clients.<br />\n<br />\nVous aurez pour missions principales :  <br />\n<br />\nAssurer la gestion administrative, juridique, commerciale et technique d’immeubles en copropriété <br />\n<br />\nNégocier et appliquer les contrats avec les fournisseurs<br />\n<br />\nÉtablir les budgets en collaboration avec le comptable<br />\n<br />\nPréparer et tenir les assemblées générales et les réunions des conseils syndicaux<br />\n<br />\nRédiger les procès-verbaux <br />\n<br />\nAssurer le suivi des contentieux et le suivi administratif des décisions d’assemblée générale<br />\n<br />\nParticiper au développement de l’agence et de son portefeuille <br />\n<br />\nEntreprendre la découverte client (membres du conseil syndical, copropriétaires) et développer la relation client<br />\n<br />\nAppliquer les règles de la profession dans l’entreprise notamment dans les domaines de l’hygiène, la sécurité et le développement durable <br />\n<br />\nDynamiser les synergies entre Square habitat et le Crédit Agricole",
                "profile": "Autonome, rigoureux(se), doté(e) d'un bon esprit d'équipe, vous êtes titulaire d'une formation en immobilier, avec idéalement 2 ans d'expérience réussie en tant que gestionnaire de copropriété.<br />\n<br />\nConnaissances en Property appréciées<br />\n<br />\nMutuelle + intéressement <br />\n<br />\n",
                "degree": {
                  "_id": "bac3",
                  "slug": "bac3",
                  "title": "Licence, M1, Bac +3/4",
                  "title_short": "",
                  "order": 4,
                  "date_created": "2017-08-10T16:12:15+0000",
                  "date_modified": "2017-08-10T16:12:15+0000",
                  "language": "fr",
                  "locale": "fr_FR"
                },
                "source": "wizbii",
                "source_type": "human",
                "online": true,
                "domaine": "IMMOBILIER",
                "skills": [
                  {
                    "_id": "immobilier",
                    "slug": "immobilier",
                    "name": "immobilier",
                    "type": "TAG",
                    "date_created": "2018-02-13T09:40:36+0000",
                    "date_modified": "2018-02-13T09:40:36+0000"
                  }, {
                    "_id": "copropriete",
                    "slug": "copropriete",
                    "name": "copropriété",
                    "type": "TAG",
                    "date_created": "2018-02-13T09:40:36+0000",
                    "date_modified": "2018-02-13T09:40:36+0000"
                  }, {
                    "_id": "syndic",
                    "slug": "syndic",
                    "name": "syndic",
                    "type": "TAG",
                    "date_created": "2018-02-13T09:40:36+0000",
                    "date_modified": "2018-02-13T09:40:36+0000"
                  }, {
                    "_id": "property",
                    "slug": "property",
                    "name": "property",
                    "type": "TAG",
                    "date_created": "2018-02-13T09:40:36+0000",
                    "date_modified": "2018-02-13T09:40:36+0000"
                  }, {
                    "_id": "orleans",
                    "slug": "orleans",
                    "name": "orleans",
                    "type": "TAG",
                    "date_created": "2018-02-13T09:40:36+0000",
                    "date_modified": "2018-02-13T09:40:36+0000"
                  }
                ],
                "languages": [],
                "company": {
                  "_id": "square-habitat-centre-loire",
                  "slug": "square-habitat-centre-loire",
                  "date_created": "2018-02-13T09:25:13+0000",
                  "date_modified": "2018-02-13T13:45:23+0000",
                  "status": "PRIVE",
                  "state": "visible",
                  "name": "Square Habitat Centre Loire",
                  "siren": "739 500 219",
                  "tag_line": "Rejoignez notre réseau d'agences immobilières à taille humaine!",
                  "is_client": false,
                  "employees_number": "65",
                  "is_autocomplete": true,
                  "industry": "immobilier",
                  "location": {
                    "points": {
                      "center": {
                        "lat": 0,
                        "lon": 0
                      }
                    },
                    "geo": {
                      "lat": 0,
                      "lon": 0
                    },
                    "extra": {}
                  },
                  "language": "fr",
                  "locale": "fr_FR",
                  "links": [],
                  "logo": "https://images.wizbii.com/uploads/kf/nyu/kfnyu7eirzxyoigui2uw9h0s6olyw47d_company_large.png",
                  "banner": "https://images.wizbii.com/uploads/ta/67c/ta67c3kjwrngeyur7bkw8o10wycky6ke_company_banner_large.jpeg",
                  "banner_info": {
                    "offset": {
                      "x": 0,
                      "y": 0
                    },
                    "zoom": 0.6928406466512702
                  },
                  "home_tab": {
                    "id": "home",
                    "slug": "wizbii-company-messages-message-tab-home",
                    "title": "wizbii.company.messages.message.tab.home",
                    "description": "<p>Avec plus de 690 agences immobili&egrave;res en France, Square Habitat s&rsquo;appuie sur toutes les filiales du Groupe Cr&eacute;dit Agricole pour proposer des services de transactions et de gestion immobili&egrave;res personnalis&eacute;s fond&eacute;s sur des valeurs fortes de transparence et d&rsquo;&eacute;thique.&nbsp;</p>"
                  },
                  "recruitment_tab": {
                    "id": "recruitment",
                    "slug": "wizbii-company-messages-message-tab-recruitment",
                    "title": "wizbii.company.messages.message.tab.recruitment",
                    "nb_jobs": 0
                  },
                  "tabs": [],
                  "recruiters": [],
                  "aliases": [],
                  "subsidiaries": [],
                  "should_redirect": false,
                  "website": "https://www.squarehabitat.fr/espace-recrutement/",
                  "followers": [],
                  "followed": false,
                  "high_res_logo": "https://images.wizbii.com/uploads/kf/nyu/kfnyu7eirzxyoigui2uw9h0s6olyw47d_company_large@2x.png",
                  "high_res_banner": "https://images.wizbii.com/uploads/ta/67c/ta67c3kjwrngeyur7bkw8o10wycky6ke_company_banner_large@2x.jpeg",
                  "options": [],
                  "partner_of": "credit-agricole-val-de-france",
                  "partners_validator_emails": []
                },
                "is_index": true,
                "project": false,
                "duplicates": [],
                "description_company": "Avec plus de 690 agences immobilières en France, Square Habitat s’appuie sur toutes les filiales du Groupe Crédit Agricole pour proposer des services de transactions et de gestion immobilières personnalisés fondés sur des valeurs fortes de transparence et d’éthique.<br />\nNous recherchons des profils commerciaux pour les domaines de la transaction vente et locative sur les départements du Loiret,du Cher et de la Nièvre!",
                "right_now": true,
                "unique_key": "gestionnaire-de-copropriete-h-f-square-habitat-centre-loire",
                "shares": [
                  {
                    "sharer_type": "company",
                    "sharer_id": "square-habitat-centre-loire",
                    "share_date": "2018-02-13T09:41:08+0000",
                    "share_id": "ovbly6honc0gksosck4cok4cgswwwkw",
                    "company": {
                      "_id": "square-habitat-centre-loire",
                      "slug": "square-habitat-centre-loire",
                      "date_created": "2018-02-13T09:25:13+0000",
                      "date_modified": "2018-02-13T13:45:23+0000",
                      "status": "PRIVE",
                      "state": "visible",
                      "name": "Square Habitat Centre Loire",
                      "siren": "739 500 219",
                      "tag_line": "Rejoignez notre réseau d'agences immobilières à taille humaine!",
                      "is_client": false,
                      "employees_number": "65",
                      "is_autocomplete": true,
                      "industry": "immobilier",
                      "location": {
                        "points": {
                          "center": {
                            "lat": 0,
                            "lon": 0
                          }
                        },
                        "geo": {
                          "lat": 0,
                          "lon": 0
                        },
                        "extra": {}
                      },
                      "language": "fr",
                      "locale": "fr_FR",
                      "links": [],
                      "logo": "https://images.wizbii.com/uploads/kf/nyu/kfnyu7eirzxyoigui2uw9h0s6olyw47d_company_large.png",
                      "banner": "https://images.wizbii.com/uploads/ta/67c/ta67c3kjwrngeyur7bkw8o10wycky6ke_company_banner_large.jpeg",
                      "banner_info": {
                        "offset": {
                          "x": 0,
                          "y": 0
                        },
                        "zoom": 0.6928406466512702
                      },
                      "home_tab": {
                        "id": "home",
                        "slug": "wizbii-company-messages-message-tab-home",
                        "title": "wizbii.company.messages.message.tab.home",
                        "description": "<p>Avec plus de 690 agences immobili&egrave;res en France, Square Habitat s&rsquo;appuie sur toutes les filiales du Groupe Cr&eacute;dit Agricole pour proposer des services de transactions et de gestion immobili&egrave;res personnalis&eacute;s fond&eacute;s sur des valeurs fortes de transparence et d&rsquo;&eacute;thique.&nbsp;</p>"
                      },
                      "recruitment_tab": {
                        "id": "recruitment",
                        "slug": "wizbii-company-messages-message-tab-recruitment",
                        "title": "wizbii.company.messages.message.tab.recruitment",
                        "nb_jobs": 0
                      },
                      "tabs": [],
                      "recruiters": [],
                      "aliases": [],
                      "subsidiaries": [],
                      "should_redirect": false,
                      "website": "https://www.squarehabitat.fr/espace-recrutement/",
                      "followers": [],
                      "followed": false,
                      "high_res_logo": "https://images.wizbii.com/uploads/kf/nyu/kfnyu7eirzxyoigui2uw9h0s6olyw47d_company_large@2x.png",
                      "high_res_banner": "https://images.wizbii.com/uploads/ta/67c/ta67c3kjwrngeyur7bkw8o10wycky6ke_company_banner_large@2x.jpeg",
                      "options": [],
                      "partner_of": "credit-agricole-val-de-france",
                      "partners_validator_emails": []
                    }
                  }
                ],
                "sponsoring_partner": "credit-agricole-val-de-france"
              },
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "jgniyk05hfk0wskok0co4owgkwcg4c",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T09:40:45+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "jgniyk05hfk0wskok0co4owgkwcg4c",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T09:40:45+0000",
              "date_modified": "2018-02-13T09:40:46+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "PROFILE",
              "poster_slug": "firas-abdelmalek",
              "poster": {
                "slug": "firas-abdelmalek",
                "type": "PROFILE",
                "displayName": "Firas Abdelmalek"
              },
              "profile": {
                "_id": "firas-abdelmalek",
                "name": "Firas Abdelmalek",
                "slug": "firas-abdelmalek",
                "deleted": false,
                "language": "fr",
                "locale": "fr_FR",
                "first_name": "Firas",
                "last_name": "Abdelmalek",
                "avatar": "https://images.wizbii.com/uploads/4v/msd/4vmsdv90m8falr9z2irraixyh58kfxk9_profile_large.png",
                "date_birthday": "1992-11-13T14:57:53+0000",
                "title": "Concepteur Digital en recherche de stage",
                "location": {
                  "type": "city",
                  "display_value": "Bordeaux",
                  "city": "Bordeaux",
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "educations": [],
                "experiences_pro": [],
                "experiences_extra_pro": [],
                "counters": {
                  "like": 1
                },
                "registration_interests": [],
                "connection_source_from_profile": "none",
                "networks": {
                  "networks": {
                    "full": {
                      "type": "full",
                      "result_set": {
                        "rows": 10,
                        "offset": 0,
                        "hits": 376,
                        "results": []
                      }
                    }
                  }
                },
                "high_res_avatar": "https://images.wizbii.com/uploads/4v/msd/4vmsdv90m8falr9z2irraixyh58kfxk9_profile_large@2x.png",
                "is_proxy": true,
                "data_bag": {
                  "avatar_uri": "https://images.wizbii.com/uploads/4v/msd/4vmsdv90m8falr9z2irraixyh58kfxk9_profile_large@2x.png"
                }
              },
              "content": "Hello! Bonjour cher réseau!\n\nJe suis actuellement à la recherche d'une #opportunité de #stage en tant que #Concepteur #Digital en #France mais aussi à l' #International.\n\nAprès une expérience passionnante dans le #Design de l' #Information  et la #Communication #Technique, j'ai décidé de poursuivre mon cursus avec un Master en Humanités Digitales.\n\nAu cours de ma formation et de mes projets professionnels, j'ai acquis des compétences dans la #gestion de #projet, le #développement #web, le #design #graphique et #audiovisuel, la #communication #technique et #pédagogique et une approche importante  sur le Design Thinking et l’expérience #Utilisateur #UX.\n\nJe suis disponible et ouvert à toute opportunité, sans aucune préférence pour le secteur d'activité car je peux m'adapter rapidement.\n\nParlant #Arabe, #Français et #Anglais, je suis prêt à vivre la diversité.\n\nN’hésitez pas à me contacter directement via LinkedIn, email ou par téléphone.\n\nMerci d'avance pour votre partage et votre soutien!\n\n#search #internship #opportunity #digital #design #content #writer #editor #community #social #media #manager #specialist #information #communication #user #experience  #project #management #france #international #french #english",
              "tags": [
                {
                  "_id": "stage",
                  "slug": "stage",
                  "name": "stage",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "concepteur",
                  "slug": "concepteur",
                  "name": "concepteur",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "digital",
                  "slug": "digital",
                  "name": "digital",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "graphisme-multimedia-design",
                  "slug": "graphisme-multimedia-design",
                  "name": "graphisme / multimédia / design",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "web-content",
                  "slug": "web-content",
                  "name": "web content",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "information",
                  "slug": "information",
                  "name": "information",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "communication",
                  "slug": "communication",
                  "name": "Communication",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "social-media",
                  "slug": "social-media",
                  "name": "social média",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "community-management",
                  "slug": "community-management",
                  "name": "Community Management",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "gestion-de-projet",
                  "slug": "gestion-de-projet",
                  "name": "Gestion De Projet",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "ux-design",
                  "slug": "ux-design",
                  "name": "UX Design",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "editor",
                  "slug": "editor",
                  "name": "editor",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "redacteur-web",
                  "slug": "redacteur-web",
                  "name": "redacteur web",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }, {
                  "_id": "internship",
                  "slug": "internship",
                  "name": "internship",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:45+0000",
                  "date_modified": "2018-02-13T09:40:45+0000"
                }
              ],
              "attachment_picture": "https://images.wizbii.com/uploads/wn/1w5/wn1w54y7wejpg4urp8radydmxjli0cho_publication_large.png",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/9cpiqdjjfre4c8tvvs8jgtootywibrr1.png",
              "attachment_picture_width": 1600,
              "attachment_picture_height": 1099,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 19028693,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "5mpqp8tvb0g0w4kkww88ckc08g0ggsg",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T09:40:07+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "5mpqp8tvb0g0w4kkww88ckc08g0ggsg",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T09:40:07+0000",
              "date_modified": "2018-02-13T09:40:07+0000",
              "language": "fr",
              "locale": "fr_FR",
              "poster_type": "PROFILE",
              "poster_slug": "mariam-laouini-khalifa",
              "poster": {
                "slug": "mariam-laouini-khalifa",
                "type": "PROFILE",
                "displayName": "MARIAM LAOUINI KHALIFA"
              },
              "profile": {
                "_id": "mariam-laouini-khalifa",
                "name": "MARIAM LAOUINI KHALIFA",
                "slug": "mariam-laouini-khalifa",
                "deleted": false,
                "language": "fr",
                "locale": "fr_FR",
                "first_name": "MARIAM",
                "last_name": "LAOUINI KHALIFA",
                "date_birthday": "1994-11-13T14:57:53+0000",
                "location": {
                  "type": "city",
                  "display_value": "Metz",
                  "city": "Metz",
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "educations": [],
                "experiences_pro": [],
                "experiences_extra_pro": [],
                "counters": {
                  "like": 0
                },
                "registration_interests": [],
                "connection_source_from_profile": "none",
                "networks": {
                  "networks": {
                    "full": {
                      "type": "full",
                      "result_set": {
                        "rows": 10,
                        "offset": 0,
                        "hits": 5,
                        "results": []
                      }
                    }
                  }
                },
                "is_proxy": true,
                "data_bag": []
              },
              "content": "J'ai besoin de travailler, je suis nouveau à metz et je ne parle pas français",
              "tags": [
                {
                  "_id": "tout",
                  "slug": "tout",
                  "name": "tout",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:40:07+0000",
                  "date_modified": "2018-02-13T09:40:07+0000"
                }
              ],
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 19066693,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "pysnib7ori8wgkcc8s4wsc08kw84g0o",
            "type": "publication",
            "reasons": [
              {
                "type": "popular",
                "reason_steps": []
              }
            ],
            "date": "2018-02-13T09:37:51+0000",
            "date_cached": "2018-02-13T14:57:53+0000",
            "publication": {
              "_id": "pysnib7ori8wgkcc8s4wsc08kw84g0o",
              "type": "SHARE",
              "visibility": "public",
              "status": "visible",
              "date_created": "2018-02-13T09:37:51+0000",
              "date_modified": "2018-02-13T09:37:53+0000",
              "language": "en",
              "locale": "en_GB",
              "poster_type": "PROFILE",
              "poster_slug": "1760",
              "poster": {
                "slug": "1760",
                "type": "PROFILE",
                "displayName": "Алена Калинченкова"
              },
              "profile": {
                "_id": "1760",
                "name": "Алена Калинченкова",
                "slug": "1760",
                "deleted": false,
                "language": "en",
                "locale": "en_GB",
                "first_name": "Алена",
                "last_name": "Калинченкова",
                "avatar": "https://images.wizbii.com/uploads/bk/ux2/bkux2yzyh9g5sg9ckq6mxhpx3x9oh4ck_profile_large.jpeg",
                "date_birthday": "1973-11-13T14:57:53+0000",
                "location": {
                  "points": {
                    "center": {
                      "lat": 0,
                      "lon": 0
                    }
                  },
                  "geo": {
                    "lat": 0,
                    "lon": 0
                  },
                  "extra": {}
                },
                "educations": [],
                "experiences_pro": [],
                "experiences_extra_pro": [],
                "counters": {
                  "like": 0
                },
                "registration_interests": [],
                "connection_source_from_profile": "none",
                "networks": {
                  "networks": {
                    "full": {
                      "type": "full",
                      "result_set": {
                        "rows": 10,
                        "offset": 0,
                        "hits": 0,
                        "results": []
                      }
                    }
                  }
                },
                "high_res_avatar": "https://images.wizbii.com/uploads/bk/ux2/bkux2yzyh9g5sg9ckq6mxhpx3x9oh4ck_profile_large@2x.jpeg",
                "is_proxy": true,
                "data_bag": {
                  "avatar_uri": "https://images.wizbii.com/uploads/bk/ux2/bkux2yzyh9g5sg9ckq6mxhpx3x9oh4ck_profile_large@2x.jpeg"
                }
              },
              "content": "Cari colleghi!\nCerco il lavoro dell'assistente vendente In Italia!\nHo lavorato con tali marche italiane come PENNYBLACK, Twin-Set e Liviana Conti , WYCON in Mosca. Ho l'esperienza in vendite più di 10 anni. Possiedo tecnici di vendite\nMi piace essere abile e aiutare la gente. \nAmo la moda e сomunico in modo che i clienti sempre ritornino. \nSono capace per vendere e derivo da esso il piacere.\n \tHo buoni risultati ai lavori precedenti. \nE sono sicuro che la persona veramente innamorata del lavoro come me, sono più che altri, è capace per portare a termine il successo!\nIl lavoro in Italia, considero come una possibilità di crescita professionale! Sono pronto a cominciare con l'inizio, fare uso della mia esperienza. Voglio capire ed essere utile per i clienti italiani e anche i clienti da Russia di chi c'è molto in Italia. \n\nDistinti saluti, Alena Kalinchenkova",
              "tags": [
                {
                  "_id": "sales-assistant",
                  "slug": "sales-assistant",
                  "name": "Sales Assistant",
                  "type": "TAG",
                  "date_created": "2018-02-13T09:37:51+0000",
                  "date_modified": "2018-02-13T09:37:51+0000"
                }
              ],
              "attachment_picture": "https://images.wizbii.com/uploads/uw/h6m/uwh6mtd8jnbif76a340qraszzi6e6xwx_publication_large.jpeg",
              "attachment_picture_source": "https://images.wizbii.com/api/image/v1/y12bhem3wqdx5wtsjkt301kdu7kgq2md.jpeg",
              "attachment_picture_width": 413,
              "attachment_picture_height": 531,
              "comments": [],
              "likes": [],
              "reports": [],
              "delta": 19202693,
              "shares": [],
              "mentions": [],
              "data_bag": []
            }
          }, {
            "id": "search-engine",
            "type": "search-engine",
            "date": "2018-02-13T14:57:53+0000",
            "nb_job": 200000
          }, {
            "id": "facebook-connect",
            "type": "facebook-connect",
            "date": "2018-02-13T14:57:53+0000"
          }, {
            "id": "suggested-job",
            "type": "suggested-job",
            "date": "2018-02-13T14:57:53+0000",
            "count_suggested_jobs": 33
          }, {
            "id": "relation-new",
            "type": "relation-new",
            "date": "2018-02-13T14:57:53+0000",
            "count_relation_new": 0,
            "count_total_relations": 1912
          }, {
            "id": "gmail-connect",
            "type": "gmail-connect",
            "date": "2018-02-13T14:57:53+0000",
            "already_linked": true
          }
        ]
      };
    default:
      return state;
  }
};
