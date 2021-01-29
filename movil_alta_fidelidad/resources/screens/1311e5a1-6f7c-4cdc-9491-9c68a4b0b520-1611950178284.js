jQuery("#simulation")
  .on("click", ".s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "-305"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4cec24ae-401d-4ad5-8334-326b4c51c0d8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/01dba829-267d-47a0-b9ac-288d95664238"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/67fc8e49-a84f-4f98-bdd0-d76e2fcf767c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "variable",
                "element": "registrado"
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_1","#s-Dynamic_Panel_1" ],
                    "top": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "left": {
                      "type": "pinbeginning",
                      "value": "0"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "easeInQuad",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Paragraph_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4bf654c5-7c92-4bdc-860a-90cefbedd599"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7734b1f6-54e1-4870-b5a3-0b43eae6bbea"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1311e5a1-6f7c-4cdc-9491-9c68a4b0b520"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Image_19 svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_14 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Image_21 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Image_20 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_16 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_15 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/63f6dd1a-58d2-4630-9288-d1ac9d487f15"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Image_20 svg": {
                      "attributes": {
                        "overlay": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_15": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_15 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Image_21 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Image_19 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_16": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_16 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_14": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-1311e5a1-6f7c-4cdc-9491-9c68a4b0b520 #s-Paragraph_14 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "datatype": "variable",
                "element": "registrado"
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/34d84083-9b59-432f-a41d-51847340144f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/4bf654c5-7c92-4bdc-860a-90cefbedd599"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });