const frisby = require('frisby');
const baseurl = "http://localhost:9000";

frisby.create("[IDENTIFY] Medium Life Flask ")
 .post(baseurl, {
   'league':'Prophecy',
   'text': `Rarity: Normal
Medium Life Flask
--------
Recovers 164 (augmented) Life over 6.50 Seconds
Consumes 8 of 28 Charges on use
Currently has 0 Charges
--------
Requirements:
Level: 3
--------
Item Level: 5
--------
Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.`
	})
	.expectStatus(200)
	.expectJSON({
	 info : { fullName : "Medium Life Flask" },
	 attributes : {
	   league: "Prophecy",
	   rarity: "Normal",
	   baseItemType : "Flask",
	   itemType: "Flask",
	 },
	 properties: {
	 	Flask: {}
	 }
	})
	.toss();


frisby.create("[IDENTIFY] Aquamarine Flask of Steadiness")
 .post(baseurl, {
   'league':'Prophecy',
   'text': `Rarity: Magic
Aquamarine Flask of Steadiness
--------
Quality: +7% (augmented)
Lasts 5.40 (augmented) Seconds
Consumes 15 of 40 Charges on use
Currently has 0 Charges
20% chance to Avoid Cold Damage when Hit (augmented)
--------
Requirements:
Level: 27
--------
Item Level: 52
--------
Creates Chilled Ground on Use
--------
50% increased Stun Recovery during Flask effect
--------
Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.`
	})
	.expectStatus(200)
	.expectJSON({
		info: { fullName:"Aquamarine Flask of Steadiness" },
		attributes: {
			league: "Prophecy",
			rarity: "Magic",
			itemType: "Flask",
			baseItemType: "Flask"
		},
		properties: { Flask: { Quality: 7 }},
		mods: {
			Flask: {
				implicit: {
					"Creates Chilled Ground on Use": true,
					"#% chance to Avoid Cold Damage when Hit (augmented)": 20
				},
				explicit: {
					"#% increased Stun Recovery during Flask effect": 50
				}
			}
		},
		modsTotal: {
			"#% chance to Avoid Cold Damage when Hit (augmented)": 20,
			"#% increased Stun Recovery during Flask effect": 50
		}
	})
	.toss();


frisby.create("[IDENTIFY] Lion's Roar Granite Flask")
 .post(baseurl, {
   'league':'Prophecy',
   'text': `Rarity: Unique
Lion's Roar
Granite Flask
--------
Quality: +20% (augmented)
Lasts 4.80 (augmented) Seconds
Consumes 30 of 60 Charges on use
Currently has 60 Charges
+3000 to Armour (augmented)
--------
Requirements:
Level: 27
--------
Item Level: 48
--------
Knocks Back Enemies in an Area on Flask use
75% chance to cause Enemies to Flee on use
35% more Melee Physical Damage during effect
Adds Knockback during Flask effect
--------
A sprinkle of hunger, a spoonful of menace
and three generous cups of Might.
--------
Right click to drink. Can only hold charges while in belt. Refills as you kill monsters.`
 }) // '
	.expectStatus(200)
	.expectJSON({
		info : { fullName : "Lion's Roar Granite Flask" },
		attributes : {
		 league: "Prophecy",
		 rarity: "Unique",
		 baseItemType : "Flask",
		 itemType: 'Flask'
		},
		properties: { Flask: { Quality: 20 }},
		mods: {
			Flask: {
				implicit: { '+# to Armour (augmented)': 3000 },
				explicit: {
					"Knocks Back Enemies in an Area on Flask use": true,
					"#% chance to cause Enemies to Flee on use": 75,
					"#% more Melee Physical Damage during effect": 35,
					"Adds Knockback during Flask effect": true
				}
			}
		},
		modsTotal:{
			"+# to Armour (augmented)":3000,
			"#% chance to cause Enemies to Flee on use":75,
			"#% more Melee Physical Damage during effect":35
		}
 })
.toss();


// frisby.create("[IDENTIFY] ")
//  .post(baseurl, {
//    'league':'Prophecy',
//    'text':`
//  })
//  .expectStatus(200)
//  .expectJSON({
//    info : { fullName : "" },
//    attributes : {
//      league: "Prophecy",
//      rarity: "",
//      baseItemType : ""
//    }
//  })
// .toss();
