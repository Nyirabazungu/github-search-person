export class User {
    public showDescription:boolean;
    constructor(
        public avatar_url :string,
        public gravatar_id:string,
        public name:string,
        public public_repos:number,
        public followers:number,
        public following:number,
        public html_url:string,
       ){
    this.showDescription=false
    }
}

