/**
 * 
 * 在类型系统里实现 JavaScript 的 Array.includes 方法，这个类型接受两个参数，返回的类型要么是 true 要么是 false。

举例来说，

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`
 */

type Includes<T extends any[], U> = U extends T[number] ? true : false;

//#### [number] 下标表示任意一项，而 extends T[number] 就可以实现数组包含的判定

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`


type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>;


//### 正确答案
type MyEqual<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type Includes1<T extends readonly any[], U> = T extends [infer P, ...infer Rest]
  ? MyEqual<P, U> extends true
    ? true
    : Includes<Rest, U>
  : false;

  const aa = 11;
  console.log("🚀 ~ file: includes.ts ~ line 34 ~ aa", aa)
  