const NFTs = []

function mintNFT (_name,_address,_shirtType,_haircolor) {
      const NFT = {

       "name":_name,
       "address":_address,
       "shirtType":_shirtType,
       "haircolor":_haircolor

      }
     NFTs.push(NFT);
     console.log("Minted:"+ _name);

}

function listNFTs () {
 for (let i = 0; i < NFTs.length; i++){
  console.log("\nID: \t\t" + (i + 1));
  console.log("Name: \t\t" + NFTs[i].name);
  console.log("Address: \t" + NFTs[i].address);
  console.log("Shirt Type: " + NFTs[i].shirtType);
  console.log("Haircolor: \t" + NFTs[i].haircolor);

 }       
}

function getTotalinfo () {
  console.log("\n Total number of NFTs: " + NFTs.length);
}

mintNFT("Ajay","Newyork","printed","black");
mintNFT("Om","Mumbai","printed","grey");
mintNFT("Amit","Delhi","hoodie","white");
mintNFT("Ram","Kathmandu","hoodie","brown");
listNFTs();
getTotalinfo();
