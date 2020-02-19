export class Connecteduser {

  id: number;
  email: string;
  karma: number;
  mainpseudo: string;
  password: string;
  acceslevel: number;
  ip: number;

  constructor(
    id: number,
    email: string,
    karma: number,
    mainpseudo: string,
    password: string,
    acceslevel: number,
    ip: number)

    {
    this.email = email;
    this.id = id;
    this.karma = karma;
    this.mainpseudo = mainpseudo;
    this.password = password;
    this.acceslevel = acceslevel;


  }

}
