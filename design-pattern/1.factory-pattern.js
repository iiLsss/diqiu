class Shape{

}

// 圆形类
class Circle extends Shape{
  draw() {
    console.log('draw circle')
  }
}
// 方形类
class Square extends Shape{
  draw() {
    console.log('draw square')
  }
}
// 形状工厂类
class ShapeFactory{
  static getShape(type) {
    if (type === 'circle'){
      return new Circle()
    }
    if (type === 'square') {
      return new Square()
    }
    return null
  }

}
// 使用工厂模式
const circle = ShapeFactory.getShape('circle')
circle.draw() // draw circle
const square = ShapeFactory.getShape('square')
square.draw() // draw square