type User = {
  name: string;
  username: string;
  email: string;
};

// null and non-null all mixed
class UserFetcher {
  user: User | null;

  constructor() {
    this.user = null;
  }

  async init(): Promise<void> {
    this.user = await fetchUser();
  }

  getUserName() {
    return this.user.username;
  }
};

const getUser = async () => {
  const fetcher = new UserFetcher();
  await fetcher.init();
  return fetcher.getUserName();
};

// -------------------------------------------

// Isolate null from non-null
class UserFetcher {
  user: User;

  constructor(user) {
    this.user = user;
  }

  static async init(): Promise<UserFetcher> {
    const user = await fetchUser();
    return new UserFetcher(user);
  }

  getUserName() {
    return this.user.username;
  }
};

const getUser = async () => {
  const fetcher = await UserFetcher.init();
  return fetcher.getUserName();
};
