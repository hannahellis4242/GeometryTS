import Vector2, { vector2 } from "../../src/Geometry2D/Vector2D"

interface Shape{}
class Circle implements Shape{
    constructor(public readonly x:number,public readonly y:number,public readonly r:number){};}

namespace CircleFromThreePointsTest{
    interface Params{
            point1:Vector2,
            point2:Vector2,
            point3:Vector2,
            expectedCircle:Circle;
        }

const checkCircle = (result:Circle,expected:Circle){
    expect(result.x).toBeCloseTo(expected.x);
    expect(result.y).toBeCloseTo(expected.y);
    expect(result.r).toBeCloseTo(expected.r);
}

const circleFromThreePoints = (p1:Vector2,p2:Vector2,p3:Vector2):Circle=>{
    throw new Error("TODO");
}

describe("circle from three points", () => {
    const testCases:Params[]= [{point1:vector2(0,0),point2:vector2(1,1),point3:vector2(0,2),expectedCircle:new Circle(0,1,1)}];
    
    testCases.forEach((testCase)=>test("",()=>{
        const result = circleFromThreePoints(testCase.point1,testCase.point2,testCase.point3);
        checkCircle(result,testCase.expectedCircle);
    }))
})
    }