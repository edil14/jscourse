let restaurant = {
    name: 'Ethiopian restaurant',
    guestCapacity: 40,
    guestCount: 0,

    checkAvailability : function(partySize){

        let sizeLeft = this.guestCapacity - this.guestCount;

        return sizeLeft>= partySize;
    },

 seatParty : function(partySize){

    this.guestCount = this.guestCount + partySize;

 },
    removeParty :function(partySize){
        
       this.guestCount = this.guestCount -partySize;

    }
}
 restaurant.seatParty(35)
console.log(restaurant.checkAvailability(20))
restaurant.removeParty(20)
console.log(restaurant.checkAvailability(20))