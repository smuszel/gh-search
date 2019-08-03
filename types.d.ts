declare type User = {
    login: string;
    id: number;
    avatar_url: string;
};

declare type UserContact = {
    name: string;
    company: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    url: string;
    repos_url: string;
    score: number;
    html_url: string;
};

declare type UserDetailed = User & UserContact;

declare type RequestMeta = {
    loading: boolean;
    keyword: string;
    errors: string | null;
    data: User[] | null;
};

declare type State = {
    requests: RequestMeta[];
    keyword: string;
    users: User[];
    selectedUser: UserDetailed | null;
};
