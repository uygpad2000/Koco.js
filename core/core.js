function h(tag,a,b,c){

  var data;
  var text;
  var parent;
  var children;

  if (b != undefined){
    if (a != null){
      data = a;
    }
    if (Array.isArray(b)){
      children=b;
    }
    if (typeof b === 'string' || typeof b === 'number'){
      text = b;
    }
  }

  else if (a != undefined && a !== null){
    if (Array.isArray(a)){
      children = a;
    }
    if (typeof a === 'string' || typeof a === 'number'){
      text = a;
    }
  }

  if (c && c.tag){
    parent = c;
  }

  return vn(tag,data,children,parent,text);

}

function vn(tag,data,children,parent,text) {
  
  var identifier;

  if (data !== null && typeof data === 'object'){
    identifier = data.identifier;
  }

  return {tag,data,text,children,parent,identifier};

}
