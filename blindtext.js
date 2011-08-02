var Blindtext = {
	defaults : {
		length : 150,
		lang: 'lorem'
	},
	samples : {
		lorem : "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. ",
		en : "This is my take at an English dummy text. I'm just writing it myself right now, since didn't want to accidentally include any copyrighted material. Please help by suggesting nice, free dummy text in English!",
		de : "Ich sitze in meinem Zimmer im Hauptquartier des Lärms der ganzen Wohnung. Alle Türen höre ich schlagen, durch ihren Lärm bleiben mir nur die Schritte der zwischen ihnen Laufenden erspart, noch das Zuklappen der Herdtüre in der Küche höre ich. Der Vater durchbricht die Türen meines Zimmers und zieht im nachschleppenden Schlafrock durch, aus dem Ofen im Nebenzimmer wird die Asche gekratzt, Valli fragt, durch das Vorzimmer Wort für Wort rufend, ob des Vaters Hut schon geputzt ist, ein Zischen, das mir befreundet sein will, erhebt noch das Geschrei einer antwortenden Stimme. Die Wohnungstüre wird aufgeklinkt und lärmt, wie aus katarrhalischem Hals, öffnet sich dann weiterhin mit dem Singen einer Frauenstimme und schliesst sich endlich mit einem dumpfen, männlichen Ruck, der sich am rücksichtslosesten anhört. Der Vater ist weg, jetzt beginnt der zartere, zerstreutere, hoffnungslosere Lärm, von den Stimmen der zwei Kanarienvögel angeführt. Schon früher dachte ich daran, bei den Kanarienvögeln fällt es mir von neuem ein, ob ich nicht die Türe bis zu einer kleinen Spalte öffnen, schlangengleich ins Nebenzimmer kriechen und so auf dem Boden meine Schwestern und ihr Fräulein um Ruhe bitten sollte. Franz Kafka."
	},
	get : function (length, lang) {
		if(typeof length == 'string') length = parseInt(length);	
		var sample = Blindtext.samples[lang] || Blindtext.samples.lorem;
		var text = sample;
		while(text.length < length) {
			text += " " + sample;
		}
		return text.substr(0,length);
	},
	replace : function () {
		$("blindtext").each(function (i, text) {
			var length = $(text).attr('length') || Blindtext.defaults.length;			
			var lang = $(text).attr('lang') || Blindtext.defaults.lang;						
			$(text).replaceWith(Blindtext.get(length, lang));	
		});
	}
}

jQuery(document).ready(function () {
	Blindtext.replace();
});		