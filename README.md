# libertChan_Front


<center>

Front | Back
---| ---
[:tophat:](https://github.com/kim7834/libertChan_Front) | [:bug:](https://github.com/borisBelloc/libertChan_back)

</center>

1/ clone repo
2/ `npm install`


### Technos :
- [Angular 9](https://www.npmjs.com/package/@angular/cli)
    - Packages installed (node_modules) : 
        - [bootstrap](https://www.npmjs.com/package/bootstrap)
        - [@ng-bootstrap/ng-bootstrap](https://www.npmjs.com/package/@ng-bootstrap/ng-bootstrap) (modal)
        - `ng add @angular/localize` (asked by Angular 9)
        - [ng-modal](https://www.npmjs.com/package/ng-modal)

        
Etude #1 : Localstorage with : https://www.npmjs.com/package/@ngx-pwa/local-storage (used for Auth)


Etude #2 -> **aborted** : (CDK can for exemple make draggable stuff):
- [@angular/cdk](https://www.npmjs.com/package/@angular/cdk)
- TypeScript (latest) `npm install typescript@latest --save` ; typescript@3.7 requiered by CDK



<br><br><br><br><br>
-----



##### branchs :
- **AuthTp** (TP Lionnel) Protected Route with Auth -> **this branch need `npm install`**
- **NavbarWithInput** : (test)The Navbar component call the Header component with an input to pass the wanted channel name
- **observableRouting** : (test) Navbar change channel with observable
- **genericRoutingB1** : (test) Generic routing (navbar) with infos retrieved from url
