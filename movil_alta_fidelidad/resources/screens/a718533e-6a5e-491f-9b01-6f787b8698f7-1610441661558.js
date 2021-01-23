jQuery("#simulation")
  .on("click", ".s-a718533e-6a5e-491f-9b01-6f787b8698f7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_1 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1 span": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_4 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_3 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_2 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2 span": {
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
    } else if(jFirer.is("#s-Image_2")) {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_2 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2 span": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_4 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_3 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_1 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1 span": {
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
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_3 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3 span": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_4 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_2 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_1 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1 span": {
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
        },
        {
          "blocks": [
            {
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_4 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_4 span": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_3 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_2 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Image_1 svg": {
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
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-a718533e-6a5e-491f-9b01-6f787b8698f7 #s-Paragraph_1 span": {
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
        },
        {
          "blocks": [
            {
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
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1")) {
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
    } else if(jFirer.is("#s-Hotspot_2")) {
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
    } else if(jFirer.is("#s-Hotspot_3")) {
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
    }
  });