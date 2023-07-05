controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Tiffany.isHittingTile(CollisionDirection.Bottom)) {
        Tiffany.vy = -75
    }
})
let Tiffany: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
Tiffany = sprites.create(assets.image`Tiffany`, SpriteKind.Player)
tiles.placeOnRandomTile(Tiffany, assets.tile`myTile4`)
scene.cameraFollowSprite(Tiffany)
controller.moveSprite(Tiffany, 100, 0)
Tiffany.ay = 200
forever(function () {
    characterAnimations.loopFrames(
    Tiffany,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . c 3 3 3 3 3 3 3 c . . . 
        . . . c c 3 b b b b b 3 c c . . 
        . . . c 3 b 7 1 b 7 1 b 3 c . . 
        1 1 . c 3 b b b b b b b 3 c . . 
        1 f . c 3 3 b 2 2 b b 3 3 c . . 
        1 f . . c 3 3 b b b 3 3 c . . . 
        1 f . . . c 3 3 b b 3 3 c c . b 
        1 f . . . . c c b b c c 3 3 c . 
        1 f . . b 2 b b b b 2 2 c 3 3 c 
        1 f b b . 2 2 2 2 2 2 2 b c c c 
        1 . . . . . 2 b b b 2 . . b . . 
        1 1 . . . . 9 9 d 9 9 . . b . . 
        . f . . . . b . . . b . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . c 3 3 3 3 3 3 3 c . . . 
        . . . c c 3 b b b b b 3 c c . . 
        . . . c 3 b 7 1 b 7 1 b 3 c . . 
        1 1 . c 3 b b b b b b b 3 c . . 
        1 f . c 3 3 b 2 2 b b 3 3 c . . 
        1 f . . c 3 3 b b b 3 3 c . . . 
        1 f . . . c 3 3 b b 3 3 c c . b 
        1 f . . . . c c b b c c 3 3 c . 
        1 f . . b 2 b b b b 2 2 c 3 3 c 
        1 f b b . 2 2 2 2 2 2 2 b c c c 
        1 . . . . . 2 b b b 2 . . b . . 
        1 1 . . . . 9 9 d 9 9 . . b . . 
        . f . . . b . . . . b . . . . . 
        . . . . f f . . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . c 3 3 3 3 3 3 3 c . . . 
        . . . c c 3 b b b b b 3 c c . . 
        . . . c 3 b 7 1 b 7 1 b 3 c . . 
        1 1 . c 3 b b b b b b b 3 c . . 
        1 f . c 3 3 b 2 2 b b 3 3 c . . 
        1 f . . c 3 3 b b b 3 3 c . . . 
        1 f . . . c 3 3 b b 3 3 c c . b 
        1 f . . . . c c b b c c 3 3 c . 
        1 f . . b 2 b b b b 2 2 c 3 3 c 
        1 f b b . 2 2 2 2 2 2 2 b c c c 
        1 . . . . . 2 b b b 2 . . b . . 
        1 1 . . . . 9 9 d 9 9 . . b . . 
        . f . . . . b . . b . . . . . . 
        . . . . . f f . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c c c c c c . . . 
        . . . . c 3 3 3 3 3 3 3 c . . . 
        . . . c c 3 b b b b b 3 c c . . 
        . . . c 3 b 7 1 b 7 1 b 3 c . . 
        1 1 . c 3 b b b b b b b 3 c . . 
        1 f . c 3 3 b 2 2 b b 3 3 c . . 
        1 f . . c 3 3 b b b 3 3 c . . . 
        1 f . . . c 3 3 b b 3 3 c c . b 
        1 f . . . . c c b b c c 3 3 c . 
        1 f . . b 2 b b b b 2 2 c 3 3 c 
        1 f b b . 2 2 2 2 2 2 2 b c c c 
        1 . . . . . 2 b b b 2 . . b . . 
        1 1 . . . . 9 9 d 9 9 . . b . . 
        . f . . . . b . . . b . . . . . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    Tiffany,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c c c c . . . . 
        . . . c 3 3 3 3 3 3 3 c . . . . 
        . . c c 3 b b b b b 3 c c . . . 
        . . c 3 b 1 7 b 1 7 b 3 c . . . 
        . . c 3 b b b b b b b 3 c . 1 1 
        . . c 3 3 b b 2 2 b 3 3 c . f 1 
        . . . c 3 3 b b b 3 3 c . . f 1 
        b . c c 3 3 b b 3 3 c . . . f 1 
        . c 3 3 c c b b c c . . . . f 1 
        c 3 3 c 2 2 b b b b 2 b . . f 1 
        c c c b 2 2 2 2 2 2 2 . b b f 1 
        . . b . . 2 b b b 2 . . . . . 1 
        . . b . . 9 9 d 9 9 . . . . 1 1 
        . . . . . b . . . b . . . . f . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c c c c . . . . 
        . . . c 3 3 3 3 3 3 3 c . . . . 
        . . c c 3 b b b b b 3 c c . . . 
        . . c 3 b 1 7 b 1 7 b 3 c . . . 
        . . c 3 b b b b b b b 3 c . 1 1 
        . . c 3 3 b b 2 2 b 3 3 c . f 1 
        . . . c 3 3 b b b 3 3 c . . f 1 
        b . c c 3 3 b b 3 3 c . . . f 1 
        . c 3 3 c c b b c c . . . . f 1 
        c 3 3 c 2 2 b b b b 2 b . . f 1 
        c c c b 2 2 2 2 2 2 2 . b b f 1 
        . . b . . 2 b b b 2 . . . . . 1 
        . . b . . 9 9 d 9 9 . . . . 1 1 
        . . . . . b . . . . b . . . f . 
        . . . . . f f . . . f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c c c c . . . . 
        . . . c 3 3 3 3 3 3 3 c . . . . 
        . . c c 3 b b b b b 3 c c . . . 
        . . c 3 b 1 7 b 1 7 b 3 c . . . 
        . . c 3 b b b b b b b 3 c . 1 1 
        . . c 3 3 b b 2 2 b 3 3 c . f 1 
        . . . c 3 3 b b b 3 3 c . . f 1 
        b . c c 3 3 b b 3 3 c . . . f 1 
        . c 3 3 c c b b c c . . . . f 1 
        c 3 3 c 2 2 b b b b 2 b . . f 1 
        c c c b 2 2 2 2 2 2 2 . b b f 1 
        . . b . . 2 b b b 2 . . . . . 1 
        . . b . . 9 9 d 9 9 . . . . 1 1 
        . . . . . . b . . b . . . . f . 
        . . . . . . f f . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . c c c c c c c c c . . . . 
        . . . c 3 3 3 3 3 3 3 c . . . . 
        . . c c 3 b b b b b 3 c c . . . 
        . . c 3 b 1 7 b 1 7 b 3 c . . . 
        . . c 3 b b b b b b b 3 c . 1 1 
        . . c 3 3 b b 2 2 b 3 3 c . f 1 
        . . . c 3 3 b b b 3 3 c . . f 1 
        b . c c 3 3 b b 3 3 c . . . f 1 
        . c 3 3 c c b b c c . . . . f 1 
        c 3 3 c 2 2 b b b b 2 b . . f 1 
        c c c b 2 2 2 2 2 2 2 . b b f 1 
        . . b . . 2 b b b 2 . . . . . 1 
        . . b . . 9 9 d 9 9 . . . . 1 1 
        . . . . . b . . . b . . . . f . 
        . . . . . f f . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
})
