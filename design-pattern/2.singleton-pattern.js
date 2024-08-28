
// IIFE
const Singleton = (function(){
  let instance 
  
  function createInstance() {
    const object = new Object('I am this instance')
    return object
  }

  return {
    getInstance: function(){
      if (!instance) {
        instance = createInstance()
      }
    }
  }
})()

const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()

console.log(instance1 === instance2) // true


// ES6 使用类和静态属性

class SingletonES6{
  constructor() {
    if (SingletonES6.instance) {
      return SingletonES6.instance
    }
    this.data = 'I am this instance'
    SingletonES6.instance = this
    return this
  }
  log() {
    console.log('=====>log', this.data)
  }
}

// 使用单例模式
const instancees1 = new SingletonES6();
const instancees2 = new SingletonES6();

console.log(instancees1 === instancees2); // 输出: true
instancees1.log()


// 使用模块系统


class SingletonModule{
  constructor() {
    if (SingletonModule.instance) {
      return SingletonModule.instance
    }
    this.data = 'I am this SingletonModule instance'
    return this
  }
  log() {
    console.log('=====>log', this.data)
  }
}

