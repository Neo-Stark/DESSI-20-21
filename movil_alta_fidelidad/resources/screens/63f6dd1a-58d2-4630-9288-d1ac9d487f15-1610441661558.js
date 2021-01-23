jQuery("#simulation")
  .on("click", ".s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_2" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ "1 resultado para ",{
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      } ]
                    }
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
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
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
    } else if(jFirer.is("#s-Image_3")) {
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
    } else if(jFirer.is("#s-Panel_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ]
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
    } else if(jFirer.is("#s-Image_4")) {
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
    } else if(jFirer.is("#s-Image_6")) {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_6 svg": {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_10 span": {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_7 svg": {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_13 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_12 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_11 span": {
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
    } else if(jFirer.is("#s-Image_7")) {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_7 svg": {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_11": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_11 span": {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Image_6 svg": {
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
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_13": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_13 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_12": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_12 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_10": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-63f6dd1a-58d2-4630-9288-d1ac9d487f15 #s-Paragraph_10 span": {
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
    } else if(jFirer.is("#s-Image_9")) {
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
                    "target": "screens/a718533e-6a5e-491f-9b01-6f787b8698f7"
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