// TypeError in runtime
function runtimeGetIndexOf(language, part) {
  return language.indexOf(part);
}

runtimeGetIndexOf('Typescript', 'script'); // 4
runtimeGetIndexOf(42, 'script'); // Uncaught TypeError: language.indexOf is not a function at getIndexOf

// TypeError in compile time
function getIndexOf(language: string, part: string): number {
  return language.indexOf(part);
}

getIndexOf('Typescript', 'script'); // 4
getIndexOf(42, 'script'); // Argument of type '42' is not assignable to parameter of type 'string'.
