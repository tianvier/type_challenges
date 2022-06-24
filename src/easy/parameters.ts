/**
 * 
 * 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
 */

type Parameters1<T> = T extends (...arg: infer P) => any ? P : [];


//function aaa(c: Parameters1);