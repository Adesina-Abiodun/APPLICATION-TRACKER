


export class myApplication{
    public companyLogo: string;
    public companyName: string;
    public role: string;
    public location: string;
    public salary: number;
    public tools: string[];
    public time: string;
    

    constructor(companyLogo: string, companyName: string, role: string, location: string, salary: number, tools: string[ ], time: string){
        this.companyLogo = companyLogo;
        this.companyName = companyName
        this.role = role;
        this.location = location;
        this.salary = salary;
        this.tools = tools;
        this.time = time;
    }
}