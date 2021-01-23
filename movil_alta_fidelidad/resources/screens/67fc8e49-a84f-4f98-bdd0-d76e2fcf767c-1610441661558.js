jQuery("#simulation")
  .on("click", ".s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c .click", function(event, data) {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_1 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_4 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_3 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_2 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_2 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_4 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_3 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_1 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_3 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_4 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_2 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_1 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_4 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_4 span": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_3 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_2 svg": {
                      "attributes": {
                        "overlay": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_1 svg": {
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
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#A9A9A9"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Paragraph_1 span": {
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_1" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_1" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
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
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Button_3" ],
                    "effect": {
                      "type": "fade",
                      "easing": "linear",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Button_3" ],
                    "effect": {
                      "type": "fade",
                      "duration": 200
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_2" ]
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Image_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_10 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_9 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_12 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_11 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Image_8 svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Button_5": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 5.0px 7.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#3700B3"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Button_5": {
                      "attributes": {
                        "filter": "drop-shadow(-0.0px 2.0px 2.5px #999999)",
                        "text-shadow": "none",
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c #s-Button_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#A9A9A9"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "effect": {
                      "type": "blind",
                      "duration": 500
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "valoracion" ],
                    "value": "TRUE"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
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
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dynamic_Panel_1" ],
                    "effect": {
                      "type": "blind",
                      "duration": 500
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
    }
  })
  .on("focusin", ".s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_2" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_4" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
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
    }
  })
  .on("focusout", ".s-67fc8e49-a84f-4f98-bdd0-d76e2fcf767c .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_2" ]
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_4" ]
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