//Learn how polyfills work and how to write polyfill from scratch
const arr = [1,2,3,4];


//myMap
Array.prototype.mymap = function(callback){
    let obj = this;
    const mapped=[];

    for(let i=0;i<obj.length;i++)
    {
        if(obj.hasOwnProperty(i))
        mapped.push(callback(obj[i],i,obj))
    }
    return mapped;
}

const mapArray = arr.mymap(x=>x*2);
console.log(mapArray);


//Myfilter
Array.prototype.myfilter = function(callback){
    let obj = this;
    const filter=[];

    for(let i=0;i<obj.length;i++)
    {
        if(obj.hasOwnProperty(i))
        {
            if(callback(obj[i],i,obj))
                {
                    filter.push(obj[i])
                }
        }
        
    }
    return filter;
}


const filtered = arr.myfilter(x=> x>2)
console.log(filtered);

//MyReduce
Array.prototype.myReduce = function(callback,acc){
    let obj = this;
    let startIndex =0;
    if(acc === undefined)  //since acc can be null
    {
        acc = obj[0];
        startIndex = 1;
    }

    for(let i=startIndex;i<obj.length;i++)
    {
        if(obj.hasOwnProperty(i))
        acc = callback(ans,obj[i],i,obj);
    }
    return acc;
}

const myreducarr = arr.myReduce((acc,i)=>acc+i,0);
console.log(myreducarr)

//Array.includes
Array.prototype.myIncludes = function (number) {
  let obj = this;
  for (let i = 0; i < obj.length; i++) {
    if (obj[i] === number) return true;
  }

  return false;
};


if(arr.myIncludes(2))
    console.log('sdsd')

//#region  Functional Polyfills

//bind()
let obj ={
    firstname:'shivam',
    lastName:'singh'
}

function greet(hometown,country)
{
    console.log(`Hey ${this.firstname} ${this.lastName} from ${hometown} and ${country}`)
}

//bind
let bindans = greet.bind(obj,'VNS');
console.log(bindans('India'))

Function.prototype.myBind = function(...args){
    let obj = this;
    let params = args.slice(1)
    return function(...localargs){
        obj.apply(args[0],[...params,...localargs])
    }
}

let mybindans = greet.myBind(obj,'VNS');
console.log(mybindans('India'))

//call
let callans = greet.call(obj,'VNS','India');

Function.prototype.myCall = function(obj={},...args){
    if(typeof this !== 'function')
    {
        throw TypeError('mycall called on non function')
    }

    obj.fn=this;
    const result = obj.fn(...args);
    delete obj.fn;
    return result;
}

greet.myCall(obj,'VNS','India');

//Apply

let applyans = greet.apply(obj,['VNS','India'])

Function.prototype.myApply = function (obj = {},args) {
  if (typeof this !== "function") {
    throw TypeError("mycall called on non function");
  }

  obj.fn=this;
  const result = obj.fn(...args);
  delete obj.fn;
  return result;
};
let myApplyans = greet.myApply(obj,['VNS','India'])

//#endregion

