type UserResponse = {
  name: string;
  email: string;
  username: string;
  age: number;
  isActive: boolean;
};

function matchDomain(email: string) {
  return email.endsWith('email.com');
}

matchDomain(undefined); // Uncaught TypeError: Cannot read property 'endsWith' of undefined

// --------------------------------------------------------------------

type UserResponse = {
  name: string;
  email?: string;
  username: string;
  age: number;
  isActive: boolean;
};

function matchDomain(email: string) {
  return email.endsWith('email.com');
}

function matchDomain(email?: string) {
  return email.endsWith('email.com');
}

function matchDomain(email?: string) {
  if (!email) return false;
  return email.endsWith('email.com');
}

matchDomain(undefined); // Uncaught TypeError: Cannot read property 'endsWith' of undefined
