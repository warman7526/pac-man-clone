controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mr_pac.setVelocity(0, 0 - spd)
})
function move_sprite (s: Sprite) {
    tiles.placeOnRandomTile(s, assets.tile`tile3`)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mr_pac.setVelocity(0 - spd, 0)
})
info.onCountdownEnd(function () {
	
    game.over()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mr_pac.setVelocity(spd, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mr_pac.setVelocity(0, spd)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    scoreadd = randint(30, 170)
    move_sprite(otherSprite)
    info.changeScoreBy(scoreadd)
    mr_pac.say("You Got:" + scoreadd + " Pts!", 500)
    music.baDing.playUntilDone()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    scoreadd = randint(-120, -20)
    move_sprite(otherSprite)
    info.changeScoreBy(scoreadd)
    mr_pac.say("You Lost:" + scoreadd + " Pts!", 500)
    music.powerDown.playUntilDone()
})
let scoreadd = 0
let spd = 0
let mr_pac: Sprite = null
music.setVolume(255)
tiles.setTilemap(tilemap`level_0`)
mr_pac = sprites.create(img`
    . . 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 2 5 2 5 . 
    5 5 5 5 5 5 5 5 5 . . 
    5 5 5 5 5 5 5 . . . . 
    5 5 5 5 5 . . . . . . 
    5 5 5 5 . . . . . . . 
    5 5 5 5 . . . . . . . 
    5 5 5 5 5 5 . . . . . 
    5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 . . 
    `, SpriteKind.Player)
spd = 45
let dot = sprites.create(img`
    . 1 . 
    1 1 1 
    . 1 . 
    `, SpriteKind.Food)
let dot2 = sprites.create(img`
    . 1 . 
    1 1 1 
    . 1 . 
    `, SpriteKind.Food)
let dot3 = sprites.create(img`
    . 1 . 
    1 1 1 
    . 1 . 
    `, SpriteKind.Food)
let dot4 = sprites.create(img`
    . 1 . 
    1 1 1 
    . 1 . 
    `, SpriteKind.Food)
let ghost0 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . 9 9 9 9 9 . . . . . 
    . . . . 9 9 9 9 9 9 9 . . . . 
    . . . 9 9 9 9 9 9 9 9 9 . . . 
    . . . 9 9 9 f 1 9 1 f 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 . . 
    . . 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . 9 9 9 9 f f 2 2 2 2 2 2 9 9 
    . 9 9 9 9 f f f f f f f f 9 9 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
    9 . 9 . 9 . 9 . 9 . 9 . 9 . 9 
    `, SpriteKind.Enemy)
let ghost1 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . 
    . . . . 7 7 7 7 7 7 7 . . . . 
    . . . 7 7 7 7 7 7 7 7 7 . . . 
    . . . 7 7 7 f 1 7 1 f 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 f f 2 2 2 2 2 2 7 7 
    . 7 7 7 7 f f f f f f f f 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 . 7 . 7 . 7 . 7 . 7 . 7 . 7 
    7 . 7 . 7 . 7 . 7 . 7 . 7 . 7 
    `, SpriteKind.Enemy)
let ghost2 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 f 1 3 1 f 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . 3 3 3 3 f f 2 2 2 2 2 2 3 3 
    . 3 3 3 3 f f f f f f f f 3 3 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 . 3 . 3 . 3 . 3 . 3 . 3 . 3 
    3 . 3 . 3 . 3 . 3 . 3 . 3 . 3 
    `, SpriteKind.Enemy)
let ghost3 = sprites.create(img`
    . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 . . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 f 1 4 1 f 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
    . 4 4 4 4 f f 2 2 2 2 2 2 4 4 
    . 4 4 4 4 f f f f f f f f 4 4 
    . 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 . 4 . 4 . 4 . 4 . 4 . 4 . 4 
    4 . 4 . 4 . 4 . 4 . 4 . 4 . 4 
    `, SpriteKind.Enemy)
ghost0.follow(mr_pac, spd * 0.75)
ghost1.follow(mr_pac, spd * 0.75)
ghost2.follow(mr_pac, spd * 0.75)
ghost3.follow(mr_pac, spd * 0.75)
move_sprite(dot)
move_sprite(dot2)
move_sprite(dot3)
move_sprite(dot4)
move_sprite(ghost1)
move_sprite(ghost2)
move_sprite(ghost3)
move_sprite(ghost0)
scene.cameraFollowSprite(mr_pac)
tiles.placeOnRandomTile(mr_pac, assets.tile`tile1`)
info.setScore(0)
info.startCountdown(180)
mr_pac.setFlag(SpriteFlag.StayInScreen, true)
forever(function () {
    music.playMelody("C G F E C5 C5 C F ", 300)
    music.playMelody("C - G G F F E - ", 300)
})
forever(function () {
    mr_pac.setImage(img`
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 2 5 2 5 . 
        5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 . . . . . . 
        5 5 5 5 . . . . . . . 
        5 5 5 5 . . . . . . . 
        5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `)
    pause(100)
    mr_pac.setImage(img`
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 2 5 2 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `)
    pause(100)
    mr_pac.setImage(img`
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 2 5 2 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `)
    pause(100)
    mr_pac.setImage(img`
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 2 5 2 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 5 . 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `)
    pause(100)
    mr_pac.setImage(img`
        . . 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 2 5 2 5 . 
        5 5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 . . . . 
        5 5 5 5 5 . . . . . . 
        5 5 5 5 . . . . . . . 
        5 5 5 5 . . . . . . . 
        5 5 5 5 5 5 . . . . . 
        5 5 5 5 5 5 5 5 5 . . 
        . 5 5 5 5 5 5 5 5 5 . 
        . . 5 5 5 5 5 5 5 . . 
        `)
    pause(100)
})
