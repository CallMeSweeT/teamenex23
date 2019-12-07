const  Discord  =  kræver ( ' discord.js ' );
const  client  =  new  Discord.Client ();

klient . på ( ' klar ' , () => {
    konsol . log ( ' Jeg er klar! ' );
});

klient . on ( ' besked ' , besked  => {
    if ( meddelelse . indhold  ===  ' ping ' ) {
    	besked . svar ( ' pong ' );
  	}
});

// DETTE SKAL VÆRE DENNE VEJ
klient . login ( proces . env . BOT_TOKEN );
