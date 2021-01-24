(function(window, undefined) {
  var dictionary = {
    "1311e5a1-6f7c-4cdc-9491-9c68a4b0b520": "home",
    "0a748df6-36e4-4d33-989e-8169b132c744": "make_reservation",
    "1d77c36d-27cc-4e0c-94eb-4b4e5c40f184": "valoraciones",
    "34d84083-9b59-432f-a41d-51847340144f": "reservas",
    "7734b1f6-54e1-4870-b5a3-0b43eae6bbea": "restaurant_detail",
    "4cec24ae-401d-4ad5-8334-326b4c51c0d8": "mis_favoritos",
    "67fc8e49-a84f-4f98-bdd0-d76e2fcf767c": "notificaciones",
    "4bf654c5-7c92-4bdc-860a-90cefbedd599": "inicio_sesion",
    "01dba829-267d-47a0-b9ac-288d95664238": "mis_reseñas",
    "63f6dd1a-58d2-4630-9288-d1ac9d487f15": "buscar",
    "e9530130-30bd-4855-8fdf-aceb4ddec330": "registro",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);