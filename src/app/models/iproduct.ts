export interface Iproduct {
    //model
    //key :type المفروض تكون بناء عالسكيما اللي فالباك اند

   id:number,
   productName:string,
   productImgURL?:string,
   productQuantity:number,
   productPrice:number,
   CategoryID:number,
   productDetails:string,
   

  totalPrice?:number,
}
