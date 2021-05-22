class HashTable{
  
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash =0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }
  get(key){
    const address = this._hash(key);
    const cell = this.data[address];
    if(cell){
      for(let i = 0; i < cell.length; i++){
        if(cell[i][0]===key)
          return cell[i][1];
      }
    }
  }

  keys(){
    let keysArray = [];
    for(let i =0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  }
}

const hashT = new HashTable(10);
hashT.set('grapes', 10000);
hashT.set('grapes', 10000);
hashT.set('graps', 50000);
hashT.set('apples', 30000); 
hashT.set('onions', 20000);
hashT.keys();





