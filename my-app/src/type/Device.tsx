export interface Device {
    ID?: String,
    IP?: String,
    Name?: String,
    TypeDevice?: String,
    UserName?: String,
    Password?: String,
    Connect?: string;
    Active?: string,
    MaTB?: String,
    Service?: String,
}
export interface device {
    ID?: String,
    IP?: String,
    Name?: String,
    TypeDevice?: String,
    UserName?: String,
    Password?: String,
    Connect?: string;
    Active?: string,
    MaTB?: String,
    Service?: String,
    
}
export interface AddDevice {
    id: string;
    MaID: string;
    Name: string;
    Address: string;
    Service: string[];
    TypeDevice: string;
    NameLogin: string;
    pass: string;
    Connect?: string;
    Active?: string;
  }