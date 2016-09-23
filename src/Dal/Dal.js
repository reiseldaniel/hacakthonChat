// import * as firebase from 'firebase';
//
//
//
// export
//
// export default class Dal{
//
//
//
//
//
//     guid() {
//         function s4() {
//             return Math.floor((1 + Math.random()) * 0x10000)
//                 .toString(16)
//                 .substring(1);
//         }
//         return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
//             s4() + '-' + s4() + s4() + s4();
//     }
//     // config = {
//     //         apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
//     //         authDomain: "younameit-1c368.firebaseapp.com",
//     //         databaseURL: "https://younameit-1c368.firebaseio.com",
//     //         storageBucket: "younameit-1c368.appspot.com",
//     //         messagingSenderId: "359491308358"
//     //     };
//     // firebaseApp = firebase.initializeApp(config);
//     // root =   firebaseApp.database().ref("/");
//     //
//     //root;
//     config = {
//         apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
//         authDomain: "younameit-1c368.firebaseapp.com",
//         databaseURL: "https://younameit-1c368.firebaseio.com",
//         storageBucket: "younameit-1c368.appspot.com",
//         messagingSenderId: "359491308358"
//     };
//
//     firebaseApp = firebase.initializeApp(config);
//
//
//     root =   this.firebaseApp.database().ref("/");
//     // constructor(){
//     //     config = {
//     //         apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
//     //         authDomain: "younameit-1c368.firebaseapp.com",
//     //         databaseURL: "https://younameit-1c368.firebaseio.com",
//     //         storageBucket: "younameit-1c368.appspot.com",
//     //         messagingSenderId: "359491308358"
//     //     };
//     //
//     //     firebaseApp = firebase.initializeApp(config);
//     //
//     //
//     //     this.root =   firebaseApp.database().ref("/");
//     // }
//     //
//
//
//
//     static addSuggestion(suggestion)
//     {
//
//
//         var suggestionsRef = this.root.child("suggestions");
//         suggestionsRef.set(suggestion);
//
//     }
//
//
//
//
//     static currentUser(){
//
//         let user = {
//             id:"11",
//             name:"Daniel",
//             timeUnit: "seconds",
//             img:"http://classroomclipart.com/images/gallery/Clipart/Faces/TN_asian_girl_face.jpg"
//         }
//         return user;
//
//     }
//     static addCampaign(campaign)
//     {
//
//         config = {
//             apiKey: "AIzaSyANPj2A1GVk9qdN6T_JRsIDKBaIO54-CYA",
//             authDomain: "younameit-1c368.firebaseapp.com",
//             databaseURL: "https://younameit-1c368.firebaseio.com",
//             storageBucket: "younameit-1c368.appspot.com",
//             messagingSenderId: "359491308358"
//         };
//         const firebaseApp = firebase.initializeApp(config);
//         this.root =   firebaseApp.database().ref("/");
//         var campaignsRef = this.root.child("campaigns");
//         campaignsRef.set(campaign);
//
//
//
//
//     //    {"id":"50819980-e52a-44eb-b4cd-7954d3fe9c3b","time":37,"timeUnit":"day","description":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.","title":"Nullam molestie nibh in lectus.","reword":6173,"companyImage":"http://dummyimage.com/178x100.png/ff4444/ffffff","companyName":"Eamia","company":"Avamm","comments":[{"text":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.","score":72,"hasLiked":false,"name":"Harold","image":"http://dummyimage.com/220x161.png/5fa2dd/ffffff","time":53,"timeUnit":"day"},{"text":"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.","score":39,"hasLiked":true,"name":"Martin","image":"http://dummyimage.com/212x212.png/ff4444/ffffff","time":36,"timeUnit":"day"},{"text":"Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.","score":70,"hasLiked":false,"name":"Frances","image":"http://dummyimage.com/152x130.jpg/5fa2dd/ffffff","time":25,"timeUnit":"hour"},{"text":"In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.","score":1,"hasLiked":true,"name":"Samuel","image":"http://dummyimage.com/229x138.jpg/cc0000/ffffff","time":85,"timeUnit":"day"},{"text":"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.","score":34,"hasLiked":false,"name":"Philip","image":"http://dummyimage.com/163x215.jpg/cc0000/ffffff","time":54,"timeUnit":"day"},{"text":"Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.","score":9,"hasLiked":true,"name":"Frances","image":"http://dummyimage.com/169x125.bmp/dddddd/000000","time":62,"timeUnit":"hour"},{"text":"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.","score":95,"hasLiked":false,"name":"Anne","image":"http://dummyimage.com/238x197.png/ff4444/ffffff","time":66,"timeUnit":"hour"},{"text":"Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.","score":54,"hasLiked":false,"name":"Gregory","image":"http://dummyimage.com/209x197.jpg/cc0000/ffffff","time":72,"timeUnit":"day"},{"text":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","score":80,"hasLiked":false,"name":"Lillian","image":"http://dummyimage.com/237x180.jpg/ff4444/ffffff","time":45,"timeUnit":"hour"},{"text":"Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.","score":21,"hasLiked":false,"name":"Dorothy","image":"http://dummyimage.com/186x127.bmp/5fa2dd/ffffff","time":82,"timeUnit":"day"},{"text":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.","score":11,"hasLiked":false,"name":"Lisa","image":"http://dummyimage.com/239x151.png/cc0000/ffffff","time":90,"timeUnit":"day"},{"text":"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.","score":5,"hasLiked":true,"name":"Fred","image":"http://dummyimage.com/131x186.bmp/dddddd/000000","time":58,"timeUnit":"second"},{"text":"Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.","score":42,"hasLiked":true,"name":"Rose","image":"http://dummyimage.com/108x142.bmp/dddddd/000000","time":80,"timeUnit":"day"},{"text":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.","score":90,"hasLiked":false,"name":"Matthew","image":"http://dummyimage.com/178x117.jpg/ff4444/ffffff","time":43,"timeUnit":"day"},{"text":"Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","score":12,"hasLiked":true,"name":"Beverly","image":"http://dummyimage.com/245x223.png/dddddd/000000","time":21,"timeUnit":"day"},{"text":"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.","score":13,"hasLiked":false,"name":"Brenda","image":"http://dummyimage.com/243x137.jpg/ff4444/ffffff","time":67,"timeUnit":"day"},{"text":"Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.","score":86,"hasLiked":true,"name":"Shirley","image":"http://dummyimage.com/184x139.jpg/cc0000/ffffff","time":82,"timeUnit":"day"},{"text":"Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","score":29,"hasLiked":false,"name":"Thomas","image":"http://dummyimage.com/221x139.png/ff4444/ffffff","time":74,"timeUnit":"hour"},{"text":"Nunc purus. Phasellus in felis. Donec semper sapien a libero.","score":26,"hasLiked":false,"name":"Frances","image":"http://dummyimage.com/222x235.bmp/cc0000/ffffff","time":20,"timeUnit":"second"},{"text":"Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.","score":20,"hasLiked":true,"name":"Kathryn","image":"http://dummyimage.com/210x243.bmp/dddddd/000000","time":91,"timeUnit":"hour"},{"text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.","score":43,"hasLiked":false,"name":"Steve","image":"http://dummyimage.com/120x211.bmp/cc0000/ffffff","time":86,"timeUnit":"second"},{"text":"Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.","score":80,"hasLiked":false,"name":"Juan","image":"http://dummyimage.com/174x207.png/cc0000/ffffff","time":62,"timeUnit":"second"},{"text":"Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","score":27,"hasLiked":true,"name":"Nicole","image":"http://dummyimage.com/242x244.bmp/ff4444/ffffff","time":30,"timeUnit":"day"},{"text":"Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","score":83,"hasLiked":false,"name":"Jean","image":"http://dummyimage.com/194x170.png/5fa2dd/ffffff","time":72,"timeUnit":"day"},{"text":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.","score":38,"hasLiked":false,"name":"Paula","image":"http://dummyimage.com/134x160.jpg/cc0000/ffffff","time":75,"timeUnit":"day"},{"text":"Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.","score":96,"hasLiked":false,"name":"Tammy","image":"http://dummyimage.com/143x185.jpg/dddddd/000000","time":49,"timeUnit":"hour"},{"text":"Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.","score":7,"hasLiked":false,"name":"Antonio","image":"http://dummyimage.com/151x118.bmp/dddddd/000000","time":56,"timeUnit":"day"},{"text":"Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.","score":85,"hasLiked":true,"name":"Phillip","image":"http://dummyimage.com/118x180.png/ff4444/ffffff","time":88,"timeUnit":"second"},{"text":"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.","score":19,"hasLiked":true,"name":"Lois","image":"http://dummyimage.com/169x186.bmp/dddddd/000000","time":91,"timeUnit":"hour"},{"text":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.","score":17,"hasLiked":true,"name":"Phillip","image":"http://dummyimage.com/171x207.png/dddddd/000000","time":33,"timeUnit":"day"},{"text":"Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.","score":56,"hasLiked":false,"name":"Kimberly","image":"http://dummyimage.com/196x203.bmp/5fa2dd/ffffff","time":48,"timeUnit":"hour"},{"text":"Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.","score":91,"hasLiked":false,"name":"Martin","image":"http://dummyimage.com/153x227.png/dddddd/000000","time":36,"timeUnit":"day"},{"text":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.","score":56,"hasLiked":true,"name":"Judith","image":"http://dummyimage.com/232x132.png/5fa2dd/ffffff","time":24,"timeUnit":"day"},{"text":"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.","score":46,"hasLiked":false,"name":"Tammy","image":"http://dummyimage.com/100x163.jpg/ff4444/ffffff","time":49,"timeUnit":"hour"},{"text":"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.","score":60,"hasLiked":true,"name":"Sharon","image":"http://dummyimage.com/164x151.png/5fa2dd/ffffff","time":45,"timeUnit":"hour"},{"text":"Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.","score":80,"hasLiked":false,"name":"Kathryn","image":"http://dummyimage.com/215x174.png/5fa2dd/ffffff","time":28,"timeUnit":"day"},{"text":"Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.","score":48,"hasLiked":false,"name":"Paul","image":"http://dummyimage.com/137x115.bmp/5fa2dd/ffffff","time":72,"timeUnit":"second"},{"text":"Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.","score":83,"hasLiked":false,"name":"Irene","image":"http://dummyimage.com/247x248.png/ff4444/ffffff","time":86,"timeUnit":"second"},{"text":"In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","score":92,"hasLiked":false,"name":"Edward","image":"http://dummyimage.com/237x193.png/cc0000/ffffff","time":36,"timeUnit":"second"}],"image":"http://dummyimage.com/135x181.jpg/dddddd/000000"}
//
//     }
//
//     static getCampigns() {
//
//         let campaigns = this.firebaseApp.database().ref('/Campaigns/');
//         return campaigns;
//
//     }
//
//
// }
//
// export function getRef() {
//
// }
//
