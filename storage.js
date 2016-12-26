
function printStack(){
  var strStorageKeys = window.sessionStorage["STORAGE_KEYS"];
  var objStorageKeys = JSON.parse(strStorageKeys);

  console.warn('SessionCache:', objStorageKeys.length);
  for (var i = 0; i < objStorageKeys.length; i++) {
    var objStorageKey = objStorageKeys[i];
    console.log('No:', i, ',key:', objStorageKey.key, ',expiretime:', new Date(objStorageKey.expiretime).toLocaleString());
    printStackItem(objStorageKey.key);
  }
}

function printStackItem(key){
  if(key === 'page_manager_key') return;
  var strStorage = window.sessionStorage[key];
  if(strStorage){
    var objStorage = JSON.parse(strStorage);
    // console.log(key, objStorage);
    console.log(key, 'value:', objStorage.value, ',savetime:', new Date(objStorage.savetime).toLocaleString(), ',expiretime:', new Date(objStorage.expiretime).toLocaleString());
  }
}

function printPageStack(){
  var strPageManager = window.sessionStorage["page_manager_key"];
  if(strPageManager){
    var objPageManager = JSON.parse(strPageManager);

    var strPageManagerStack= objPageManager.value.stack;
    var objPageManagerStack = JSON.parse(strPageManagerStack);
    // console.log(objPageManagerStack);

    console.warn('PageManager:', objPageManagerStack.length);
    for (var i = 0; i < objPageManagerStack.length; i++) {
      var objPageManagerStackItem = objPageManagerStack[i];
      var path = objPageManagerStackItem.path;
      var query = objPageManagerStackItem.query;
      var back = objPageManagerStackItem.back;
      var from = objPageManagerStackItem.from;
      var redirect = objPageManagerStackItem.redirect;
      var current = objPageManagerStackItem.current;
      console.log('path:',path,'query:',query,'back:',back,'from:',from,'redirect:',redirect,'current:',current);
    }
  }
}

printStack();
printPageStack();
