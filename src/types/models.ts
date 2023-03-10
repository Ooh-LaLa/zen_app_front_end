/* ---------===== custom props ====--------- */
export interface Quote {
  quote: string;
  profileId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
}


/* ---------===== auth models =====--------- */

export interface Profile {
  name: string;
  photo?: string;
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  name: string;
  email: string;
  profile: { id: number };
  id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Zen_Quote {
  quote: string;
  profileId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
}

