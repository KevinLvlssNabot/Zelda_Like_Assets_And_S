function scroll (){ // fonction de changement de caméra
  if (scrollnumber == 0 && player.body.velocity.y < 0) {
    this.cameras.main.setOrigin(0,0);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 15, 20);
    money.x = 15; money.y = 35;
    moneyAffichage.x = 16; moneyAffichage.y = 35;
    scrollnumber = 1;
  } else if (scrollnumber == 1 && player.body.velocity.y > 0) {
    this.cameras.main.setOrigin(0,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 315, 20);
    scrollnumber = 0;
    money.x = 15; money.y = 335;
    moneyAffichage.x = 16; moneyAffichage.y = 335;
  } else if (scrollnumber == 0 && player.body.velocity.x > 0 && player.x > 350) {
    this.cameras.main.setOrigin(1,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 415, 315, 20);
    scrollnumber = 2;
    money.x = 415; money.y = 335;
    moneyAffichage.x = 416; moneyAffichage.y = 335;
  } else if (scrollnumber == 2 && player.body.velocity.x < 0 && player.x > 350) {
    this.cameras.main.setOrigin(0,1);
    Phaser.Actions.SetXY(bulledevies.getChildren(), 15, 315, 20);
    scrollnumber = 0;
    money.x = 15; money.y = 335;
    moneyAffichage.x = 16; moneyAffichage.y = 335;
  }
}
//

//
