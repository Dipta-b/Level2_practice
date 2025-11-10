//* ("|" or) orthat ekta na hole onnota hobe
//* (And &) mane shobgula

type UserRole = 'admin' | 'user';

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'Admin Dashboad';
    }
    else if (role === 'user') {
        return 'User Dashboard';
    }
    else {
        return 'guest Dashboard'
    }
}

getDashboard('admin')

//intersection  &

type Employee = {
    name: string;
    id: string;
    phoneNum: string;

};

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeeManager = Employee & Manager;

const chshb: EmployeeManager = {
    name: 'Dipta',
    id: '134',
    phoneNum: '0134553',
    designation: 'Manager and Employee',
    teamSize: 32
}
