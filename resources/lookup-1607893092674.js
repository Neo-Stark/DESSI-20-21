(function(window, undefined) {
  var dictionary = {
    "6a1a596a-fe05-4a05-8479-4ef31fbc9eae": "5-1",
    "04cebbfa-b279-4fb2-86d4-b8592bf2598c": "1-1",
    "8c7e1fa3-e8e0-4f1e-a679-7eafdc2bcb5c": "reservas",
    "31b71912-26d2-40e0-b856-3887d8bde5e8": "galeria1",
    "c235f9cc-20f7-49ad-bf78-c6a3560d81aa": "4-1",
    "4ccf9106-2b76-41af-8eca-abc1948b1ad4": "galeria2",
    "73fcfbdc-ca7b-40ff-ab39-6b6381d2e03d": "inicio",
    "eb5fe1d0-40a1-4a09-8633-e37100f3d1e1": "3-1",
    "d4743314-4013-4d16-a4ad-5b04151365c3": "opiniones",
    "0bfc5821-1cd2-4cbf-bd06-eba956c2d4c4": "perfil",
    "959ef545-be1a-487f-9178-3345e6b32cce": "carta",
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