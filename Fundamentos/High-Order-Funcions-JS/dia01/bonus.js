const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 145,
    damage: () => {
        let mageDamage = {
        dano: Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence),
        mana: 15,
        }
        if (mage.mana < 15) {
            return 'Não possui mana suficiente';
        } else {
            return mageDamage;
        }
    },
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: () => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength) + warrior.strength),
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: () => Math.floor(Math.random() * (dragon.strength - 15) + 15),
  };

  const battleMembers = { mage, warrior, dragon };
  
  const gameActions = {
    warriorTurn: ((danoWarrior) => dragon.healthPoints = dragon.healthPoints - warrior.damage()),
    mageTurn: ((danoMage) => {
        dragon.healthPoints = dragon.healthPoints - mage.damage().dano;
        mage.mana = mage.mana - 15;
    }),
    dragonTurn: ((danoDragon) => {
        const dDramage = dragon.damage()
        warrior.healthPoints = warrior.healthPoints - dDramage;
        mage.healthPoints = mage.healthPoints - dDramage;
    }),
    turnResult: ((resultadoDoTurno) => battleMembers),
  };

  gameActions.warriorTurn()
  console.log(battleMembers)
  gameActions.mageTurn()
  console.log(battleMembers)
  gameActions.dragonTurn()
  console.log(battleMembers)
