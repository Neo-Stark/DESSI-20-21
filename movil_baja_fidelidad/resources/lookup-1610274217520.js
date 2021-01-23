(function(window, undefined) {
  var dictionary = {
    "19c4d8be-242a-4d65-bf50-33fbfac16225": "7",
    "0d7019b7-cfb2-4d25-9a3b-1a967a6bc345": "3 - copia",
    "7a00c0c8-daf8-45f4-8e9b-b2b5059eb438": "12",
    "cd322bf3-d559-4b47-a47e-c92b304fa884": "2",
    "3df3dc0e-3cdd-47a0-a291-e36361522b7b": "1",
    "5ab09672-320b-4d94-9eb0-7258d4973819": "10",
    "c8b81636-d398-4597-807f-f493221f5171": "8",
    "d1ee9c66-c6fe-449c-9538-b1500d4f40c3": "19",
    "2aff7189-49c1-40cf-ad08-859ff631c641": "9",
    "f13d0d96-0242-4565-907e-5ef430c09535": "16",
    "d850868d-dcf5-4716-b221-460a89f67904": "13",
    "87549b4a-88c8-4697-a0c2-e9c12c7ef950": "14",
    "94766b50-f1c9-47e7-9e7a-2735a4a84f48": "22",
    "dfac4d88-ae85-4d19-8ed0-810618489379": "21",
    "e8df9162-8f15-4684-a78a-90ff2b6ff7c5": "3",
    "8a598707-b24e-4dfe-ab70-08bc9ea0e53a": "11",
    "cec25515-bea1-4b36-a523-53dae0b6cebd": "18",
    "0b67988d-89f5-46c9-aa0c-96494bbacb1c": "15",
    "5f5c7c1e-bfc3-4dc5-969f-332425298e35": "photo6041881605573817167",
    "597fdf53-259b-46f2-b555-ebe504458a9b": "4",
    "0f2b9e2b-86fa-4abf-b625-3a65cdd0802e": "5",
    "02163eba-45df-4acd-a5a9-139e306a0ff3": "6",
    "30751c48-7570-4a84-861e-b2a8d5764902": "20",
    "572f61bc-c46e-4a1a-8d52-21c69c1eecd4": "17",
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