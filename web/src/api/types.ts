export type LogInDto = {
    userName: string;
    password: string;
};

export type RegistrationDto = LogInDto;

export type Error = {
    message: string;
};
