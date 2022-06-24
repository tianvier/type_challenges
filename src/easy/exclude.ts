/*
实现内置的Exclude <T, U>类型，但不能直接使用它本身。

从联合类型T中排除U的类型成员，来构造一个新的类型。
*/


type A = 1 | 2 | 3

type B = 2 | 4;
type Exclude1<T,U> = T extends U ? never : T;


const C: Exclude1<A,B> = 1;