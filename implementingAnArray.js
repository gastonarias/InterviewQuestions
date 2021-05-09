class MyArray {
  constructor(){
    this.length = 0;
    this.data = {};
  }

  get(index){
    return this.data[index];
  }

  push(item){
    this.data[this.length] = item;
    this.length ++;
  }

  //o(1)
  pop(){
    const lastItem = this.data[this.length- 1];
    delete this.data[this.length - 1];
    this.length--;

    return lastItem;
  }

  //o(1)
  delete(index){
    const item = this.data[index];
    this.shiftItems(index);

    return item;
  }

  //O(n)
  shiftItems(index){
    for(let i = index; i < this.length -1; i++){
      this.data[i] = this.data[i+1];
    }
    delete this.data[this.length -1];
    this.length--; 
  }
}

const newArray = new MyArray();
newArray.push('hola');
newArray.push('como');
newArray.push('te va');
newArray.push('que');
newArray.push('pasa');

newArray.delete(1);
newArray.push('todo');
newArray.push('bien');

newArray.shiftItems(0);
newArray.shiftItems(1);


console.log(newArray);
