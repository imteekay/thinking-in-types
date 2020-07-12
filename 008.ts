// TypeError in runtime
function getIndexOf(string: any): number {
  return string.indexOf('script');
}

getIndexOf('Typescript');
getIndexOf(42);

// TypeError in compile time
function getIndexOf(string: string): number {
  return string.indexOf('script');
}

getIndexOf('Typescript');
getIndexOf(42); // Argument of type '42' is not assignable to parameter of type 'string'.
