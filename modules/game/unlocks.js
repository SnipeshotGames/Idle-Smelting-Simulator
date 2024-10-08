export const Shop_Upgrades = {
/*
	"shop_1_1":	{
					"name": "Click Damage +1",
					"cost": 5,
					"requires": null,
					"unlock": "shop_click_damage_1"
				},

	"shop_1_2":	{
					"name": "Click Damage +1",
					"cost": 50,
					"requires": "shop_click_damage_1",
					"unlock": "shop_click_damage_2"
				},
*/
	"shop_2_1": {
					"name": "Reduces ore respawn time to 5s",
					"cost": 10,
					"requires": null,
					"unlock": "shop_ore_respawn_1"
				},
	"shop_2_2": {
					"name": "Reduces ore respawn time to 1s",
					"cost": 100,
					"requires": "shop_ore_respawn_1",
					"unlock": "shop_ore_respawn_2"
				},
	"shop_2_3": {
					"name": "Make ore respawn instantly",
					"cost": 1000,
					"requires": "shop_ore_respawn_2",
					"unlock": "shop_ore_respawn_3"
				},
	"shop_3_1": {
					"name": "Purchase a robot that will mine for you",
					"cost": 50,
					"requires": null,
					"unlock": "mine_automation"
	},
	"shop_3_2": {
					"name": "Purchase a second miner robot",
					"cost": 500,
					"requires": "mine_automation",
					"unlock": "shop_miner_1"
	},
	"shop_3_3": {
					"name": "Purchase a third robot miner",
					"cost": 5000,
					"requires": "shop_miner_1",
					"unlock": "shop_miner_2"
	},
	"shop_4_1": {
					"name": "Doubles the speed of all miner robots",
					"cost": 1000,
					"requires": "miner_automation",
					"unlock": "shop_miner_speed_1"
	},


	}