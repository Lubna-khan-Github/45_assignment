let guest_list : string[] = ["Amir","Ali","Zain"];
for(let i=0; i<guest_list.length; i++){
    console.log("Dear Mr." + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you')
}
 let absent_guest : string = "Amir";
 let new_guest : string = "Kamran Tessori";
 guest_list[0] = new_guest ;
 for(let i=0; i<guest_list.length; i++){
    console.log("Dear Mr." + guest_list[i] + ',\n\nit is our pleasure to invite you in our party.\n\nthank you');
 }   
 console.log(`Mr.${absent_guest} is not coming to the party.`);
 